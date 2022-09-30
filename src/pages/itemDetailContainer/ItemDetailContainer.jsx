import "./style.css";
import { useState, useEffect } from "react";
import ItemDetail from "../../components/itemDetail/ItemDetail";
// import ItemDetailList from '../../components/ItemDetailList/ItemDetailList'
import { useParams } from "react-router-dom";
// import data from '../../components/MockFiltrados'
// import Loader from "../../components/loader/Loader";
import { getFirestore, doc, getDoc } from "firebase/firestore"; //

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  // const [loading, setLoading] = useState(true);

  const db = getFirestore();

  const getProducts = () => {
    const queryDoc = doc(db, "items", id);

    getDoc(queryDoc)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <h1>loading...</h1>}
      {/* <> {loading ? <Loader /> : <ItemDetailList product={itemDetail} />} </> */}
    </div>
  );
};
export default ItemDetailContainer;
