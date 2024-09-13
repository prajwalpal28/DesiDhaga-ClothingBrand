const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRegisterModel = require('./Models/register.js');

// Load environment variables from .env file
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Correct MongoDB connection string
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

app.post('/loginsignup', (req, res) => {
    UserRegisterModel.create(req.body)
        .then(register => res.json(register))
        .catch(err => res.status(500).json(err));
});

app.post('/Login', (req, res) => {
    const { email, password } = req.body;
    UserRegisterModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.status(400).json("The password is incorrect");
                }
            } else {
                res.status(404).json("No record existed");
            }
        })
        .catch(err => res.status(500).json(err));
});

// Correct server port configuration
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
