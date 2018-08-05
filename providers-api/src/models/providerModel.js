import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Create schema from collection provider of database
export const ProviderSchema = new Schema({
    name:{
        type: String
    },
    lastname:{
        type: String
    },
    status:{
        type: String
    },
    fullName:{
        type: String
    },
    city:{
        type: String
    },
    address:{
        type: String
    },
    __v:{
        type: Number
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    specialty:{
        type: String
    },
    email:{
        type: String
    },
    middleName:{
        type: String
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    createdBy:{
        type: String
    },
    updatedBy:{
        type: String
    },
    projectedStartDate:{
        type: Date,
        default: Date.now
    },
    document:{
        type: String
    },
    employerId:{
        type: Number
    },
    providerType:{
        type: String
    },
    staffStatus:{
        type: String
    },
    assignedTo:{
        type: Number
    },
});
