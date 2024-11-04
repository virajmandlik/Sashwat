const express = require('express');
const app = express();
const userRuter = require("./routes/user");
// require("dotenv").config()
// require('./db/index')
const port = process.env.PORT || 8000;

require('./db'); // This will connect to MongoDB Atlas

// Add this line to parse JSON bodies
app.use(express.json());
app.use('/api/user',userRuter)
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});


app.listen(port, () => {
    console.log("Listening on port", port);
});
