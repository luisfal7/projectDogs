import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getDogs,
    getTemperaments,
    getAbc,
    getDes,
    getMoreWeights,
    getLessWeights,
    getByTemperaments
} from "../../redux/actions";
import moduleFilter from './Filter.module.css'

function Filter() {
    const dispatch = useDispatch();

    let temperaments = useSelector((state) => state.temperaments)

    const handleChangeSelect = (e)=>{
        if(e.target.value === 'seleccionar temperamento'){
            dispatch(getDogs())
        }else{
            dispatch(getByTemperaments(e.target.value))
        } 
    }

    useEffect(() => {
        dispatch(getTemperaments())
        dispatch(getDogs());
      }, [dispatch]);

    return ( 
        <div>
            <div className={moduleFilter.container}>
                <ul className={moduleFilter.menu}>
                    <li><button className={moduleFilter.btn} type="submit" onClick={() => dispatch(getAbc())}> Ordenar por nombre </button></li>
                    <li><button className={moduleFilter.btn} type="submit" onClick={() => dispatch(getDes())}> Orden descendente </button></li> 
                    <li><button className={moduleFilter.btn} type="submit" onClick={() => dispatch(getMoreWeights())}> Ordenar por mas peso </button></li>
                    <li><button className={moduleFilter.btn} type="submit" onClick={() => dispatch(getLessWeights())}> Ordenar por menos pesado </button></li> 
                    <li><button className={moduleFilter.btn} type="submit" onClick={() => dispatch(getDogs())}> Reset </button></li> 
                    <li><select className={moduleFilter.btn} onClick={handleChangeSelect}>
                            <option key={0}>
                                seleccionar temperamento
                            </option>
                            {temperaments.map(e =>{ 
                                return(
                                    <option key={e.id} value={e.name}>
                                        {e.name}
                                    </option>
                                )}
                            )}
                    </select>
                    </li>
                </ul>
            </div>
            
                
        </div>
     );
}

export default Filter;