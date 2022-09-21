import { useState } from "react";
import { CartContex } from "./CartContext"

// este provider me sirve para pasarle parametros al context y no usar estados dentro del app 
export const CartProvider = ({children}) => {
  const [cart,setCart] =useState ([]);


const addItem = (product, quantity) => {
    if (isInCart (product.id)) {
    alert ('Este protducto ya se encuentra en el carrito ');
    } else {
      setCart ([...cart, {...product, quantity}])
    }
    console.log ('cart', [...cart, {...product, quantity}])
}
    const isInCart = (id) => {
        return cart.some ((product) => product.id === id);
        };


//FUNCIONES QUE UTILIZAREMOS MAS ADELANTE QUIZA NOSE:
        
    // const clear = () => {
    //     setCart([])
    // }
    // const removeItem = (id, setCart) => {
    //     setCart.splice ((product) => product.id === id)
    // }
    return (
        <CartContex.Provider value= {{cart,addItem}}>
            {children}
        </CartContex.Provider>
  );
};

// export default CartProvider // no funciona por el "default"