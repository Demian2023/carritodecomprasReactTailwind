import PropTypes from 'prop-types'
import { Contexto } from './App';
import { useContext } from 'react';

export const Productos = () => {

    const {productosFiltrados, agregarCarrito} = useContext(Contexto)

return (
    <ul className="flex flex-wrap gap-4 justify-evenly my-11">
        {productosFiltrados && productosFiltrados.map((producto)=>(
        <li key={producto.id} className="img relative pb-16 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-64" src={producto.thumbnail} alt="" loading="lazy" />
            <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{producto.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.description}</p>
            <div className='absolute bottom-14'>
            Precio {producto.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}
            </div>
            <button className="absolute bottom-4 inline-flex items-center px-3 py-2"
            onClick={()=>agregarCarrito(producto.id, producto.thumbnail, producto.title, producto.description, producto.price)}>
                Agregar al carrito
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 icon icon-tabler icon-tabler-shopping-cart" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </button>
            </div>
        </li>
        ))
        }
    </ul>
);
}

Productos.propTypes = {
    productosFiltrados: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    agregarCarrito: PropTypes.func
};