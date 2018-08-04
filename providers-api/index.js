import express from 'express';
import routes from './src/routes/providerRoute'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//Invoke express object to create app
const app = express();
//Define port
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1',{
    useNewUrlParser: true
});

//Bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Pass app to routes module 
routes(app);

//Listen port where running api 
app.listen(PORT, () =>{
    console.log(`Your server running on port ${PORT}`)
});