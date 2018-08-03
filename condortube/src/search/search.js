//Import axios 
let axios = require('axios');
//Define url of the Api YouTube
let urlSearch = "https://www.googleapis.com/youtube/v3/search";

//Define module with option and callback as params
module.exports.search  = (option, callback) => {
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
    axios.get(urlSearch, { params })
        .then(response => {
        if(callback){ callback(response.data.items)};
        })
        .catch(error => console.log(error));
}

let urlVideos = "https://www.googleapis.com/youtube/v3/videos";

module.exports.statistics = (option, callback) => {
    let params = {
        part: 'statistics',
        key: option.key,
        id: option.id,
    };

    axios.get(urlVideos, { params })
    .then(response =>{
    if(callback){ callback(response.data.items[0].statistics)};
    })
    .catch(error => console.log(error));
}