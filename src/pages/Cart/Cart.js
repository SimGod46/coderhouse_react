import { useContext } from "react"
import { cartContext } from "../../context/CartProvider"

const Cart = () => {
  const contexto = useContext(cartContext);
  const dataList = contexto.cart;
  const finalTotal = dataList.reduce((prev,next) => Number(prev) + Number(next.precio)*Number(next.quantity),0);
  const ItemList = (products) => {
    return products.map((product)=> 
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
      <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center", width:"80%"}}>
        <h5 style={{width:"30%"}}>{product.title}</h5>
        <p  style={{width:"30%"}}>${product.precio}</p>
        <p  style={{width:"30%"}}>{product.quantity} UN</p>
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"20%"}}>
        <button className="btn btn-primary" onClick={()=>contexto.addToCart(product,product.quantity-1)}>-</button>
        <button className="btn btn-primary" onClick={()=>{console.log(product);contexto.addToCart(product,product.quantity+1)}}>+</button>
        <button className="btn btn-primary" onClick={()=>contexto.removeItem(product.id)}>#TC</button>
      </div>
    </div>);
  }

  return (
    
    <div>
      <h2>Carro</h2>
      <br/>
      <div>
        {ItemList(dataList)}
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center",paddingTop:"10vh"}}>
        <button className="btn btn-primary" onClick={()=>contexto.clear()}><h4>Limpiar todo</h4></button>
        <button className="btn btn-primary"><h4>Pagar</h4></button>
        <h2>TOTAL: ${ finalTotal }</h2>
      </div>

      <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center",paddingTop:"10vh"}}>
      <form style={{width:"60vw"}}>
            <div className="form-group">
              <label for="exampleInputEmail1">Dirección e-mail</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Nombre</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Telefono</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>

    </div>
    )
}
export default Cart
