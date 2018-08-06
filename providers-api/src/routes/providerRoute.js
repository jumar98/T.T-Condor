//Import modules from providerController
import { 
    updateProvider, 
    addNewProvider, 
    getProviders, 
    getProviderById,
    deleteProvider 
    } from '../controllers/providerController';
import auth from '../middlewares/auth';
import {userLogin, userRegister} from '../controllers/userController';

const routes = (app) => {

    //Endpoint users
    app.post('/user/register', userRegister);
    app.post('/user/login', userLogin);

    /*
        The routes below is protected with 
        auth middleware
    */

    //Get all providers 
    app.get('/providers', auth, getProviders);
    
    //Add one provider 
    app.post('/provider/add', auth, addNewProvider);

    //This route is common to all endpoints
    app.get('/provider/:providerId', auth, getProviderById);

    //Updete fields from a provider 
    app.put('/provider/:providerId', auth, updateProvider)
    
    //Delete a provider
    app.delete('/provider/:providerId', auth, deleteProvider);
};

//Export module
export default routes;
