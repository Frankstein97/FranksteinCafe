import './styles.css'
import { useState } from 'react'


const ItemCount = ({stock}) => {
    const [item, setItem] = useState(0)

const add = () => item < stock ? setItem (item+1) :alert ("No hay stock disponible");
const subtract = () => item > 0 ? setItem (item-1) :alert ("Elija la cantidad que desea sumar al carrito");
let addToCart = () => item > 0 ? alert (`Usted agrego ${item} al carrito`) : addToCart.disabled = true;
console.log (item)
  return (
    <>
        <div className='itemCountContainer'>
            <p>Hola soy un producto futuro</p>
            <div> Hay <strong>{stock}</strong> en stock </div>
            <div> Agregar <strong>{item}</strong> al carrito </div>
            <div className='itemCountContainer_botons'>
            <button onClick={add}>+</button>
            <button onClick={addToCart}>Agregar al Carrito</button>
            <button onClick={subtract}>-</button>
            </div>
        </div>
    </>
  )
}

export default ItemCount