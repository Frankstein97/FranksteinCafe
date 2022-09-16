import './style.css'
import { useState, useEffect } from 'react';
// import ItemDetail from '../../components/itemDetail/ItemDetail'
// import getFetch from '../../components/MockProductos'
import { useParams } from 'react-router-dom';
import {data} from '../../components/MockFiltrados'


const ItemDetailContainer = () => {
  const {id} = useParams ();
  const [product, setProduct] = useState ();
// console.log (data);
  // console.log (data);

const getProduct = () => {
  const dataFiltrada = data.filter(product => product.id === id)
  console.log (...dataFiltrada);
  setProduct (...dataFiltrada)
 
};


  useEffect (() => {
    getProduct ();
  }, []);    

// const [data, setData] = useState([]);
// const [loading, setLoading]=useState(true)

    // useEffect (() => { 
      // const dataFiltrada = getFetch.filter ((data) => data.id === id)
      //   console.log (...dataFiltrada)
      //   setData (...dataFiltrada) 
        // getFetch(Products)
        // .then ((resp) => setData(resp))
        // .then ((setData) => {
        // })
    //     .catch (error => console.log(error))
    //     .finally (()=>setLoading (false))
    // }, []);
 
    return (
      <>
          <div className='itemDetailContainer'>
            <div className='textTop'> 
             <p> ¡Si tenes alguna duda consulta primero!</p>
            </div>
      {/* {   
       loading ? <div class="d-flex justify-content-center">
       <div class="spinner-border" role="status">
         <span class="visually-hidden">Loading...</span>
       </div>
    //  </div> : <ItemDetail item={data}></ItemDetail>
      } */}
          </div>
          {/* <ItemDetail product = {product} /> */}
      </>
  
  )
}

export default ItemDetailContainer