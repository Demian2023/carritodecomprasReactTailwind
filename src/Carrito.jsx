import PropTypes from 'prop-types'
import { useState, useContext } from 'react';
import { Contexto } from './App';

export const Carrito = () => {
    const [mostrarBoolean, setMostrarBoolean] = useState(false);
    const mostrar = () =>{
        setMostrarBoolean(!mostrarBoolean)
    }

    const {productosCarrito, quitarTodo, quitar} = useContext(Contexto)

return (
    <>
        <div className={mostrarBoolean ?
        "scrollbar mostrar fixed z-20 w-fit text-end flex flex-col items-end overflow-auto justify-start overscroll-contain" :
        "scrollbar salida fixed z-20 w-fit text-end flex flex-col items-end overflow-auto justify-start overscroll-contain"
        } style={{height: "calc(100vh - 100px", bottom: "20px", right: "20px"}}>
            <ul>
                {productosCarrito &&
                productosCarrito.map((producto, index)=>(
                    <li key={index}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg colorSecundario backdrop-blur-sm">
                                <img className="w-full" src={producto.thumbnail} alt={producto.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{producto.title}</div>
                                <p className="text-gray-700 text-base">
                                {producto.description}
                                </p>
                            </div>
                            <div className='flex justify-between'>
                                <button className='ml-4 text-black bg-slate-50/50 backdrop-blur-sm hover:bg-sky-400/75 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none'
                                onClick={()=>quitar(index)}>
                                    Quitar
                                </button>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {producto.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {productosCarrito &&
            productosCarrito.length > 0 &&
                <button type="button" className="mt-4 text-black bg-sky-200/75 backdrop-blur-sm hover:bg-sky-400/75 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
                onClick={quitarTodo}>
                    Quitar todo
                </button>
            }
            
        </div>
        <button className="fixed max-h-full right-4 z-10 w-fit bg-sky-200/50 backdrop-blur-sm p-3 rounded-full hover:bg-sky-400/75"
        onClick={mostrar} style={{top: "20px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
            </svg>
        </button>
        {productosCarrito &&
        productosCarrito.length > 0 && 
            <div className="fixed right-4 z-10 bg-red-700 text-white w-6 h-6 text-center rounded-full" style={{top: "50px"}}>
                <p>{productosCarrito.length}</p>
            </div>
        }
    </>
);
}

Carrito.propTypes = {
    productosCarrito: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    quitarTodo: PropTypes.func,
    quitar: PropTypes.func,
};