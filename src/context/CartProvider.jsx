import { useState } from "react";
import { CartContext } from "./CartContext";

// este provider me sirve para pasarle parametros al context y no usar estados dentro del app.

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      const newCartList = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return {
            // product: product,
            quantity: cartItem.quantity + quantity,
          };
        } else {
          return cartItem;
        }
      });
      setCart(newCartList);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.find((cartItem) => cartItem.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (productId) => {
    let newCartList = [];
    cart.forEach((product) => {
      if (product.id === productId) {
      } else {
        newCartList.push(product);
      }
    });
    setCart(newCartList);
  };

  const totalItems = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart,isInCart, addItem, removeItem, clear, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export default CartProvider // no funciona por el "default"
