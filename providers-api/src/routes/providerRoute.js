import { 
    updateProvider, 
    addNewProvider, 
    getProviders, 
    getProviderById,
    deleteProvider 
    } from '../controllers/providerController';
const routes = (app) => {
    app.route('/providers')
    .get(getProviders);
    
    //Post endpoint
    app.route('/provider/add')
    .post(addNewProvider);

    app.route('/provider/:providerId')
    .get(getProviderById)

    .put(updateProvider)
    
    .delete(deleteProvider);
};

export default routes;