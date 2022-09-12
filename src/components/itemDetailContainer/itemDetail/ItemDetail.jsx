import './style.css'
import { useState } from 'react'


const ItemDetail = ({item}) => {


  const [itemCount, setItemCount] = useState(0)

  const add = () => itemCount < item[1].stock ? setItemCount (itemCount+1) :alert ("No hay stock disponible");
  const subtract = () => itemCount > 0 ? setItemCount (itemCount-1) :alert ("Elija la cantidad que desea sumar al carrito");
  let addToCart = () => itemCount > 0 ? alert (`Usted agrego ${itemCount} al carrito`) : addToCart.disabled = true;


  return (
    <>
  <div className='itemDetail row'>
    <div className='col-12 col-sm-6'>
      <div className="item-image text-center">
        <img src={item[1].img} className="img-fluid rounded mx-auto d-block" alt={item[1].title}/>
        <p>Elegi una cantidad y agregala al carrito.</p>
        <span className="badge text-bg-warning mb-2"> Hay <strong>{item[1].stock}</strong> articulos en stock </span>
        
      </div>
    </div>
    <div class="col-12 col-sm-6 ">
      <div className='mb-5'>
          <h2 className="item-title">{item[1].title}</h2>
          <span class="badge text-bg-primary mb-3">Envio Gratis</span>
          <div className='item-info'>
            <p className="item-price">${item[1].price}</p>
          </div>
          <p className="card-description">{item[1].description}</p>
      </div>
      <div className='col-md-3 offset-md-3'>
          <span className="badge text-dark text-center mb-2"> Cantidad: <strong>{itemCount} unidades</strong> </span>
            <div className='itemCountContainer_botons'>
            <button className="btn btn-dark m-1" onClick={add}>+</button>
            <button className='btn btn-outline-dark' onClick={addToCart}>Agregar al Carrito</button>
            <button className="btn btn-dark m-1" onClick={subtract}>-</button>
            </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default ItemDetail