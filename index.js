// const express = require('express');
// const create=require('./routes/create')
// var app=express();
// app.listen(3000,()=>{console.log("its running")})
// app.use('/emp',create)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routers = require('./routes');
app.use(bodyParser.json()); 
const port = 3000;
app.use('/', routers);
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server started on port " + port);
    }
})
