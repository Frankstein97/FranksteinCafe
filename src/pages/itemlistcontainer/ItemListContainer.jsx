import "./style.css";

import data from "../../components/MockFiltrados";
import { useEffect, useState } from "react";
import ItemList from "../../components/itemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
//firebase
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [itemList, setitemList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      const response = data.filter(
        (response) => response.category === category
      );
      setitemList(response);
      setLoading(); //cargaspinners en categorias
    } else {
      getProducts

        .then((response) => {
          setitemList(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [category]);

   const getProducts = new Promise ((resolve, reject ) => {
    setTimeout (() => {
      const db = getFirestore();
      const querySnapshot = collection(db, 'items')
      getDocs(querySnapshot).then((resolve) => {
        const data = resolve.docs.map ((doc) => {
                return {id: doc.id, ...doc.data()}
              });
              setitemList(data)
      }).catch ((reject) => console.log (reject))
      resolve (data);
    }, 2000)
  })


  
  // const getProducts = () => {
  //   const db = getFirestore();
  //   const querySnapshot = collection(db, 'items');
  //   getDocs(querySnapshot).then((responese) => {
  //     const data = responese.docs.map ((doc) => {
  //       return doc.data()
  //     });
  //     setitemList(data);
  //   });
  // };

  return <>{loading ? <Loader /> : <ItemList lista={itemList} />}</>;
};

export default ItemListContainer;
