import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

  import NavBar from './components/navbar/NavBar';
    import ItemListContainer from '../src/pages/itemlistcontainer/ItemListContainer'
    import ItemDetailContainer from '../src/pages/itemDetailContainer/ItemDetailContainer';
  import AboutUs from './pages/aboutUs/AboutUs';
  // import ContactContainer from './pages/contactContainer/ContactContainer'
  import Home from './pages/homeContainer/Home';
  import Footer from './components/footer/Footer';
  import {CartProvider } from './context/CartProvider'
  import Cart from './components/cart/Cart';
import Methods from './pages/methods/methods';
  

function App() {
  return (
    <>
    <CartProvider>

      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/" element= {<Home/>}/>
          <Route path='/products' element= {<ItemListContainer titulo={"Todos los productos"}/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/aboutUs' element= {<AboutUs/>}/>
          <Route path='/methods' element= {<Methods/>}/>
          {/* <Route path='/contact' element= {<ContactContainer/>}/> */}
        </Routes>


      <Footer/>
      
      </BrowserRouter>

    </CartProvider>
    </>

  );
}

export default App;
