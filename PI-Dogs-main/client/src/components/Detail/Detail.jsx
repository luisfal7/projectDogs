import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDog } from '../../redux/actions';
import logo from '../../assets/logo.png'
import moduleDetail from './Detail.module.css'

function Detail(props) {

    const id = props.match.params.id

    const dispatch = useDispatch()
    const dog = useSelector((state) => state.dog)

    useEffect(()=>{
        dispatch(getDog(id))
    },[dispatch,id])

    return ( 
        <div className={moduleDetail.container}>
            <div className={moduleDetail.nav}>
            <a title="Home" href="http://localhost:3000/home">
                <img className={moduleDetail.logo} src={logo} alt=''/>
            </a>
            </div>
            <div className={moduleDetail.detail}>
                <img src={dog.image?.url} width={400} alt='' />
                <h1>{dog.name}</h1>
                <h3>Temperament: {dog.temperament}</h3>
                <h3>Height: {dog.height?.imperial} centimeters</h3>
                <h3>Weight: {dog.weight?.imperial} kilograms</h3>
                <h3>Life span: {dog.life_span}</h3>
            </div>
        </div>
        
     );
}

export default Detail;
