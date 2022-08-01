//import fetch from 'node-fetch';
const axios = require('axios')

async function getAllBreeds(){

    const urlAllBreeds = 'https://api.thedogapi.com/v1/breeds'
    let breeds = (await axios(urlAllBreeds)).data
    breeds.forEach(e => delete e.height && delete e.id && delete e.bred_for && delete e.breed_group && delete e.life_span && delete e.origin && delete e.reference_image_id)
    return breeds

}

async function detailBreed(idRaza){

    const urlAllBreeds = 'https://api.thedogapi.com/v1/breeds'
    let breeds = (await axios(url)).data
    if(breeds.some(e => e.id === parseInt(idRaza))){
        let detailBreed = breeds.find(e => e.id === parseInt(idRaza))
        delete detailBreed.id
        delete detailBreed.bred_for
        delete detailBreed.breed_group
        delete detailBreed.reference_image_id
        return detailBreed
    }else{
        return false
    }

}

async function filterQuery(breedName){
    const urlAllBreeds = 'https://api.thedogapi.com/v1/breeds'
    let breeds = (await axios(urlAllBreeds)).data

    console.log(detailBreed.filter(e => e.breed_group === breedName))
    if(detailBreed.some(e => e.name === breedName)){
        return detailBreed
    }else{
        return false
    }
}

async function filterTemperaments(){
    const urlAllBreeds = 'https://api.thedogapi.com/v1/breeds'
    let breeds = (await axios(urlAllBreeds)).data

    breeds.forEach(e => delete e.history && delete e.description && delete e.country_code && delete e.image && delete e.name && delete e.weight && delete e.height && delete e.id && delete e.bred_for && delete e.breed_group && delete e.life_span && delete e.origin && delete e.reference_image_id)

    let arrayTemperaments = breeds.map(e => Object.values(e)).flat().toString().split(', ')
    let arrayTemperamentsSeparete = arrayTemperaments.toString().split(',')

    const arrayTemperamentData = new Set(arrayTemperamentsSeparete)
    let allTemperamentsOrder = [...arrayTemperamentData].sort()

    return allTemperamentsOrder
    
}



module.exports={
    getAllBreeds, detailBreed, filterQuery, filterTemperaments
}

