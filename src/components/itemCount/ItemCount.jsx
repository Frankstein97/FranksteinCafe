import "./style.css";

export const ItemCount = ({ stock, count, setCount }) => {
  const add = () =>
    count < stock ? setCount(count + 1) : alert("No hay stock disponible");
  const subtract = () =>
    count > 1
      ? setCount(count - 1 )
      : alert("Elija la cantidad que desea sumar al carrito");

  return (
    <>
      
        <button className="btn btn-outline-dark m-1" onClick={subtract}>
          -
        </button>
        <button className="btn btn-outline-dark m-1" onClick={add}>
          +
        </button>
      
    </>
  );
};
