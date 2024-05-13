import { useState, useContext } from 'react';
import { Contexto } from './App';
import PropTypes from 'prop-types';

export const Filtros = () => {

    const {filtrado} = useContext(Contexto)

    const [inputPrecio, setInputPrecio] = useState();
    const [precio, setPrecio] = useState();
    const handlePrecio = (e) => {
        setInputPrecio(e.target.value)
    }

    const establecerPrecio = () =>{
        setPrecio(inputPrecio)
        setInputPrecio("")
        filtrado(inputPrecio)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            establecerPrecio();
        }
    };

return (
    <>
        <div className='px-8 py-4'>
            <h1>Filtros</h1>
            <label htmlFor="precio"><h2>Precio desde:</h2></label>
            <input type="number" value={inputPrecio} id="precio"
            className='my-3'
            placeholder="Precio" required
            onChange={handlePrecio}
            onKeyDown={handleKeyDown}/>
            <button onClick={establecerPrecio}>Establecer precio</button>
            <br/>
            <div className="h-4">
                {precio && parseFloat(precio).toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}
            </div> 
        </div>
        
    </>
);
}

Filtros.propTypes = {
    filtrado: PropTypes.func
}