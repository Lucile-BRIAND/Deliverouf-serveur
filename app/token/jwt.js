const jwt = require('jsonwebtoken');
const jwtSecret = 'secret';

const createJWT = (user) => {
    var token = jwt.sign({
        user: user
    }, 
    jwtSecret,  //process.env.JWT_SECRET
    {expiresIn: '1h'});

    return token;
}

const checkJWT = (token) => {
    var check = false;

    try{
        check = jwt.verify(token, jwtSecret);
    }
    catch(error){
        check = false;
    }

    return check;
}

module.exports = {createJWT: createJWT, checkJWT:checkJWT};