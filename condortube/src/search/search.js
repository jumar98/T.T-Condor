//Import axios 
let axios = require('axios');
//Define url of the Api YouTube
let url = "https://www.googleapis.com/youtube/v3/search";

//Define module with option and callback as params
module.exports = (option, callback) => {
    if(!option.key){
        throw new Error("CondorTube search need a key");
    }

    //Define params to do the search
    let params = {
        part: 'snippet',
        key: option.key,
        q: option.term,
        maxResults: 10,
        type: 'video'
    };

    /*
        Define get request, we pass url and params. 
        Use promises for pass response to callback
        and catch whatever error
    */
    axios.get(url, { params })
        .then(response => {
        if(callback){ callback(response.data.items)};
        })
        .catch(error => console.log(error));
}