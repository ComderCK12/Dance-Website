const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8000;

//EXPRESS RELATED STUFF
app.use('/static', express.static('static'));            //For serving static files
app.use(express.urlencoded());


//PUG RELATED STUFF
app.set('view engine', 'pug');          //Set the template engine as pug
app.set('views',path.join(__dirname, 'views'));             //Set the views directory


//ENDPOINTS
app.get('/',(req, res)=>{
    const params = {}
    res.status(200).render('home.pug',params);    
})

app.get('/contact',(req, res)=>{
    const params = {}
    res.status(200).render('contact.pug',params);    
})









//START THE SERVER
app.listen(port,()=>{
    console.log(`The application has been started successfully on port ${port}`);
})

