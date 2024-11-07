const jwt = require("jsonwebtoken");
const User = require("../model/user");
const crypto=require('crypto')
const {
  generateOTP,
  generateEmailTemplate,
  mailTransport,
  plainEmailTemplate,
  generatePasswordResetTemplate,
} = require("../utils/mail");
const VerificationToken = require("../model/verificationToken");
const { sendError, createrandomBytes } = require("../utils/helper");
const { isValidObjectId } = require("mongoose");
const verificationToken = require("../model/verificationToken");
const ResetToken = require("../model/resetToken");
// importtan secret
const JWT_SECRET = "qsed4rf567hgv8uo956ftrepplki";

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) return sendError(res, "this email already exist");
  // user create done
  const newUser = new User({
    name,
    email,
    password,
  });
  // user otp create
  const OTP = generateOTP();
  const verificationToken = new VerificationToken({
    owner: newUser._id,
    token: OTP,
  });
  await verificationToken.save();

  await newUser.save();

  mailTransport().sendMail({
    from: "emailverification@gmail.com",
    to: newUser.email,
    subject: "Verify your email address",
    html: generateEmailTemplate(OTP),
  });
  res.send(newUser);
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email.trim() || !password.trim())
    return sendError(res, "email or password missing");
  const user = await User.findOne({ email });

  if (!user) return sendError(res, "User not found");

  const isMatched = await user.comparePassword(password);
  if (!isMatched) return sendError(res, "email or password missing");

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1d" });
  //  const token = jwt.sign({userId:user._id},'qsed4rf567hgv8uo956ftrepplki',{expiresIn:'1d'})
  res.json({
    success: true,
    user: { name: user.name, email: user.email, id: user._id, token },
  });
};

exports.verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;
  if (!userId || !otp.trim())
    return sendError(res, "Invalid request..!, missing parameters");

  if (!isValidObjectId(userId)) return sendError(res, "Invalid userId...!");

  const user = await User.findById(userId);
  if (!user) return sendError(res, "Sorry User Not found");

  if (user.verified) return sendError(res, "This user is already verified...!");

  const token = await VerificationToken.findOne({ owner: user._id });
  if (!token) return sendError(res, "Sorry , your user not found...!");

  const isMatched = await token.compareToken(otp);
  if (!isMatched) return sendError(res, "Invalid Token given...!");

  user.verified = true;
  // deleting the token from the DB
  await VerificationToken.findByIdAndDelete(token._id);

  await user.save();

  mailTransport().sendMail({
    from: "emailverification@gmail.com",
    to: user.email,
    subject: "Welcome Mail",
    html: plainEmailTemplate(
      "Email Verified Succesfully",
      "Thanks for connecting us"
    ),
  });
  res.json({
    success: true,
    message: "Email verified Succesfully",
    user: {
      name: user.name,
      email: user.email,
      id: user._id,
    },
  });
};

exports.forgetPassword = async (req, res) => {
  const {email} = req.body;
  if (!email)
    return sendError(res, "Invalid request...!, missing parameters");
  const user = await User.findOne({ email });
  if (!user) return sendError(res, "Sorry User Not found");

  const token = await ResetToken.findOne({ owner: user._id });

  if (token) return sendError(res, "Expired token");

  const RandomBytes = await createrandomBytes();
  const resetToken = new ResetToken({ owner: user._id, token: RandomBytes });
  await resetToken.save();

  mailTransport().sendMail({
    from: "security@gmail.com",
    to: user.email,
    subject: "Password Reset",
    // make sure you have same react port for it
    html: generatePasswordResetTemplate(
      `http://localhost:3000/reset-password?token=${RandomBytes}&id=${user._id}`
    ),
  });
  res.json({
    success: true,
    message: "Password reset link sent to your email",
  });
};

exports.resetPassword =async (req,res)=>{
  const {password} = req.body
  const user = await User.findById(req.user._id)
  if (!user) return sendError(res, "Sorry User Not found")
  const isSamePassword = await user.comparePassword(password)
 if (isSamePassword) return sendError(res, "Password is same as previous one")
if(password.trim().length<8 || password.trim().length>20)
  return sendError(res, "Password should be between 8 and 20 characters")
user.password = password.trim()
await user.save()
await ResetToken.findOneAndDelete({owner:user._id})

mailTransport().sendMail({
  from: "security@gmail.com",
  to: user.email,
  subject: "Password Reset Successfully...!",
  // make sure you have same react port for it
  html: plainEmailTemplate('Password Reset Succesfully',"Now you can login with new password"
  ),
});
res.json({success:true,
  subject: true,
  message:"Password Reset Successfully...!"
})
}
