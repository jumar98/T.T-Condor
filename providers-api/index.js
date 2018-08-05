import express from 'express';
import routes from './src/routes/providerRoute'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';

//Invoke express object to create app
const app = express();

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(config.db,{
    useNewUrlParser: true
});

//Bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Pass app to routes module 
routes(app);

//Listen port where running api 
app.listen(config.port, () =>{
    console.log(`Your server running on port ${config.port}`)
});