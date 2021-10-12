const router = require('express').Router();
const noticias = require("../controllers/noticiasController");
const noticiasController = new noticias;
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

router.get('/', (req,res)=>{
    let noticiasPromise;
    if(!req.query.term){
        noticiasPromise = noticiasController.getAll();
    }else{
        noticiasPromise = noticiasController.getByTerm(req.params.term);
    }
    noticiasPromise
        .then((response)=>{
            let noticias = response.data.articles;
            const src = fs.readFileSync(path.join(__dirname, '..', 'views', 'noticias.handlebars'), 'utf-8');
            const template = handlebars.compile(src);
            const html =  template({ news: noticias });
            res.send(html);
        })
        .catch(err=>console.log(err));
});
module.exports = router;