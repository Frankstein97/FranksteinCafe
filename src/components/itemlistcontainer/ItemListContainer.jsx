import ItemCount from '../itemcount/ItemCount'
import './style.css'


var stock = 5


const ItemListContainer = ({titulo}) => {
  return (
    <>
    <div className='itemListContainer'>
        <h2>{titulo}</h2>    
    </div> 
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