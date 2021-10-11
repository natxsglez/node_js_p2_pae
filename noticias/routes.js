const router = require('express').Router();
const noticias = require("./noticiasController");
const noticiasController = new noticias;
const axios = require('axios');

router.get('', (req,res)=>{
    let noticiasPromise = noticiasController.getAll();
    noticiasPromise
        .then((data)=>{
            let noticias = data.data.articles;
            res.send(noticias);
        })
        .catch(err=>console.log(err));
});

router.get('/:term', (req, res)=>{
    let noticiasPromise = noticiasController.getByTerm(req.params.term);
    noticiasPromise
        .then((data)=>{
            let noticias = data.data.articles;
            res.send(noticias);
        })
        .catch(err=>console.log(err));
})
module.exports = router;