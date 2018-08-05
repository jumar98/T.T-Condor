import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

//User Schema to collection
export const UserSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        select: false
    },
    userRegistre:{
        type: Date,
        default: Date.now
    },
    lastLogin: Date
})

/*
    Here, before saving the user encrypt the password
*/
UserSchema.pre('save', function (next){
    let user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err,salt) =>{
        if(err){
            return next();
        }
        bcrypt.hash(user.password, salt, null, (err, hash) =>{
            if(err){
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
