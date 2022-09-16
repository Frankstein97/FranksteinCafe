import Item from '../item/Item';
import './style.css'
import { Link } from 'react-router-dom';

const itemList = ({ lista }) => {
  
  return (
  <>

    <div className='itemList row row-cols-2 row-cols-md-3 g-4'>
      {
       lista.map ((productss) => (
        <Link 
        key={productss.id}
        to={'/detail/' + productss.id}
        >
          <Item 
          title={productss.title} 
          img={productss.img}
          description={productss.description}
          />
        </Link>
      ))
      }
    </div>

  </>

  );
};

export default itemList