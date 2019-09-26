import axios from "axios";

export default {
    artistInfo: function(query){
        return axios.get(`https://rest.bandsintown.com/artists/${query}?app_id=**********`);
    },
  
    events: function(query) {
    return axios.get(`https://rest.bandsintown.com/artists/${query}/events?app_id=**********`);
  }
};
