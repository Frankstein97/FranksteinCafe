import CartWidget from './CartWidget';
import './style.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-lg-top">
  <div className="container-fluid">
    <Link to={'/'}>
    <div className="navbar-brand me-2" style={{display:'flex'}}>
    <img src="https://acegif.com/wp-content/uploads/gifs/coffee-88.gif" alt="" width="90" className="d-inline-block align-text-top"/>
    <h1 >Cafe App</h1>
    </div>
    </Link>

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link to={'/aboutUs'}>
          <div className="nav-link" href="#/">NOSOTROS</div>
          </Link>
        </li>
       
        <li className="nav-item me-3">
          <Link to={'/products'}>
          <div className="nav-link" href="#/">PRODUCTOS</div>
          </Link>
        </li>
        <li className="nav-item me-3">
        <Link to={'/products'}>
          <div className="nav-link" href="#/">FILTRADOS</div>
        </Link>
        </li>
        <li className="nav-item me-3">
        <Link to={'/contact'}>
          <div className="nav-link" href="#/">CONTACTO</div>
        </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Productos y filtrados..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      
    </div>
    <CartWidget/>
  </div>
</nav>
    
    </>
  )
}

export default NavBar