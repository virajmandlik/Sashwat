const nodemailer = require('nodemailer')

exports.generateOTP=()=>{
    let otp = ""
    for(let i=0;i<=3;i++){
        const rand = Math.round(Math.random()*9);
        otp+=rand
    }
    return otp
}

exports.nodemailer = ()=>{
    nodemailer.createTransport({
        host:"virajmandli3@gmail.com",
        port:2525,
        auth:{
            // user:process.env.USERNAME,
            // pass:process.env.PASSWORD,

        }
    })
}

exports.generateEmailTemplate = code=>{
    return `
    
    `
}