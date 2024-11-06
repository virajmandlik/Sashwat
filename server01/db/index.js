// db/index.js
const mongoose = require('mongoose');

// const uri = "mongodb+srv://virajmandlik:12345@cluster0.jxhwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/auth-app";
const uri = "mongodb+srv://virajmandlik:12345@cluster0.jxhwp.mongodb.net/auth-app";

// **********Can work with this 
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

// *****************or this too..!
mongoose.connect(uri)
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Database connection error:", err));

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/auth-app').then(()=>console.log("db is connected")).catch((err)=>console.log("the error is ",err));