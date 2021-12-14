## Setup the Project

1. Navigate inside the directory `cd backend`
2. Enter `npm i` in the Terminal of the project directory.
3. Install nodemon on your system `npm i -g nodemon`
4. Create a `.env` file in the backend folder
5. Import the `hotels.json` file in mongodb by creating a collection named `hotels`
6. Enter `npm start` to run the app. If nodemon failed to start or it has some other problems, when used `node app.js`, then use `npx nodemon app.js`
7. Open up your browser and visit the url `localhost:3000` to view the app

## Setting up `.env` file

SECRET_KEY = <any random string> eg: mysecretkey
MONGODBURL = <your mongodb url for connection> eg: mongodb://localhost:27017/itc
SECURITY_KEY = <a random string with 32 characters> eg: HlC*UG0LGO;s%{&bVnT_ocz)u2;QE$SD
*In random strings, don't use the symbols '," and \
