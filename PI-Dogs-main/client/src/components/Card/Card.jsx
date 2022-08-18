import React from 'react';
import moduleCard from './Card.module.css'

function Card(props) {
    const {name, image, weightMetric, temperaments} = props

    return (
        <div className={moduleCard.body}>
            <div className={moduleCard.container}>
                <div className={moduleCard.card}>
                    <img width={100} src={image} alt='' />
                    <h3><b>{name}</b></h3>
                    <h4>peso: {weightMetric} Kg</h4>
                    <h4>temperamentos: {temperaments}</h4>
                </div>
            </div> 
        </div>
     );
}

export default Card;