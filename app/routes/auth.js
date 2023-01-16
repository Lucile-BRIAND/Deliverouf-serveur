const express = require('express');
const { createJWT, checkJWT } = require('../token/jwt');
const router = express.Router();

// create JWT token
router.get('/create', function(req, res, next){
    let token = createJWT({name: "test", role: "test"});
    res.json({token:token});
    res.send('JWT token created');
});

// verify JWT token
router.get('/verify/:token', function(req, res, next){
    let check = checkJWT(req.params.token);
    res.json({check:check});
    res.send('JWT token verified');
});

function createRefreshToken () {
    const refreshToken = crypto.randomBytes(128).toString('base64');
    // save token in DB

    return refreshToken;
};


module.exports = router;