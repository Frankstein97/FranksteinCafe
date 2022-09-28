import "./style.css";
import { useState, useEffect } from "react";
import ItemDetailList from "../../components/ItemDetailList/ItemDetailList";
import { useParams } from "react-router-dom";
import data from "../../components/MockFiltrados";
import Loader from "../../components/loader/Loader";
//firebase
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const { id } = useParams();

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


  
  // const [loading, setLoading] = useState(true);
  //firebase
  // const db = getFirestore();
  // const queryDoc = doc(db, "items", "03P94kaThNsgJKG5ZEQp");
  // getDoc(queryDoc).then((res) => {
  //   console.log(res.id);
  // }).catch(err => console.log (err))
  
  // const itemCollection = db.collection("items");
  // const item = itemCollection.doc("03P94kaThNsgJKG5ZEQp");
  // console.log(data);

  // useEffect(() => {
  //   getProducts
  //     .then((response) => {
  //       setItemDetail(response);
      // },);    
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  // const getProducts = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data.filter((prod) => prod.id === id));
  //   }, 2000);
  // });

  // {/* <div className="d-flex justify-content-center">
  //   <div className="spinner-border" role="status">
  //     <span className="visually-hidden">Loading...</span>
  //   </div>
  // </div> */}
  
  const getProduct = () => {
    const db = getFirestore();
    const queryDoc = doc(db, 'Items', id);
    getDoc(queryDoc)
      .then((res) => {
        setItemDetail({id: res.id, ...res.data()});

      })
      .catch(err => console.log(err));
    }
  
  return (
  <>
  <ItemDetailList data={itemDetail}></ItemDetailList>
  {/* {loading ? <Loader /> : <ItemDetailList product={itemDetail} />} */}
  </>
  )
};

export default ItemDetailContainer;
