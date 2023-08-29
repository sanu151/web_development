const express = require('express');
const path = require('path')
const fs = require('fs')

const app = express();

const port = 80;

//STATIC FILES
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded())

//VIEWS FILES
app.set('view engine', 'pug') //Set the view template engine as PUG
app.set('/views', path.join(__dirname, 'views')); // Set the views directory

//END POINTS
app.get('/', (req, res)=>{
    const hdr = "Get the GYM membership for 40$ - Fill the form now"
    const con = "This is a content stored in a variable using pug"
    const param = {'title':'Using variable render HTML as pug', 'content': con, 'header': hdr}
    res.status(200).render("index.pug", param);
})

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    
    const param = {'message':'Your data hasbeen submitted successfully'}
    res.status(200).render("index.pug", param);

    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her : ${more}`

    fs.writeFileSync('output.txt', outputToWrite)
})


// Server start code
app.listen(port, ()=>{
    console.log(`This server is running using port ${port}`);
});
