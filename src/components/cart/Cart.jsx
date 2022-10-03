import "./style.css";
import { useContext, useState } from "react";
import { CartContext,  } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import moment from "moment";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    buyer: {
      name: "miau",
      phone: "12121212121",
      email: "miaumiau@miau.com",
    },
    items: [],
    total: 0,
    date: "",
  });

  const { cart, TotalInCart, removeItem, clear } = useContext(CartContext);
  const db = getFirestore();

  const createOrder = () => {
    setOrder((currentOrder) => {
      return {
        ...currentOrder,
        items: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        date: moment().format("DD/MM/YYYY, h:mm:ss a"),
      };
    });
    
    const query = collection(db, "orders");
    addDoc(query, order)
      .then(({ id }) => {
        console.log({ id });
        updateStockProduct();
        alert("lista la compra");
      })
      .catch(() => console.log("error al finalizar la orden"));
  };

  const updateStockProduct = () => {
    cart.forEach((product) => {
      const queryUpdate = doc(db, "items", product.id);
      updateDoc(queryUpdate, {
        category: product.category,
        description: product.description,
        img: product.img,
        price: product.price,
        shortdescription: product.shortdescription,
        stock: product.stock - product.quantity,
        title: product.title,
        
      })
        .then(() => {
          if (cart[cart.length -1].id === product.id){
          console.log("Se actualizo el stock");
          clear();
          navigate('/')
          }
        })
        .catch(() => {
          console.log("error al actualizar el stock");
        });
    });
  };

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
              <button className="col-12 btn btn-lg btn-outline-warning justify-content-md-end">
                Ir a comprar
              </button>
            </NavLink>
          </>
        ) : (
          <>
            {cart.map((product) => (
              <div key={product.id}>
                <div className="cart-content list-group ">
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
              </div>
            ))}
          </>
        )}
        <div className="cart-footer col-12 mx-auto mb-5 ">
          <div>
            <h4 className="text-warning ">TOTAL: ${TotalInCart()}</h4>
          </div>
          <div>
            <NavLink to={"/products"}>
              <button className="btn btn-primary col col-lg-3 me-2">
                Ver mas productos
              </button>
            </NavLink>
            <button
              onClick={createOrder}
              className="btn btn-outline-success col col-lg-5 me-2"
            >
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
