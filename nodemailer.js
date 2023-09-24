require('dotenv').config()
const nodemailer = require("nodemailer");
const mailer = (email, userid, token)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const details = {
        from: "G-Drive <online.share.999@gmail.com>",
        to: email,
        subject: "hello Sir/Mam",
        text: "hi",
        html:`<a href="http://127.0.0.1:3000/reset/${userid}/${token}">reset link</a>`
    
    }
  
      
  
  
      transporter.mailer(details, (err, info) => {
        if (err) {
          console.log( ">>>>>>>>>>>>>Error" ,err);
        }
    });

} 

module.exports =  mailer;
