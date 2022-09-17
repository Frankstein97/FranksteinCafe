import './style.css'
import { useState, useEffect } from 'react';
import ItemDetailList from '../../components/ItemDetailList/ItemDetailList'
import { useParams } from 'react-router-dom';
import data from '../../components/MockFiltrados'


const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState ([]);
  const { id } = useParams ();
  
    useEffect (() => {
      getProducts.then ((response) => {
        setItemDetail(response)
      });
    }, []);    

const getProducts = new Promise((resolve, reject) => {
  setTimeout (() => {
    resolve(data.filter((prod) => prod.id === id));
  }, 2000)
  
});
  
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
    return (
      <>
          <ItemDetailList product = {itemDetail}  />
      </>
  
  )
}

export default ItemDetailContainer