import './style.css'; 

import data from '../../components/MockFiltrados';
import { useEffect, useState } from 'react';
import ItemList from '../../components/itemList/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
  const {category} = useParams ();
  const [itemList, setitemList] = useState([]);

useEffect(() => {
  if (category) {
    const response = data.filter((response) => response.category === category)
    setitemList (response)
  } else {
    getProducts.then ((response) => {
      setitemList (response)
    })
  }
}, [category]);

 const getProducts = new Promise ((resolve, reject ) => {
  setTimeout (() => {
    resolve (data);
  }, 2000)
})
    
  return (
    <>
    <ItemList lista={itemList} /> 
    <div className='itemListContainerItems'></div>
    </>
  )
}

export default ItemListContainer