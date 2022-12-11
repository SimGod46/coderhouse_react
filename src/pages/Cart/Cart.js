import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useContext, useRef } from "react"
import { cartContext } from "../../context/CartProvider"

const Cart = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const telephoneRef = useRef();

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
  const createOrder = (email,name,telephone) =>{
    const db = getFirestore();
    const query = collection(db,"Order");
    const newOrder = {
      buyer:{
        name:{name},
        phone:{telephone},
        email:{email}
      },
      items:contexto.cart,
      total:finalTotal
    };
    addDoc(query,newOrder).then((response)=>{alert(`Orden creada con el id ${response.id}`)}).catch((error)=>console.log(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const telephone = telephoneRef.current.value;
    createOrder(email,name,telephone);

  };

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
      <form style={{width:"60vw"}} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Dirección e-mail</label>
              <input type="email" className="form-control" id="email" placeholder="Ingrese su email" ref={emailRef}/>
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" ref={nameRef}/>
            </div>

            <div className="form-group">
              <label hrmlFor="telefono">Telefono</label>
              <input type="text" className="form-control" id="telefono" placeholder="Ingrse su telefono" ref={telephoneRef}/>
            </div>


            <button type="submit" className="btn btn-primary">ENVIAR</button>
          </form>
      </div>

    </div>
    )
}
export default Cart
