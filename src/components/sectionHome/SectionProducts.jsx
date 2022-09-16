import './styleP.css';
import {Link} from 'react-router-dom';

const SectionProducts = () => {

  return (
    <>
  <div className='itemProduct row'>
    <div className='col-12 col-sm-6'>
      <div className="item-image text-center">
        <img src='https://c.tenor.com/_h5RONFrRawAAAAC/cafe-coffee.gif' className="img-fluid rounded mx-auto d-block" alt='gifcafe'/>
        <p>Revisa todo lo que hay para vos</p>       
      </div>
    </div>
    <div className="col-12 col-sm-6 ">
      <div className='mb-5'>
          <h2 className="item-title">Productos</h2>
          {/* <Link to={'/products'}> */}
          <Link to={'/products'}>
          <div>
          <button className="badge text-bg-light mb-4"><span>Ir a comprar ► </span></button>
          {/* </Link> */}
          </div>
          </Link>
          <div className='item-info'>
          </div>
          <p className="card-description"> Aqui podras ver las variedades de cafe que tenemos para ofrecer </p>
      </div>
    </div>
   </div>


   <div className='itemFilter row'>
    <div className='col-12 col-sm-6'>
    <div className='mb-5'>
    
          <h2 className="item-title">Filtrados</h2>
          <Link to={'products'}>
          <button className="badge text-bg-dark mb-4"><span>Ir a ver ► </span></button>
          </Link>
          <div className='item-info'>
          </div>
          <p className="card-description"> Aqui podras ver los metodos de filtrado de cafe que tenemos para mostrarte </p>
      </div>
    </div>
    <div className="col-12 col-sm-6 ">
      <div className="item-image text-center">
        <img src='https://joecoffeecompany.com/wp-content/uploads/2018/07/joe-coffee-chemex-second-pour-step-5.gif' className=" img-filter rounded mx-auto d-block" alt='giffiltrado'/>
        <p>Revisa que filtrado se adapta a tu paladar</p>       
      </div>
    </div>
    </div>
    </>
  )
}

export default SectionProducts