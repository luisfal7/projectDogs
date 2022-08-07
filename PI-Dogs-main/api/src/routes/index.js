const express = require('express');
const controllers = require('../controllers/controllers');
const {conn, Temperament, Dog} = require('../db.js')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', async function(req,res,next){

    const name = req.query.name
    
    try{
        const selectDog = await Dog.findAll({
            attributes: {
                exclude: ['id', 'heightMin', 'heightMax', 'lifeSpan']
            },
            include: {
            model: Temperament,
            attributes:{
                exclude:['id']
            }
        }})
        const arrayAllBreedsApi = await controllers.getAllBreeds()
        const allBreeds = arrayAllBreedsApi.concat(selectDog)

        if(name === undefined || name === null){
            res.status(200).json(allBreeds)
        }else{
            let upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
            let filterBreeds = allBreeds.filter(e => 
                    e.name?.includes(upperCaseName) ||
                    e.temperament?.includes(upperCaseName) ||
                    e.weight?.imperial.includes(upperCaseName) ||
                    e.weight?.metric.includes(upperCaseName) ||
                    e.weightMin?.toString().includes(upperCaseName) ||
                    e.weightMax?.toString().includes(upperCaseName) ||
                    e.temperaments?.some(e => e.name.includes(upperCaseName)) === true
                )
            if(filterBreeds.length !== 0){
                res.status(200).json(filterBreeds)
            }else{
                res.status(404).send(`No se encontro raza con la palabra clave ingresada ${name}`)
            }
            
        }

    }catch(err){
        next(err)
    }
    
})

router.get('/dogs/:idRaza', async (req,res,next)=>{

    try{
        const {idRaza} = req.params
        const breedsApi = await controllers.detailBreed()
        const breedsDogDB = await Dog.findAll({
            attributes: {
                exclude: []
            },
            include: {
            model: Temperament,
            attributes:{
                exclude:['id']
            }
        }})
        const allBreeds = breedsApi.concat(breedsDogDB)
        let findBreed = allBreeds.find(e => e.id === parseInt(idRaza))
        delete findBreed.id
        delete findBreed.bred_for
        delete findBreed.breed_group
        delete findBreed.reference_image_id
        delete findBreed.country_code
        delete findBreed.origin

        res.status(200).json(findBreed)
    }catch(err){
        next(err.message = 'No hay raza con ese ID')
    }
        
})

router.get('/temperaments', async (req,res,next)=>{
    
    //await Temperament.destroy()

    try{
        let allTempAPI = await controllers.filterTemperaments()
        let tempSelect = await Temperament.findAll({})
        if(tempSelect.length >= 124){
            const findAllTemperament = await Temperament.findAll({attributes:['id','name']})
            res.status(200).json(findAllTemperament)
        }else{
            const bulkCreate = await Temperament.bulkCreate(allTempAPI)
            const findAllTemperament = await Temperament.findAll({attributes:['id','name']})
            res.status(200).json(findAllTemperament)
        }
        console.log(tempSelect.length)
    }catch(err){
        next(err)
    }
    
})

router.post('/dogs', async (req,res, next)=>{

    // await Dog.destroy();

    const { name, heightMin, heightMax, weightMin, weightMax, nameTempOne, nameTempTwo, nameTempThree, lifeSpan } = req.body
    try{
        const createDog = await Dog.create({
            name,
            heightMin,
            heightMax,
            weightMin,
            weightMax,
            lifeSpan,
            temperaments: [
                {name: nameTempOne},
                {name: nameTempTwo},
                {name: nameTempThree},
            ]
        },{
            include: Temperament
        })
        res.status(200).json(createDog)
    }catch(err){
        next(err)
    }
})

module.exports = router;
