import { NavLink } from "react-router-dom"
import  "../styles.css"

const Item = ({product}) => {
  return (
    <div className="card tarjetaItem">
      <NavLink to={`/item/${product.id}`}>
{/*       <img className="tarjetaMiniatura" src= {require(`../../data/itemImg/${product.image}_1.webp`)}/> */}
        <img className="tarjetaMiniatura" src= {`/images/${product.imageID}`}/>
        <div style={{paddingBottom:"1vh"}}>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
        </div>
      </NavLink>
    </div>

    
  )
}

export default Item