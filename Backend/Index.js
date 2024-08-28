const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRegisterModel = require('./Models/register.js');

const app = express();
app.use(express.json());
app.use(cors());

// Correct MongoDB connection string
mongoose.connect("mongodb://127.0.0.1:27017/DesiDhaga_DB")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

app.post('/loginsignup', (req, res) => {
    UserRegisterModel.create(req.body)
        .then(register => res.json(register))
        .catch(err => res.status(500).json(err));
});

app.post('/Login', (req, res) => {
    const { email, password } = req.body;
    UserRegisterModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.alert("The password is Incorrect!")
            }
        }else{
            res.json("No record Existed")
        }
    })
})

app.listen(8000, () => {
    console.log('Server is Running on port 8000!');
});
