import axios from "axios";

export default {
    getBreweryData: function() {
        return axios.get("/api/brewery");
    }
};
