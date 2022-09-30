import "./style.css";

// import data from "../../components/MockFiltrados";
import { useEffect, useState } from "react";
import ItemList from "../../components/itemList/ItemList";
import { useParams } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
//firebase
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [itemList, setitemList] = useState([]);
  // const [loading, setLoading] = useState(true);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");

    if (category) {
      const queryFilter = query(
        querySnapshot,
        where("category", "==", category)
      );
      getDocs(queryFilter).then((res) => {
        const data = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setitemList(data);
      });
    } else {
      getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setitemList(data);
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div>
      <ItemList lista={itemList} />
    </div>
    // return <>{loading ? <Loader /> : <ItemList lista={itemList} />}</>;
  );
};

export default ItemListContainer;
