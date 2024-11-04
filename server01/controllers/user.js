const jwt  = require('jsonwebtoken')
const User = require('../model/user');
const {generateOTP, generateEmailTemplate} = require('../utils/mail')
const VerificationToken = require('../model/verificationToken')
const { sendError } = require('../utils/helper');

// importtan secret 
const JWT_SECRET = 'qsed4rf567hgv8uo956ftrepplki';

exports.createUser = async (req,res)=>{
    const { name, email, password } = req.body; 
    const user = await User.findOne({email})
    if(user) return sendError(res,'this email already exist')
      // user create done
  const newUser = new User({
    name,
    email,
    password,
  });
  // user otp create 
  const OTP = generateOTP()
  const verificationToken = new VerificationToken({
    owner:newUser._id,
    token:OTP
  })
  await verificationToken.save()

  await newUser.save()

  mailTransport().sendMail({
    from:"viraj.mandlik@mitaoe.ac.in",
    to:newUser.email,
    subject:"Verify your email address",
    html: generateEmailTemplate(OTP),
  })
  res.send(newUser);
}

exports.signin = async (req,res)=>{
    const {email,password} = req.body
    if(!email.trim()||!password.trim()) return sendError(res,'email or password missing')
      const user = await User.findOne({email})

      if(!user) return sendError(res,'User not found')

     const isMatched =await user.comparePassword(password)
     if(!isMatched) return sendError(res,'email or password missing')

     const token = jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:'1d'})
    //  const token = jwt.sign({userId:user._id},'qsed4rf567hgv8uo956ftrepplki',{expiresIn:'1d'})
     res.json({
        success:true,
        user:{name:user.name,email:user.email,id:user._id,token},
     })   
}