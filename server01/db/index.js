const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/auth-app',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("our db is connected"))
.catch((err)=>console.log(err))

//npm i validator...