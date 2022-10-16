import "./style.css";
import dri from '../../img/dri.gif'
import addoncart from '../../img/addoncart.gif'
import Swal from 'sweetalert2'
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
  const { cart, TotalInCart, removeItem, clear, setItemsState } = useContext(CartContext);
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: cart,
    total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    date: moment().format("DD/MM/YYYY, h:mm:ss a")
  });

  const db = getFirestore();
  const createOrder = () => {

    // setOrder((currentOrder) => {
    //   return {
    //     ...currentOrder,
    //     items: cart,
    //     total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    //     date: moment().format("DD/MM/YYYY, h:mm:ss a"),
    //   };
    // });
    
    const query = collection(db, "orders");
    addDoc(query, order)
      .then(({ id }) => {
        console.log(id);
        updateStockProduct(cart);
        Swal.fire({
          icon: 'success',
              imageUrl: `${addoncart}`,
              imageWidth: 300,
              imageHeight: 200,
              imageAlt: 'Custom image',
          title: `'Gracias ${nombreUsuario}!!'`,
          text: `'Felicidades por tu compra. Tu nro de orden es: ${id}'`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
    
      })


      .catch(() => Swal.fire({
        icon: 'error',
        title: 'cuack!',
        text: 'Error al realizar la compra, intentelo de nuevo mas tarde',
       
      })
      )
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
          clear();setItemsState(0);
          navigate('/')
          }
        })
        .catch(() => {
          console.log("error al actualizar el stock");
        });
    });
  };

  //SetOrder

  const handleInputChange = (e) => {

    setOrder({
        ...order,
        buyer: {
            ...order.buyer,
            [e.target.name]: e.target.value,
        }
    });
};

let nombreUsuario = order.buyer.name;
// console.log(nombreUsuario);



  return (
    <>
      

        {cart.length === 0 ? 
//Si el carrito esta vacio      
        (
          <>
            <h2 className="cart_title">Aún no hay productos en el carrito!</h2>
            <div className="cart_empty col-12">
            <img src={dri} alt="dri"/>
            
            <NavLink to={"/products"}>
              <button className="col-10 btn btn-outline-warning ">
                <strong>IR A COMPRAR</strong>
              </button>
            </NavLink>
            </div >
          </>
        ) : 
//Si el carrito tiene productos         
        (
          <div className="container_card">
          <>
          <div className=" cart_container">
            
        {cart.map((product) => (
              <div key={product.id}>

                <div className="card_product">
                  <h3>{product.title}</h3>
                  <div className="product_content">

                    <div className="product_img">
                    <img
                      style={{ width: "150px" }}
                      src={product.img}
                      className="img-fluid rounded mx-auto d-block"
                      alt={product.title}
                    />
                    </div>

                    <div className="product_data">

                      <p><span>Cantidad: </span><strong>{product.quantity}</strong></p>
                      <p><span>Precio x U: $</span><strong>{product.price}</strong></p>
                    </div>

                    <div className="product_end">
                    <p><span>Subtotal: $</span><strong>{product.quantity * product.price}</strong></p>
                    <button
                      className=" btn btn-danger"
                      onClick={() => removeItem(product.id)}
                    >
                      Eliminar
                    </button>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
          
          
            

            <div className="fin-tr">

            
            <h4 className="text-warning ">TOTAL: ${TotalInCart()}</h4>

          
              <p className="order-style">Complete los datos de la orden de compra:</p>
            
          
              
            <div className="formFlex">
             <input className="input" name="name" type="text" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange} />
            
            <input className="input" name="phone" type="phone" placeholder="Phone" value={order.buyer.phone} onChange={handleInputChange} />
             
             <input className="input" name="email" type="email" placeholder="Email" value={order.buyer.email} onChange={handleInputChange} />
             
        </div> 

            <button
              onClick={clear}
              className="btn btn-warning me-2"
            >
              Limpiar carrito
            </button>
            
            <button
              onClick={createOrder}
              className="btn btn-outline-success"
            >
              Finalizar Compra
            </button>
  
            </div>
        

        <NavLink to={"/products"}>
              <button className="btn btn-primary">
                Ver más productos
              </button>
            </NavLink>

        </>
        </div>
        
        )}
      
    </>
  );
};

export default Cart;
