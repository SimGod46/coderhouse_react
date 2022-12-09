import { useContext } from "react"
import { cartContext } from "../../context/CartProvider"

const Cart = () => {
  const contexto = useContext(cartContext);
  const dataList = contexto.cart;

  const ItemList = (products) => {
    return products.map((product)=> <div style={{display:"flex",justifyContent:"space-evenly"}}><p>{product.title}</p><p>{product.quantity}</p><button onClick={()=>contexto.removeItem(product.id)}>-</button></div>);
  }

  return (
    <div>
      <h2>Carro</h2>
      <br/>
      <div>
        {ItemList(dataList)}
      </div>
      <button onClick={()=>contexto.clear()}><h4>Limpiar todo</h4></button>
    </div>
    )
}
export default Cart
