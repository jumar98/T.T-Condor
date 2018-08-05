/*
    This middelware is to check if user is
    authenticated
*/
import {decodeToken} from '../services/index';

 function isAuth(req, res, next){
    //Check the authorization header in the request 
    if(!req.headers.authorization){
        return res.send({message: "You don't have authorization"});
    }

    //Split the authorizarion header and pass token to token constant 
    const token = req.headers.authorization.split(' ')[1];

    /*
        decodeToken return a promise, if everything goes fine,
        response bring the user and pass to req.user
    */
    decodeToken(token)
    .then(response =>{
        req.user = response;
        next();
    })
    //If there a problem, response bring a error message 
    .catch(response =>{
        res.send(response.message);
    })
}

module.exports = isAuth;