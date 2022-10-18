import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getSearch} from '../../redux/actions';
import logo from '../../assets/logo.png'
import moduleNav from './Nav.module.css'


function Nav() {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const handleChange = (e)=>{
        setValue(e.target.value)
        getSearch(value)
    }

    useEffect(()=>{
        dispatch(getSearch(value))
    },[dispatch, value])

    return (
        <div className={moduleNav.container}>
             <a title="Home" href="/"><img className={moduleNav.logo} src={logo} alt='' /></a>
            <nav className={moduleNav.nav}>
                <ul className={moduleNav.lu}>
                    <li><Link className={moduleNav.link} to="/create">Crear raza</Link></li>
                    <li><Link className={moduleNav.link} to="/">Salir</Link></li>
                </ul>
            </nav>
            <input className={moduleNav.search} type='search' placeholder='Buscar raza...' onChange={handleChange}/>
        </div>
    );

};

export default Nav;