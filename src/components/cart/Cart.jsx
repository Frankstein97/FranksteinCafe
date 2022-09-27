import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, addItem, removeItem, clear } = useContext(CartContext);
  console.log("cart", cart);

  return (
    <>
      <div className="cart-container container  ">
        <div className="cart-header row ">
          <h2 className="col-11"> CARRITO</h2>
        </div>
        {cart.length === 0 ? (
          <>
            <h2>No hay productos bro</h2>
            <NavLink to={"/products"}>
              <button className="col-12 btn btn-outline-warning justify-content-md-end">
                Ir a comprar
              </button>
            </NavLink>
          </>
        ) : (
          <>
            {cart.map((product) => (
              <>
                <div className="cart-content list-group " key={product.id}>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="container text-center">
                        <div className="row gap-2 col-12 mx-auto">
                          <h3 className="col col-4">{product.title}</h3>
                          <div className="col-md-auto">
                            <img
                              style={{ width: "150px" }}
                              src={product.img}
                              className="img-fluid rounded mx-auto d-block"
                              alt={product.title}
                            />
                          </div>
                          <h5 className="col col-3">
                            <strong>$ </strong> {product.price}
                          </h5>
                          <h5 className="col col-3">
                            <strong>Cantidad: </strong>
                            {product.quantity}
                          </h5>

                          <h5 className="col-md-4">
                            <strong>Subtotal:</strong>$
                            {product.quantity * product.price}
                          </h5>
                          <div className="col-md-5"></div>
                          <button
                            className=" btn btn-danger col-md-2"
                            onClick={() => removeItem(product.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ))}
          </>
        )}
        <div className="cart-footer col-12 mx-auto mb-5 ">
          <div>
            <h4 className="text-warning ">
              TOTAL: ${cart.reduce((a, b) => a + b.price * b.quantity, 0)}
            </h4>
          </div>
          <div>
            <NavLink to={"/products"}>
              <button className="btn btn-primary col col-lg-3 me-2">
                Ver mas productos
              </button>
            </NavLink>
            <button className="btn btn-outline-success col col-lg-5 me-2">
              Finalizar Compra
            </button>

            <button
              onClick={clear}
              className="btn btn-warning col col-lg-3 me-2"
            >
              Limpiar carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
