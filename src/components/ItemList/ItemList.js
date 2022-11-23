import Item from "../Item/Item"
import  "../styles.css"

const ItemList = ({ products }) => {
  return products.map((product)=> <Item className="tarjetaItem" product={product} key={product.id}/>);
}

export default ItemList