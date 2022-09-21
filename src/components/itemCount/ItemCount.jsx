import './style.css'

export const ItemCount = ({stock, setItemCount, itemCount}) => {

    
  const add = () => itemCount < stock ? setItemCount (itemCount+1) :alert ("No hay stock disponible");
  const subtract = () => itemCount > 0 ? setItemCount (itemCount-1) :alert ("Elija la cantidad que desea sumar al carrito");


  // const goToCart = () => {
  //   console.log (itemCount)
  // }

  
  return (
    <>
        <div className='itemCountContainer_botons'>
            <button className="btn btn-outline-dark m-1" onClick={subtract}>-</button>  
            <button className="btn btn-outline-dark m-1" onClick={add}>+</button>
            {/* <Link to={'/cart'}><button className='btn btn-primary' onClick={goToCart}>Ir al carrito </button> </Link> */}

        </div>
    </>
  )
}
