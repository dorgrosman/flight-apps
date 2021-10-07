const express = require('express');
const app  = express();

const productRoutes = require('./api/routes/flight')
const bodyParser = require('body-parser')
const cors = require('cors');

//bodyParser for cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cors
app.use(cors({origin: '*'}));
app.use("/api", productRoutes);

app.use((req, res, next)=>{
    const error = new Error("not found");
    error = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;