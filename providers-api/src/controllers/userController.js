
import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import {createToken} from '../services/index';

//Pass UserSchema to create a model and can
//manipulate the user collection 
const User = mongoose.model('User', UserSchema);

/*
    User register, params from reques and create an
    new user and pass user to createToken to 
    create a new token to have access at providers 
    routes
*/
export const userRegister = (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, user) =>{
        if(err){
            res.send(err);
        }
        res.send({
            message: "Register succesful",
            token: createToken(user), 
            user: user
        });
    });
};

/*
    User login, find a user by email and if exist
    create new token to have access at providers
    route
*/
export const userLogin = (req, res) =>{
    User.find({"email": req.body.email}, (err, user) =>{
        if(err){
            res.send(err);
        }
        if(!user){
            res.send({message: "This user don't exist"});
        }
        req.user = user;
        res.send({
            message: "Login successful",
            user: user,
            token: createToken(user)
        })

    })
}
