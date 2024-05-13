import { useState, useEffect } from 'react';
import axios from 'axios';

export const LogicaCarrito = () => {
  
const [jsonTest, setJsonTest] = useState([]);
const [productosFiltrados, setProductosFiltrados] = useState();
const [productosCarrito, setProductosCarrito] = useState([]);

  useEffect(() => {
      axios.get('https://dummyjson.com/products?limit=12')
          .then(response => {
              setJsonTest(response.data);
              setProductosFiltrados(response.data.products);
          })
          .catch(error => console.error('Error fetching data:', error));
  },[]);

  const filtrado = (precio) => {
    const filtro = jsonTest.products.filter(producto => {
      return (
        producto.price >= precio
      )
    })
    setProductosFiltrados(filtro)
  }

  const agregarCarrito = (id, imagen, titulo, descripcion, precio) => {

    const carrito = [{
      id: id,
      thumbnail: imagen,
      title: titulo,
      description: descripcion,
      price: precio
    }];
    
    setProductosCarrito([...productosCarrito, ...carrito]);

  }

  const quitarTodo = () => {
    setProductosCarrito("")
  }

  const quitar = (index) => {
    const carritoNuevo = productosCarrito.filter((prod, idx) => idx !== index);
    setProductosCarrito(carritoNuevo)
  }

return ({filtrado, agregarCarrito, quitarTodo, quitar, productosFiltrados, productosCarrito});
}
