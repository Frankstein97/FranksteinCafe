import Item from '../item/Item';
import './style.css'
const itemList = ({ lista }) => {
  
  return (
  <>

    <div className='itemList row row-cols-2 row-cols-md-3 g-4'>
      {
       lista.map ((productss) => (
        <Item key={productss.id}
          title={productss.title} 
          img={productss.img}
          description={productss.description}
        />
      ))
      }
    </div>

  </>

  );
};

export default itemList