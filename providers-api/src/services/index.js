import jwt from 'jwt-simple';
import moment from 'moment';
import config from '../../config';

//This module create a new token to user 
export const createToken = (user) =>{
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }
    return jwt.encode(payload, config.SECRET_KEY);
}

//This module decode token to check if is right
export const decodeToken = (token) => {
    const decode = new Promise((resolve, reject) =>{
        try {
            const payload = jwt.decode(token, config.SECRET_KEY);
            if(payload.exp <= moment().unix()){
                reject({
                    message: "The token has expired"
                });   
            }

            resolve(payload.sub);

        } catch (error) {
            reject({
                message: "Invalid token"
            });
        }
    });
    return decode;
}