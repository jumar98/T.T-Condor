//Import modules from providerController
import { 
    updateProvider, 
    addNewProvider, 
    getProviders, 
    getProviderById,
    deleteProvider 
    } from '../controllers/providerController';
const routes = (app) => {

    //Get all providers 
    app.route('/providers')
    .get(getProviders);
    
    //Add one provider 
    app.route('/provider/add')
    .post(addNewProvider);

    //This route is common to all endpoints
    app.route('/provider/:providerId')
    //Get one provider
    .get(getProviderById)

    //Updete fields from a provider 
    .put(updateProvider)
    
    //Delete a provider
    .delete(deleteProvider);
};

//Export module
export default routes;