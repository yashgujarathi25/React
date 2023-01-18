import axios from 'axios';

class PlayerService{
    constructor(){
        this.baseUrl ="http://localhost:4000/";
    }

    display(){
        return axios.get(this.baseUrl+"display");
    }
    search(obj){
        console.log(obj)
        return axios.post(this.baseUrl+"search",obj);
    }
}

export default new PlayerService;