import './style.css'
import { useState, useEffect } from 'react';
import ItemDetail from './itemDetail/ItemDetail'
// import products from '../MockProductos';
import getFetch from '../MockProductos';

const ItemDetailContainer = () => {

const [data, setData] = useState([]);
const [loading, setLoading]=useState(true)

    useEffect (() => {
        getFetch
        .then ((resp) => setData(resp))
        .catch (error => console.log(error))
        .finally (()=>setLoading (false))
    }, []);

  return (
    <>
        <div className='itemDetailContainer'>
          <div className='textTop'> 
           <p> ¡Si tenes alguna duda consulta primero!</p>
          </div>
    {   
     loading ? <div class="d-flex justify-content-center">
     <div class="spinner-border" role="status">
       <span class="visually-hidden">Loading...</span>
     </div>
   </div> : <ItemDetail item={data}></ItemDetail>
    }
        </div>
    </>
  )
}

export default ItemDetailContainer