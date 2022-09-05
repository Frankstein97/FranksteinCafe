import './style.css';
import ItemCount from '../itemcount/ItemCount';
import products from '../MockProductos';
import { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';


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


      //stock del ItemCount
var stock = 5
  return (
    <>
    <ItemList lista={productList} /> 
    <div className='itemListContainerItems'>  
    <ItemCount stock={stock}></ItemCount>
    <ItemCount stock={stock}></ItemCount>
    <ItemCount stock={stock}></ItemCount>
    <ItemCount stock={stock}></ItemCount> 
    </div>
    </>
  )
}

export default ItemListContainer