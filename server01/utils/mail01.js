// ******************Sending email using GAMIL FACILTY********************

const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
    // Configure the email transporter
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,  
        auth: {
            user: "viraj.mandlik@mitaoe.ac.in",
            pass: "umohmwnlazyihaha" // Be cautious with hardcoding sensitive data
        }
    });

    // Email options
    const receiver = {
        from: "viraj.mandlik@mitaoe.ac.in",
        to: "virajmandlik3@gmail.com",
        subject: "Node.js Mail Testing!",
        text: "Hello, this is a text mail."
    };

    // Send the email
    auth.sendMail(receiver, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Failed to send email.");
        } else {
            console.log("Email sent:", info.response);
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end("Email sent successfully!");
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
















// const nodemailer = require('nodemailer')
// const path =require('path')
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host:"smtp.gmail.com",
//     port:587,
//     secure:false,
//     auth: {
//       type: 'OAuth2',
//       user: 'viraj.mandlik@mitaoe.ac.in',
//       pass: 'umohmwnlazyihaha',
//     }
//   });

//   const mailOptions = {
//     from:{
//         name:'Viraj',
//         address:'viraj.mandlik@mitaoe.ac.in'
//     },
//     to:['virajmandlik3@gmail.com'],
//     subject:"sending the mail using the nodemailer",
//     text:"Hello world",
//     html:"<b>Hello World</b>",
//     attachments:[
//         {
//             filename:'Practical-1-Viraj.pdf',
//             path:path.join(__dirname,'Practical-1-Viraj.pdf'),
//             contentType:'application/pdf'
//         }
//     ]
//   }

//   const sendMail = async (transporter,mailOptions)=>{
//     try {
//         await transporter.sendMail(mailOptions)
//         console.log("email has been sent !")
//     } catch (error) {
//         console.log('the error is here 01 ',error)
//     }
//   }

//   sendMail(transporter,mailOptions)