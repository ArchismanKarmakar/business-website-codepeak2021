const express = require("express");
const path = require("path");
const router = express.Router();

// for aes 256
const crypto = require("crypto");
const Securitykey = process.env.SECURITY_KEY;

const jwt = require("jsonwebtoken");

const User = require("../models/user");

const userMiddleware = require("../controllers/userMiddleware");

const secretKey = process.env.SECRET_KEY;

function makeid(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+[];{}?";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

// signup route
router.get("/signup", userMiddleware.verifyLoggedUser, (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "signup.html"));
});

// login route
router.get("/login", userMiddleware.verifyLoggedUser, (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "login.html"));
});

// protected dashboard route
router.get("/dashboard", userMiddleware.verifyJWT, async (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "dashboard.html"));
});

router.get("/check", userMiddleware.verifyLoggedUser, (req, res) => {
    try {
        res.status(200).json({ msg: "You can view this resource" });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
});

router.post("/signup", async (req, res) => {
    const { username, email, password, cpassword } = req.body;
    if (!username || !email || !password || !cpassword) {
        return res.status(403).json({ error: "All fields are required" });
    }
    if (password !== cpassword) {
        return res.status(401).json({ error: "Passwords do not match" });
    }
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({ error: "User already exists" });
        }
        user = new User({ username, email, password });

        // encrypt password
        const IV = makeid(16);
        const cipher = crypto.createCipheriv("aes-256-cbc", Securitykey, IV);
        let encryptedPassword = cipher.update(password, "utf-8", "hex");
        encryptedPassword += cipher.final("hex");
        encryptedPassword += IV;
        user.password = encryptedPassword;
        await user.save();
        // login user with jwt
        const payload = {
            user: { id: user.id },
        };
        const token = jwt.sign(payload, secretKey, {
            expiresIn: 24 * 60 * 60 * 1000,
        });
        res.cookie("usertoken", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
        })
            .status(200)
            .json({ msg: "Successfully signed up", token: token });
    } catch (err) {
        res.status(500).send("Error in Saving");
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (email === "" || password === "") {
        return res.status(403).json({ error: "All fields are required" });
    }
    try {
        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }

        // decrypt password
        const IV = user.password.substr(user.password.length - 16);
        const decipher = crypto.createDecipheriv(
            "aes-256-cbc",
            Securitykey,
            IV
        );
        let decryptedPassword = decipher.update(
            user.password.substr(0, user.password.length - 16),
            "hex",
            "utf-8"
        );
        decryptedPassword += decipher.final("utf-8");

        // check if passwords match
        if (decryptedPassword !== password) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // login user with jwt
        const payload = {
            user: { id: user.id },
        };
        const token = jwt.sign(payload, secretKey, {
            expiresIn: 24 * 60 * 60 * 1000,
        });
        res.cookie("usertoken", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
        })
            .status(200)
            .json({ msg: "Successfully logged in", token: token });
    } catch (err) {
        res.status(500).send("Some error occured");
    }
});

router.get("/logout", (req, res) => {
    try {
        res.status(200).clearCookie("usertoken").json({msg: "You are logged out"});
    } catch (err) {
        res.status(500).send("Some error occured");
    }
});

module.exports = router;
