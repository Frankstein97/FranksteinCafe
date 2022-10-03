import "./style.css";
import { useState, useContext } from "react";
import { ItemCount } from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ product}) => {

  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(1);

  function onAdd(product) {
    addItem(product, count);
  }

  return (
    <><div className="item_detail">
      <div className="col-12 col-sm-6">
        <div className="item-image text-center">
          <img
            src={product.img}
            className="img-fluid rounded mx-auto d-block"
            alt={product.title}
          />
          <p>Elegi una cantidad y agregala al carrito.</p>
          <span className="badge text-bg-warning mb-2">
            Hay <strong>{product.stock}</strong> articulos en stock
          </span>
          <Link to={"/products"}>
            <button className="btn btn-primary m-2"> Ir a productos </button>
          </Link>
        </div>
      </div>
      <div className="col-12 col-sm-6 ">
        <div className="mb-5">
          <h2 className="item-title">{product.title}</h2>
          <span className="badge text-bg-primary mb-3">Envio Gratis</span>
          <div className="item-info">
            <p className="item-price">{product.price}</p>
          </div>
          <p className="card-description">{product.description}</p>
        </div>

        <div className="itemCountContainer_botons">
          <span className="badge text-dark text-center mb-2">
            Cantidad: <strong>{count} unidades</strong>
          </span>
          <ItemCount setCount={setCount} count={count} stock={product.stock} />
          <div className="col-12 offset-md-6">
            <button className="btn btn-dark" onClick={() => onAdd(product)}>
              Agregar producto
            </button>
            <Link to={"/cart"}>
              <button className="btn btn-info m-2"> Ir al carrito </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ItemDetail;
