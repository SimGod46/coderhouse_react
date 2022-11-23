import { NavLink } from "react-router-dom"
import  "../styles.css"

const Item = ({product}) => {
  return (
    <div className="card tarjetaItem">
      <NavLink to={`/item/${product.id}`}>
        <img className="tarjetaMiniatura" src= {require(`../../data/itemImg/${product.image}_1.webp`)}/>
        <div>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
        </div>
      </NavLink>
    </div>

    
  )
}

export default Item