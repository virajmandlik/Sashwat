const jwt  = require('jsonwebtoken')
const User = require('../model/user');
const { sendError } = require('../utils/helper');


exports.createUser = async (req,res)=>{
    const { name, email, password } = req.body; 
    const user = await User.find({email})
    if(user) return sendError(res,'this email already exist')
  const newUser = new User({
    name,
    email,
    password,
  });
  await newUser.save()
  res.send(newUser);
}

exports.signin = async(req,res)=>{
    const {email,password} = req.body
    if(!email.trim()||!password.trim()) return sendError(res,'email or password missing')

     const isMatched =await user.comparePassword(password)
     if(!isMatched) return sendError(res,'email or password missing')

     const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
     res.json({
        success:true,
        user:{name:user.name,email:user.email,id:user._id,token},
     })   
}