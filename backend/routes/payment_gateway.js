const express = require('express');
const router = express.Router();
const PUBLISHABLE_KEY = process.env.PUBLISHABLE_KEY;
const SECRET_KEY = process.env.SECRET_KEY_PAYMENT;

const stripe = require('stripe')(SECRET_KEY);

router.get('/', (req, res) => {
    res.render('payment', { key: PUBLISHABLE_KEY });
})

router.post('/', (req, res) => {
    const { email, stripeToken } = req.body;
    stripe.customers.create({
        email: email,
        source: stripeToken,
        name: 'Shubham Mondal',
        address: {
            line1: 'Github Home',
            postal_code: '493221',
            city: 'Raipur',
            state: 'Chhattisgarh',
            country: 'America'
        }
    }).then((customer) => {
        return stripe.charges.create({
            amount: 50,
            description: 'Hotel Room',
            currency: 'USD',
            customer: customer.id
        });
    }).then((charge) => {
        console.log('Payment is success');
        res.send("Success");
    }).catch((err) => {
        res.send(err);
    });
})

module.exports = router;