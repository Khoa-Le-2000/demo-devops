const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const db = require('../lib/db');
const userMiddleware = require('../middleware/user');

router.post('/sign-up', (req, res, next) => {
    return res.status(200).send('Sign up');
});

router.post('/login', userMiddleware.verifyToken, (req, res, next) => {
    return res.status(200).json({
        message: 'Login successful',
        token: jwt.sign({ userId: req.userId }, 'secretKey', { expiresIn: '1h' }),
        userInfo: {
            userId: req.userId,
            username: req.username
        }
    });
});

router.get('/secret', (req, res, next) => {
    res.send('Secret');
});

function route(app) {
    app.use('/api', (req, res, next) => {
        return res.status(200).send('API');
    });
    app.use('/login', (req, res, next) => {
        return res.status(200).json({
            message: 'Login successful',
            token: jwt.sign({ userId: req.userId }, 'secretKey', { expiresIn: '1h' })
        });
    });
    app.use('/main', userMiddleware.verifyToken, (req, res, next) => {
        return res.status(200).json({
            message: 'welcome',
            userInfo: {
                userId: req.userId,
                username: req.username
            }
        });
    });
}

module.exports = { route };