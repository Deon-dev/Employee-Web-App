const express = require('express');
const router = express.Router();
const employee = require('../models/employee');

router.get('/', (req, res) => {
    res.send('<h1>Welcome to My World</h1>')
});


