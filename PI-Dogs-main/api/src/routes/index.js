const express = require('express');
const controllers = require('../controllers/controllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', async function(req,res,next){
    
    try{
        res.status(200).json(await controllers.getAllBreeds())

    }catch(err){
        next(err)
    }
    
})

router.get('/dogs/:idRaza', async (req,res)=>{

        const {idRaza} = req.params
        if(await controllers.detailBreed(req.params.idRaza) !== false){
            res.status(200).json(await controllers.detailBreed(idRaza))
        }else{
            res.status(404).send('404 not Found: El servidor no pudo encontrar el contenido solicitado.')
        }
})

router.get('/temperaments', async (req,res)=>{
    try{
        res.status(200).json(await controllers.filterTemperaments())
    }catch(err){
        next(err)
    }
})

module.exports = router;
