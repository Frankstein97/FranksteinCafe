import './style.css'; 

import data from '../../components/MockFiltrados';
import { useEffect, useState } from 'react';
import ItemList from '../../components/itemList/ItemList';
import {useParams} from 'react-router-dom';
import Loader from '../../components/loader/Loader';

const ItemListContainer = () => {
  const {category} = useParams ();
  const [itemList, setitemList] = useState([]);
  const [loading, setLoading] =useState (true)


useEffect(() => {
  if (category) {
    const response = data.filter((response) => response.category === category)
    setitemList (response);
    setLoading () //cargaspinners en categorias
  } else {
    getProducts
    
    .then ((response) => {
      
      setitemList (response)
    })
    .catch ((err) => console.log(err))
    .finally (() => setLoading (false));
  }
}, [category]);

 const getProducts = new Promise ((resolve, reject ) => {
  setTimeout (() => {
    resolve (data);
  }, 2000)
})
    
  return (
    <>
    
    {loading ? <Loader/>:  <ItemList lista={itemList} /> 
    }
    
    
    </>
  )
}

export default ItemListContainer