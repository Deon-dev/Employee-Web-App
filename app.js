const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const session = require('express-session');
const override = require('method-override');
const path = require('path');
const employeeRoute = require('../routes/employees');

dotenv.config({path: "./config.env"});

mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
