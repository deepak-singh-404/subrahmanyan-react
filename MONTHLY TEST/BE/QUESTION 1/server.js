const express = require('express');
const mongoose = require('mongoose')
const passport = require('passport')

//MIDDILWARES
const app = express();
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());


// Passport Config.
require('./config/passport')(passport)

// Routes
const routes = require('./routes')

//ROUTES
app.use('/dev', routes)



//Catching 404 Error
app.use((req, res, next) => {
    const error = new Error('INVALID ROUTE')
    error.status = 404
    next(error);
})

//Error handler function
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server started on PORT", PORT)
})

mongoose.connect("mongodb://127.0.0.1:27017/sub_be_question_one",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
        console.log("Database connected")
    }).catch((err) => {
        console.log("Error in connecting to DataBase", err.message)
    })