import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="Franktein Cafe App">

      <NavBar/>
      
      <header className="App-header">
      <div style={{display: "flex"}}>

        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>
<div style={{display: "flex"}}>
     <p className="App-logo"> Sin television y sin cerveza </p> 
     <p className="App-logo"> homero pierde la cabevza </p>
     <p className="App-logo"> Sin television y sin cerveza </p> 
     <p className="App-logo"> homero pierde la cabevza </p>
     <p className="App-logo"> Sin television y sin cerveza </p> 
     <p className="App-logo"> homero pierde la cabevza </p>
     </div>
        <div style={{display: "flex"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
