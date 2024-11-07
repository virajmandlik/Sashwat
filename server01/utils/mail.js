const nodemailer = require('nodemailer')

exports.generateOTP=()=>{
    let otp = ""
    for(let i=0;i<=3;i++){
        const rand = Math.round(Math.random()*9);
        otp+=rand
    }
    return otp
}

exports.mailTransport = ()=> nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "96a30354a11b80",
          pass: "6e661bf97d64b8"
        }
      });



exports.generateEmailTemplate = code=>{
    return `
    
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Internal CSS styling for better control */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .header {
      background-color: #4CAF50;
      padding: 20px;
      text-align: center;
      color: #ffffff;
    }
    .content {
      margin-top: 20px;
      font-size: 16px;
      color: #333333;
    }
    .otp {
      font-size: 24px;
      font-weight: bold;
      color: #333333;
      text-align: center;
      margin: 20px 0;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      color: #777777;
      font-size: 12px;
    }
    a.button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>Your OTP Code</h1>
    </div>
    
    <!-- Email Content -->
    <div class="content">
      <p>Dear User,</p>
      <p>Your One-Time Password (OTP) for verification is:</p>
      
      <div class="otp">${code}</div> <!-- Replace with dynamic OTP -->

      <p>Please use this code within the next 10 minutes.</p>
      
      <p>If you did not request this code, please ignore this email or contact support.</p>

      <!-- Button (optional) -->
      <p style="text-align: center;">
        <a href="https://example.com/support" class="button">Contact Support</a>
      </p>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <p>This email was sent to you because you requested an OTP code.</p>
    </div>
  </div>
</body>
</html>


    `
}

exports.plainEmailTemplate = (heading, message) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        /* Internal CSS styling for better control */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .header {
          background-color: #4CAF50;
          padding: 20px;
          text-align: center;
          color: #ffffff;
        }
        .content {
          margin-top: 20px;
          font-size: 16px;
          color: #333333;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          color: #777777;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>${heading}</h1>
        </div>

        <!-- Email Content -->
        <div class="content">
          <p>Dear User,</p>
          <p>${message}</p>

          <p>If you have any questions, please feel free to reach out to our support team.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p>This email was sent to you as part of our service.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

exports.generatePasswordResetTemplate =(url)=>{
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Internal CSS styling for better control */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .header {
      background-color: #4CAF50;
      padding: 20px;
      text-align: center;
      color: #ffffff;
    }
    .content {
      margin-top: 20px;
      font-size: 16px;
      color: #333333;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      color: #777777;
      font-size: 12px;
    }
    .button {
      background-color: #4CAF50;
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
      font-weight: bold;
    }
    .button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>

    <!-- Email Content -->
    <div class="content">
      <p>Dear User,</p>
      <p>We received a request to reset your password. Please click the link below to reset your password:</p>
      <p><a href="${url}" class="button">Reset Your Password</a></p>

      <p>If you did not request a password reset, please ignore this email.</p>

      <p>If you have any questions, feel free to contact our support team.</p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <p>This email was sent to you as part of our service.</p>
    </div>
  </div>
</body>
</html>

  `
}




