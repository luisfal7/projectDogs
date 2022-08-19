import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postBreed } from '../../redux/actions';
import logo from '../../assets/logo.png'
import moduleCreate from './Create.module.css'

function Create() {

    const dispatch = useDispatch()

    const temperaments = useSelector((state) => state.temperaments)

    const [data, setData] = useState({
        name:'',
        validateName: null,

        heightMin:'',
        validateHeightMin: null,

        heightMax:'',
        validateHeightMax: null,

        weightMin:'',
        validateWeightMin: null,

        weightMax:'',
        validateWeightMax: null,

        lifeSpanMin:'',
        validateLifeSpanMin: null,

        lifeSpanMax:'',
        validateLifeSpanMax: null,
        
        danger:'',
        validatDanger: null,

        temperaments: [],
        validateTemperaments: null,
    })

    const handleInputChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const handleInputClickSelect = (e)=>{
        setData({
            ...data,
            [e.target.name]: data.temperaments.concat(e.target.value)
        })
    }

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        height: /^\d{1,3}$/, // 1 a 3 numeros.
        weight: /^\d{1,2}$/, // 1 a 2 numeros.
        lifeSpan: /^\d{1,2}$/ // 1 a 2 numeros.
        //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        //password: /^.{4,12}$/, // 4 a 12 digitos.
        //correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
       // telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    }

    const validationName = ()=>{
        if(expresiones.nombre.test(data.name)){
            setData({...data, validateName: 'true'})
        }else{
            setData({...data, validateName: 'false'})
        }
    }
    const validationHeigthMin = ()=>{
        if(expresiones.height.test(data.heightMin)){
            setData({...data, validateHeightMin: 'true'})
        }else{
            setData({...data, validateHeightMin: 'false'})
        }
    }
    const validationHeigthMax = ()=>{
        if(expresiones.height.test(data.heightMax) === true && data.heightMin < data.heightMax){
            setData({...data, validateHeightMax: 'true'})
        }else{
            setData({...data, validateHeightMax: 'false'})
        }
    }
    const validationWeightMin = ()=>{
        if(expresiones.weight.test(data.weightMin)){
            setData({...data, validateWeightMin: 'true'})
        }else{
            setData({...data, validateWeightMin: 'false'})
        }
    }
    const validationWeightMax = ()=>{
        if(expresiones.weight.test(data.weightMax) === true && data.weightMin < data.weightMax){
            setData({...data, validateWeightMax: 'true'})
        }else{
            setData({...data, validateWeightMax: 'false'})
        }
    }
    const validationLifeSpanMin = ()=>{
        if(expresiones.lifeSpan.test(data.lifeSpanMin)){
            setData({...data, validateLifeSpanMin: 'true'})
        }else{
            setData({...data, validateLifeSpanMin: 'false'})
        }
    }
    const validationLifeSpanMax = ()=>{
        if(expresiones.lifeSpan.test(data.lifeSpanMax) === true && data.lifeSpanMin < data.lifeSpanMax){
            setData({...data, validateLifeSpanMax: 'true'})
        }else{
            setData({...data, validateLifeSpanMax: 'false'})
        }
    }
    const validationTemperaments = ()=>{
        if(data.temperaments.length !== 0){
            setData({...data, validateTemperaments: 'true'})
        }else{
            setData({...data, validateTemperaments: 'false'})
        }
    }

    console.log(data.temperaments.length)

    const submit = (e) =>{
        e.preventDefault()
        if(data.validateName  === 'true' && 
            data.validateHeightMin  === 'true' && 
            data.validateHeightMax  === 'true' && 
            data.validateWeightMin  === 'true' && 
            data.validateWeightMax  === 'true' && 
            data.validateLifeSpanMin  === 'true' && 
            data.validateTemperaments  === 'true' && 
            data.validateLifeSpanMax === 'true'){  
            let breed = {
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                height: {
                    metric: data.heightMin + ' - ' + data.heightMax,
                },
                weight: {
                    metric: data.weightMin + ' - ' + data.weightMax,
                },
                life_span: data.lifeSpanMin + ' - ' + data.lifeSpanMax + ' years',
                temperament: data.temperaments.join(", "),
                image: {
                    url: null,
                }
            } 
            dispatch(postBreed(breed))
            alert('La raza ha sido creada exitosamente')
        }else{
            alert('Debe llenar correctamente el formulario')
        }
    }        

    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    return ( 
        <div className={moduleCreate.container}>
            <div className={moduleCreate.nav}>
            <a title="Home" href="http://localhost:3000/home">
                <img className={moduleCreate.logo} src={logo} alt=''/>
            </a>
            </div>
            <h1>crea tú raza</h1>
            <form className={moduleCreate.form} onSubmit={submit} action='/home'>
                <label>
                   <input className={moduleCreate.input} type='text' name='name' placeholder='Name' onChange={handleInputChange} onKeyUp={validationName} onBlur={validationName}/>
                   {data.validateName === 'false' && <p className={moduleCreate.validateFalse}>Por favor ingrese un nombre valido.</p>}
                   {data.validateName === 'true' && <p className={moduleCreate.validateTrue}>El nombre es valido.</p>}
                </label>

                <label>
                    <input className={moduleCreate.input} type='text' name='heightMin' placeholder='height Min (cm)' onChange={handleInputChange} onKeyUp={validationHeigthMin} onBlur={validationHeigthMin}/>
                    {data.validateHeightMin === 'false' && <p className={moduleCreate.validateFalse}>Por favor ingrese una altura minima valida.</p>}
                    {data.validateHeightMin === 'true' && <p className={moduleCreate.validateTrue}>La altura minima es valida.</p>}
                </label>

                <label>
                    <input className={moduleCreate.input} type='text' name='heightMax' placeholder='height Max (cm)' onChange={handleInputChange} onKeyUp={validationHeigthMax} onBlur={validationHeigthMax}/>
                    {data.validateHeightMax === 'false' && <p className={moduleCreate.validateFalse}>Por favor ingrese una altura maxima valida.</p>}
                    {data.validateHeightMax === 'true' && <p className={moduleCreate.validateTrue}>La altura maxima es valida.</p>}
                </label>

                <label>
                    <input className={moduleCreate.input} type='text' name='weightMin' placeholder='weight Min (kg)' onChange={handleInputChange} onKeyUp={validationWeightMin} onBlur={validationWeightMin}/>
                    {data.validateWeightMin === 'false' && <p className={moduleCreate.validateFalse}>Por favor ingrese un peso minimo valida.</p>}
                    {data.validateWeightMin === 'true' && <p className={moduleCreate.validateTrue}>El peso minimo es valida.</p>}
                </label>
                
                <label>
                    <input className={moduleCreate.input} type='text' name='weightMax' placeholder='weight Max (kg)' onChange={handleInputChange} onKeyUp={validationWeightMax} onBlur={validationWeightMax}/>
                    {data.validateWeightMax === 'false' && <p className={moduleCreate.validateFalse}>Por favor ingrese un peso maximo valida.</p>}
                    {data.validateWeightMax === 'true' && <p className={moduleCreate.validateTrue}>El peso maximo es valida.</p>}
                </label>

                <label>
                    <input className={moduleCreate.input} type='text' name='lifeSpanMin' placeholder='life span min (years)' onChange={handleInputChange} onKeyUp={validationLifeSpanMin} onBlur={validationLifeSpanMin}/>
                    {data.validateLifeSpanMin === 'false' && <p className={moduleCreate.validateFalse}>Por favor ingrese una esperanza de vida minima valida.</p>}
                    {data.validateLifeSpanMin === 'true' && <p className={moduleCreate.validateTrue}>La esperaza de vida minima es valida.</p>}
                </label>

                <label>
                    <input className={moduleCreate.input} type='text' name='lifeSpanMax' placeholder='life span max (years)' onChange={handleInputChange} onKeyUp={validationLifeSpanMax} onBlur={validationLifeSpanMax}/>
                    {data.validateLifeSpanMax === 'false' && <p className={moduleCreate.validateFalse}>Por favor ingrese una esperanza de vida maxima valida.</p>}
                    {data.validateLifeSpanMax === 'true' && <p className={moduleCreate.validateTrue}>La esperaza de vida maxima es valida.</p>}
                </label>
                    <span className={moduleCreate.span}>Seleccionar los temperamentos</span>
                <label>
                <select className={moduleCreate.inputSelect} name='temperaments' multiple={true} size={15} onChange={handleInputClickSelect} onKeyUp={validationTemperaments} onBlur={validationTemperaments}>
                                    {temperaments.map((e) => (
                                    <option key={e.id} value={e.name}>
                                        {e.name}
                                    </option>
                                    ))}
                                </select>
                                {data.validateTemperaments === null && <p className={moduleCreate.TempsSelect}>Temperamentos elegidos: {data.temperaments}</p>}        
                                {data.validateTemperaments === 'true' && <p className={moduleCreate.TempsSelect}>Temperamentos elegidos: {data.temperaments}</p>}        
                </label>
                <label>
                    <input className={moduleCreate.btn} type='submit' value='Create'/>
                    
                </label>
            </form>
        </div>
     );
}

export default Create;
