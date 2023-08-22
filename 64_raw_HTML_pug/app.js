const express = require('express');
const path = require('path')

const app = express();

const port = 80;

//STATIC FILES
app.use('/static', express.static('static')); // For serving static files

//VIEWS FILES
app.set('view engine', 'pug') //Set the view template engine as PUG
app.set('/views', path.join(__dirname, 'views')); // Set the views directory

//END POINTS
app.get('/', (req, res)=>{
    const hdr = "This is a Heading text"
    const con = "This is a paragraph to send plain text using variable by pug."
    const param = {'title':'Using variable render HTML as pug', 'content': con, 'header': hdr}
    res.status(200).render("index.pug", param);
})


// Server start code
app.listen(port, ()=>{
    console.log(`This server is running using port ${port}`);
});
