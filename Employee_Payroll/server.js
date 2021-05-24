const express = require('express');

//creating express app
const app = express();

//parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
}))

//parse request of content-type - application/json
app.use(express.json())

//configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to the database
mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to database!');
}).catch(err => {
    console.log("Couldn't connect to the datyabase",err);
    process.exit();
})

//define a simple route
app.get('/',(req,res) => {
    res.json({"message":"Welcome to employee payroll app!"})
});

//require employee routes
require('./app/routes/node.routes.js')(app);

//listen for requests
app.listen(3000, () => {
    console.log("Server is listening at port 3000")
})

