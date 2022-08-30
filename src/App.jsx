import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div className="Franktein Cafe App">

      <NavBar/>
      <ItemListContainer titulo={"AQUI IRA UN CATALOGO DE PRODUCTOS"}/>
      <header className="App-header">
      <div style={{display: "flex"}}>

        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div style={{display: "flex"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    
    </div>

  );
}

export default App;
