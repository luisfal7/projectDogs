import axios from 'axios'

export const GET_DOGS = 'GET_DOGS'
export const GET_DOG = 'GET_DOG'
export const GET_DES = 'GET_DES'
export const GET_BY_GET_TEMPERAMENTS = 'GET_BY_GET_TEMPERAMENTS'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const GET_MORE_WEIGHTS = 'GET_MORE_WEIGHTS'
export const GET_LESS_WEIGHTS = 'GET_LESS_WEIGHTS'
export const GET_SEARCH = 'GET_SEARCH'
export const GET_ABC = 'GET_ABC'
export const GET_DBC = 'GET_DBC'
export const POST_BREED = 'POST_BREED'


export const getDogs = () => (dispatch)=>{
    return axios('http://localhost:3001/dogs')
                    .then(res => dispatch({type: 'GET_DOGS', payload: res.data}))
}

export const getDog = (id) => (dispatch)=>{
    return axios(`http://localhost:3001/dogs/${id}`)
                    .then(res => dispatch({type: 'GET_DOG', payload: res.data}))
}

export const getTemperaments = () => (dispatch)=>{
    return axios('http://localhost:3001/temperaments')
        .then(res => dispatch({type: 'GET_TEMPERAMENTS', payload: res.data}))
    
}

export const getSearch = (value) => {
    return {
            type: 'GET_SEARCH', 
            payload: value
    }   
}

export const getByTemperaments = (value) => {
    return {
        type: 'GET_BY_GET_TEMPERAMENTS',
        payload: value
    }   
}

export const getDes = () => {
    return {
            type: 'GET_DES'
    }   
}

export const getDbc = () => {
    return {
            type: 'GET_DBC'
    }   
}


export const getAbc = () => {
    return {
        type: 'GET_ABC'
    }   
}

export const getMoreWeights = () => {
    return {
            type: 'GET_MORE_WEIGHTS'
    }   
}
export const getLessWeights = () => {
    return {
            type: 'GET_LESS_WEIGHTS'
    }   
}

export function postBreed(breed) {
  
    return async function (dispatch) {
      try {
        if(breed !== ''){
            await axios.post("http://localhost:3001/dogs", breed)
        }
      } catch (error) {
        console.log(error);
      }
    };
  
}
