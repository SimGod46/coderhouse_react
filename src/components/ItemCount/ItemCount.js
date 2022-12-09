import  "../styles.css"
const ItemCount = ({ setContadorProd, contadorProd }) => {
    return (
    <div className="contadorItem">
        <button className="btn btn-primary" onClick={()=> setContadorProd((valorActual)=>{if(valorActual>0){ return valorActual-1 } else{ return valorActual }})}>-</button>
        <h2>{contadorProd}</h2>
        <button className="btn btn-primary" onClick={()=> setContadorProd((valorActual)=>valorActual+1)}>+</button>
    </div>
  )
}
 export default ItemCount;