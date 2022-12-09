import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
//Los componentes siempre empiezan con mayuscula!
//import ClassComponent from './components/NavBar';
import {ComponenteNavBar} from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider';
function App() {
  return (
    <CartProvider>
      <div className="App">      
      <BrowserRouter>
        <header className="navegacion">
          <ComponenteNavBar/>
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;
