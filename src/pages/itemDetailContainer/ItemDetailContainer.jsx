import './style.css'
import { useState, useEffect } from 'react';
import ItemDetailList from '../../components/ItemDetailList/ItemDetailList'
import { useParams } from 'react-router-dom';
// import data from '../../components/MockFiltrados'
import Loader from '../../components/loader/Loader';
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore"; //


const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState ([]);
  const { category } = useParams ();
  const [loading, setLoading] =useState (true)

    useEffect (() => {
      getProducts()
    }, [category]);   
    
const getProducts = () => {
  const db = getFirestore();
  const querySnapshot =collection (db, "items");
  getDocs(querySnapshot)
  .then((resolve) => {
    const data = resolve.docs.map((doc) => {
      return {id: doc.id, ...doc.data() };
    });
    if (category) {
    setItemDetail (data.filter (
      (response) => response.category === category)
    )} else setItemDetail (data);

    setLoading(false);
  })
  .catch((reject) => console.log(reject))
};


    return <> {loading ? <Loader/> : <ItemDetailList product = {itemDetail} />} </>

};
export default ItemDetailContainer