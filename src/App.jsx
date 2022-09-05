import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import Carousel from './components/carousel/Carousel';
function App() {
  return (
    <>
      
      <NavBar/>
      <Carousel/>
      <ItemListContainer titulo={"AQUI IRA UN CATALOGO DE PRODUCTOS"}/>
      
      <div className="App-footer">
        <p> aca iran redes sociales y coso</p>
      </div>
    
    </>

  );
}

export default App;
