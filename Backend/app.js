const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const main = async () => {
    await mongoose.connect(process.env.mongoURL);
    console.log("DB Connected");
}
main().catch(err => console.log(err));

const corsOptions = {
    origin: process.env.origin, // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Use with UI');
})

app.use('/:userId', require('./routes/CartAndOrder.js'));
app.use('/:userId/getcart', require('./routes/GetCart.js'));
app.use('/:cartid/removecart', require('./routes/RemoveCart.js'))

app.use('/home', require('./routes/Home.js'));

app.use('/api', require('./routes/CreateUser.js'));
app.use('/api', require('./routes/LoginUser.js'));

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})