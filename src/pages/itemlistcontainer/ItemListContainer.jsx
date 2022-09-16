import './style.css'; 
import products from '../../components/MockProductos';
import { useEffect, useState } from 'react';
import ItemList from '../../components/itemList/ItemList';


const ItemListContainer = () => {
  //lista de productos 
 const [productList, setProductList] = useState([]);

useEffect(() => {
  getProducts
  .then((response)=> {
  setProductList(response);
  })
  // .catch((error) => console.log (error));
}, []);

const getProducts = new Promise ((resolve,reject) => {

    setTimeout(() => {
      resolve(products);
      },2000)
      // reject ('Hubo un error')
    });

    
  return (
    <>
    <ItemList lista={productList} /> 
    <div className='itemListContainerItems'></div>
    </>
  )
}

export default ItemListContainer