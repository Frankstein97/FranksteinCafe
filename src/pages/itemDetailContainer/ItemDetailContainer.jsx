import './style.css'
import { useState, useEffect } from 'react';
import ItemDetailList from '../../components/ItemDetailList/ItemDetailList'
import { useParams } from 'react-router-dom';
import data from '../../components/MockFiltrados'
import Loader from '../../components/loader/Loader';


const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState ([]);
  const { id } = useParams ();
  const [loading, setLoading] =useState (true)



    useEffect (() => {
      getProducts
      .then ((response) => {
        setItemDetail(response)
      })
      .catch ((err) => console.log(err))
      .finally (() => setLoading (false));
    }, []);    

const getProducts = new Promise((resolve, reject) => {
  setTimeout (() => {
    resolve(data.filter((prod) => prod.id === id));
  }, 2000)
  
});
  
// {/* <div className="d-flex justify-content-center">
//   <div className="spinner-border" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </div>
// </div> */}
    return (
      <>
      { 
      loading ? <Loader/> : <ItemDetailList product = {itemDetail}  />
        }
      </>
  
  )
}

export default ItemDetailContainer