const res = require('express/lib/response');
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    // console.log(bearerHeader);
    if (!bearerHeader) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    const token = bearerHeader.split(' ')[1];

    if (!token) return res.status(401).send('Unauthorized');

    jwt.verify(token, 'secretKey', (err, authData) => {
        if (err) return res.status(403).send('Forbidden');

        var dateNow = new Date();

        console.log(authData.exp < dateNow.getTime()/1000);

        req.userId = authData.userId;
        next();
    });
}

module.exports = {verifyToken};