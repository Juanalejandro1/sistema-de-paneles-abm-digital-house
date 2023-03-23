const express = require('express')
const path = require('path');
const router = express-router('')
const main = {
    index: (req, res) => {
        res.render('index', {
            pageTitle:'Home',
        })
    },
    login: (req, res) => {
        res.render('login', {
            pageTitle:'Login'
        });
    },
    register: (req, res) => {
        res.render('signup', {
            pageTitle: 'Signup'
        })
    }
}

module.exports= router;