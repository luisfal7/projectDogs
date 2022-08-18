import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card'
import modulePages from './Pages.module.css'

function Pages() {

    const dogs = useSelector((state) => state.filter)

    const [currentPage, setCurrentPage] = useState(0)

    const prevPage = ()=>{
        if(currentPage < 9){
            setCurrentPage(0)
        }else{
            setCurrentPage(currentPage - 8)
        }
    }

    const nextPage = ()=>{
        if(dogs.length <= currentPage + 8){
            setCurrentPage(currentPage)
        }else{
            setCurrentPage(currentPage + 8)
        }
    }

    const dogsPage = dogs.slice(currentPage, currentPage + 8)

    return ( 
        <div className={modulePages.cards}>
            {
                dogsPage.map(e =>(
                    <Link key={e.id} to={`/dog/${e.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <Card 
                            id = {e.id}
                            name = {e.name} 
                            image = {e.image?.url}
                            weightMetric = {e.weight?.metric}
                            lifeSpan = {e.life_span}
                            temperaments = {e.temperament}
                        />
                    </Link>
                ))
            }

            <div className={modulePages.containerBtn}>
                <button className={modulePages.btn} onClick={prevPage}>
                    Anterior
                </button>
                <button className={modulePages.btn} onClick={nextPage}>
                    siguiete
                </button>
            </div>
        </div>
     );
}

export default Pages;