//Import axios 
const axios = require('axios');
//Define url of the Api YouTube
let urlSearch = "https://www.googleapis.com/youtube/v3/search";

const key = "AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc";

//Define module with option and callback as params
module.exports.search  = (option, callback) => {
    //Define params to do the search
    let params = {
        part: 'snippet',
        key: key,
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

//Define module for get statistics about single video
module.exports.statistics = (option, callback) => {
    let params = {
        part: 'statistics',
        key: key,
        id: option.id,
    };

    axios.get(urlVideos, { params })
    .then(response =>{
    if(callback){ callback(response.data.items[0].statistics)};
    })
    .catch(error => console.log(error));
}

//Define module to get recommended videos about the video chosen
module.exports.recommended = (option, callback) => {
    let params = {
        part: 'snippet',
        key: key,
        relatedToVideoId: option.id,
        maxResults: 10,
        type: 'video'
    };

    axios.get(urlSearch, { params })
    .then(response =>{
    if(callback){ callback(response.data.items)};
    })
    .catch(error => console.log(error));
} 