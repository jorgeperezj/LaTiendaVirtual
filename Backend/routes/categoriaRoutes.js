const express = require('express');
const axios = require('axios').default;
const dbE = require('../src/db/crudCategorias.js');
const router = express.Router();


router.get('/', function (req, res) {
    dbE.getCategorias(function (arrayCategorias) {
        res.send(arrayCategorias);
    })
});

router.post('/', (req, res) => {
    const expert = req.body;
    dbE.addExpert(expert, function (response) {
            if(response == 'Expert created'){
                res.status(201).send(response);
            }else{
                res.status(400).send(response);
            }                
        })
})