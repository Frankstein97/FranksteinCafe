import './style.css'
import { useState } from 'react'
import { ItemCount } from '../itemCount/ItemCount'

const ItemDetail = ({title, price, description, category, stock, img }) => { 
  const [itemCount, setItemCount] = useState(0)


  return (
    <>
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
           <ItemCount setItemCount={setItemCount} itemCount={itemCount} stock={stock}/>
      </div>
    </div>

   {/* ))
   } */}
    </>
  )
}

export default ItemDetail