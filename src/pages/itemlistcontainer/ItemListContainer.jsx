import './style.css'; 

import data from '../../components/MockFiltrados';
import { useEffect, useState } from 'react';
import ItemList from '../../components/itemList/ItemList';
import {useParams} from 'react-router-dom';

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
    
    {loading ?
      <div className='itemListContainerItems'>
        <div className="spinner spinner-border justify-content-center" role="status">
        <span className="visually-hidden">Loading...</span>
        </div> 
      </div> : 
    <ItemList lista={itemList} /> 
    }
    
    
    </>
  )
}

export default ItemListContainer