const express  =  require('express')
const app = express()
const port =process.env.PORT || 8000
require('./db')
app.get('/',(req,res)=>{
    res.send('<h1>Hell00</h1>')
})
app.post('/api/user/create',(req,res)=>{
    res.send('ok')
})
app.listen(port,()=>{
    console.log("lsitening")
})