import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import ItemListContainer from '../src/pages/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from '../src/pages/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';
import Home from './pages/homeContainer/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path='/products' element= {<ItemListContainer/>}/>
          <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
          <Route path='/aboutUs' element= {<AboutUs/>}/>
          <Route path='/contact' element= {<Contact/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
