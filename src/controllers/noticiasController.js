require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.API_KEY;

class NoticiasController{
    getAll(){
        let url = `https://newsapi.org/v2/everything?q=bts&apiKey=${apiKey}`;
        return axios.get(url);
    }

    async getByTerm(term){
        let url = `https://newsapi.org/v2/everything?q=${term}&apiKey=${apiKey}`;
        return axios.get(url);
    }
}

module.exports = NoticiasController;