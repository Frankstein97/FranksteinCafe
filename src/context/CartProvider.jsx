import { useState } from "react";
import { CartContext } from "./CartContext";

// este provider me sirve para pasarle parametros al context y no usar estados dentro del app.

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      alert("este item ya se encuentra en el carrito");
    } else {
      alert(" se ha agregado este producto al carrito");
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clear = () => {
    setCart([]);
    console.log("esta funcion elimina los items del cart");
  };

  const removeItem = (productId) => {
    let newCartList = [];
    cart.forEach((product) => {
      if (product.id === productId) {
      } else {
        newCartList.push(product);
      }
    });

    console.log("se elimino un produto");
    setCart(newCartList);
  };

  const totalItems = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  };
  const TotalInCart = () => {
    return cart.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addItem,
        removeItem,
        clear,
        totalItems,
        TotalInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export default CartProvider // no funciona por el "default"
