const express = require("express");
const path = require("path")
const app = express();

const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as PUG
app.set('view engine', 'pug')

//Set the views directory.
app.set('/views', path.join(__dirname, 'views')); 

// Our pug demo endpoint
app.get('/views', (req, res) => {
    res.status(200).render('demo', { title: 'Hello Supriyo', message: 'Hello there! My name is Supriyo Das, This is my first pug template endpoint.' })
  })

app.get("/", (req, res)=>{
    res.send("This is Home page of my first app using express");
});

app.get("/about", (req, res)=>{
    res.send("This is About page of my first app using express");
});

app.post("/about", (req, res)=>{
    res.send("This is POST request from About page of my first app using express");
});

app.get("/this", (req, res)=>{
    res.status(404).send("page not found");
});


app.listen(port, ()=>{
    console.log(`This app is running in port no ${port}`);
});