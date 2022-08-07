
//import fetch from 'node-fetch';
const axios = require('axios')
const {Temperament, Dog} = require('../db.js')
const { API_KEY } = process.env;

const urlAllBreeds = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
// const urlOneBreeds = `https://api.thedogapi.com/v1/breeds/search?q=${raza_perro}?api_key=${API_KEY}`

async function getAllBreeds(){

    let breeds = (await axios(urlAllBreeds)).data
    breeds.forEach(e => 
            delete e.height && 
            delete e.id && 
            delete e.bred_for && 
            delete e.breed_group && 
            delete e.life_span && 
            delete e.origin && 
            delete e.reference_image_id && 
            delete e.description && 
            delete e.history && 
            delete e.country_code
        )
    return breeds

}

async function detailBreed(idRaza){

    let breeds = (await axios(urlAllBreeds)).data
    /* if(breeds.some(e => e.id === parseInt(idRaza))){
        let detailBreed = breeds.find(e => e.id === parseInt(idRaza))
        delete detailBreed.id
        delete detailBreed.bred_for
        delete detailBreed.breed_group
        delete detailBreed.reference_image_id
        return detailBreed
    }else{
        return false
    } */
    /* let detailBreed = breeds.find(e => e.id === parseInt(idRaza))
        delete detailBreed.id
        delete detailBreed.bred_for
        delete detailBreed.breed_group
        delete detailBreed.reference_image_id */
        return breeds

}

async function filterQuery(breedName){
    
    let breeds = (await axios(urlAllBreeds)).data

    console.log(detailBreed.filter(e => e.breed_group === breedName))
    if(detailBreed.some(e => e.name === breedName)){
        return detailBreed
    }else{
        return false
    }
}

async function filterTemperaments(){
    
    let breeds = (await axios(urlAllBreeds)).data

    breeds.forEach(e => delete e.history && delete e.description && delete e.country_code && delete e.image && delete e.name && delete e.weight && delete e.height && delete e.id && delete e.bred_for && delete e.breed_group && delete e.life_span && delete e.origin && delete e.reference_image_id)

    let arrayTemperaments = breeds.map(e => Object.values(e)).flat().toString().split(', ')
    let arrayTemperamentsSeparete = arrayTemperaments.toString().split(',')

    const arrayTemperamentData = new Set(arrayTemperamentsSeparete)
    let allTemperamentsOrder = [...arrayTemperamentData].sort()
    let arrayObj = allTemperamentsOrder.map(e => new Object({name : e}))

    return arrayObj    
}

module.exports={
    getAllBreeds, detailBreed, filterQuery, filterTemperaments
}

