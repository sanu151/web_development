const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyparser = require("body-parser"); // To save data in database
// getting-started Mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/contactform');
}

const port = 80;

// Define Moongoose Schema
const contactDance = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    aboutyou: String
});
const Contact = mongoose.model('Contact', contactDance);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() =>{
        res.send("This data is saved to the database")
    }).catch(() => {
        res.status(400).send("This data is not saved to the database")
    });

    // res.status(200).render('contact.pug', params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
