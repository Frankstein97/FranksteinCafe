import './App.css';
import NavBar from './components/navbar/NavBar';
import Carousel from './components/carousel/Carousel';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      
      <NavBar/>
      <Carousel/>
      <ItemListContainer titulo={"AQUI IRA UN CATALOGO DE PRODUCTOS"}/>
      <ItemDetailContainer/>
      <div className="App-footer">
        <p> aca iran redes sociales y coso</p>
      </div>
    
    </>

  );
}

export default App;
