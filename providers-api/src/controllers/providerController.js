import mongoose from 'mongoose';
import { ProviderSchema } from '../models/providerModel';

//Create model to use consulting methods 
const Provider = mongoose.model('Provider', ProviderSchema);

//This method create a provider and save it in the database
//and return it in response json
export const addNewProvider = (req, res) => {
    let newProvider = new Provider(req.body);
    newProvider.save((err, provider) =>{
        if(err){
            res.send(err);
        }
        res.json(provider);
    });
};

//This method get all providers and return it in response json 
export const getProviders = (req, res) => {
    Provider.find({}, (err, providers) =>{
        if(err){
            res.send(err);
        }
        res.json(providers);
    });
};

//This method get a single provider and return it in response json 
export const getProviderById = (req, res) =>{
    Provider.findById(req.params.providerId, (err, provider) =>{
        if(err){
            res.send(err);
        }
        res.json(provider);
    });
};

//This method find and update a provider, returning it updated
export const updateProvider = (req, res) => {
    Provider.findOneAndUpdate({_id: req.params.providerId}, req.body, {new: true},
    (err, provider) => {
        if(err){
            res.send(err);
        }
        res.json(provider);
    })
}

//This method delete a provider and return a confirmation message 
export const deleteProvider = (req, res) => {
    Provider.remove({_id: req.params.providerId}, (err) =>{
        if(err){
            res.send(err);
        }
        res.json({message: "Successfull deleted provider", status: 200})
    })
}