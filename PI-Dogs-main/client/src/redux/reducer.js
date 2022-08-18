import {
    GET_DOGS, 
    GET_DOG, 
    GET_DES, 
    GET_BY_GET_TEMPERAMENTS, 
    GET_TEMPERAMENTS, 
    GET_MORE_WEIGHTS, 
    GET_LESS_WEIGHTS, 
    GET_SEARCH, 
    GET_ABC, 
    GET_DBC
} from './actions'

const initialState = {
    dogs: [],
    dog: [],
    temperaments: [],
    filter: [],
    post: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS:
            return{
                ...state, 
                dogs: action.payload,
                filter: action.payload
            }
        case GET_TEMPERAMENTS:
            return{
                ...state, 
                temperaments: action.payload
            }
        case GET_DOG:
            return{
                ...state, 
                dog: action.payload
            }
        case GET_DES:
            return{
                ...state, 
                filter: [...state.filter].reverse()
            }
        case GET_BY_GET_TEMPERAMENTS:
            return{
                ...state, 
                filter: [...state.dogs].filter(e => e.temperament?.includes(action.payload))
            }
        case GET_ABC:
            return{
                ...state, 
                filter: [...state.filter].sort(function (a, b) {
                    if (a.name < b.name) {
                      return -1;
                    }
                    if (a.name > b.name) {
                      return 1;
                    }
                    return 0;
                  })
            }
        case GET_SEARCH:
            return{
                ...state, 
                filter: [...state.dogs].filter( e => e.name.toString().toLowerCase().includes(action.payload.toLowerCase()))
            }
        case GET_DBC:
            return{
                ...state, 
                filter: [...state.filter]
            }
        case GET_MORE_WEIGHTS:
            return{
                ...state, 
                filter: [...state.filter].filter(e => e.weight?.metric !== "NaN").sort(
                    function(a, b){
                        return parseInt(b.weight.metric.slice().trim()) - parseInt(a.weight.metric.slice().trim())
                      })
                    
            }
        case GET_LESS_WEIGHTS:
            return{
                ...state, 
                filter: [...state.filter].filter(e => e.weight?.metric !== "NaN").sort(
                    function(a, b){
                        return parseInt(a.weight.metric.slice().trim()) - parseInt(b.weight.metric.slice().trim())
                      })
                    
            }
        default: return state
    }
}

export default reducer;
