import './style.css'
import { useState } from 'react'


const ItemDetail = ({title, price, description, category, stock, img }) => { 
  const [itemCount, setItemCount] = useState(0)


  //TODO ESTO LO VA A TENER QUE TENER EL ITEMCOUNT AL QUE LE VOY A PASAR EL PRODUCT.STOCK COMO PROP
  const add = () => itemCount < stock ? setItemCount (itemCount+1) :alert ("No hay stock disponible");
  const subtract = () => itemCount > 0 ? setItemCount (itemCount-1) :alert ("Elija la cantidad que desea sumar al carrito");
  let addToCart = () => itemCount > 0 ? alert (`Usted agrego ${itemCount} al carrito`) : addToCart.disabled = true;


  return (
    <>
    {/* {product.map ((product) =>  ( */}

    

   
    <div className='col-12 col-sm-6'>
      <div className="item-image text-center">
        <img src={img} className="img-fluid rounded mx-auto d-block" alt={title}/>
        <p>Elegi una cantidad y agregala al carrito.</p>
        <span className="badge text-bg-warning mb-2"> Hay <strong>{stock}</strong> articulos en stock </span>
        
      </div>
    </div>
    <div className="col-12 col-sm-6 ">
      <div className='mb-5'>
          <h2 className="item-title">{title}</h2>
          <span className="badge text-bg-primary mb-3">Envio Gratis</span>
          <div className='item-info'>
            <p className="item-price">{price}</p>
          </div>
          <p className="card-description">{description}</p>
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

   {/* ))
   } */}
    </>
  )
}

export default ItemDetail