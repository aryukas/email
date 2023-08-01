const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer')

const app = express();
app.use(express.static("style"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/contact.html");
    console.log(__dirname); 
});

app.post("/", function(req, res){
    const comm = req.body.message;
    console.log(comm)
    const na = req.body.nameofperson;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user : 'aryukashyap55@gmail.com',
        pass : 'kinblazerxx'

    }
})
var mailOptions = {
    from: 'aryukashyap55@gmail.com',
    to: req.body.username,
    cc: 'aryukashyap55@gmail.com',
    subject: 'Thanks for your opinion' + na,
    Text: 'Thank You!!' + comm

};

transporter.sendMail(mailOptions,function(error,info){
    if(err){
        console.log(error);       
    }
    else{
         res.redirect('/');
         console.log("email sent"+info.response);
    }
})

});

app.listen(8000,function(){
    console.log("Server start");
});