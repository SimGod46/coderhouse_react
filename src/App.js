import './App.css';
//Los componentes siempre empiezan con mayuscula!
//import ClassComponent from './components/NavBar';
import {ComponenteNavBar} from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="navegacion">
        <ComponenteNavBar/>
      </header>
      <ItemListContainer greeting="Bienvenido"/>
    </div>
  );
}

export default App;
