// get express
const express = require('express');
// get cors
const cors = require('cors');
// get db
const { database } = require('./db/database');
// 
const { readdirSync } = require('fs');
// create an app
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

// middlewares

app.use(express.json());

// use cors to not have problems acessing our server ex. your domain
app.use(cors(
    { origin: ["http://localhost:3000", "https://server-u2ad.onrender.com", "https://family-expense-frontend.vercel.app"] }
));

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    // connect the database
    database();
    app.listen(PORT, () => {
        console.log(PORT);
    });
};

server();