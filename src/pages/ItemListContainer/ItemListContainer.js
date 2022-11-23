import {data} from "../../data/data";
import {useState,useEffect} from "react";
import ItemList from "../../components/ItemList/ItemList";
import {useParams} from "react-router-dom";
import  "../styles_pages.css"

function ItemListContainer(prop) {
  const [items,setItems] = useState([]);
  const { id } = useParams(); // Esta fijado como id en la consigna de la entrega, pero en realdiad es la catergoria
  const getProducts = new Promise((res,rej)=>{
    setTimeout(()=>{
      if( id ){
        const filteredData = data.filter((item)=>{
          return item.category === id;
        })
        res(filteredData);
      } else {
        res(data);
      }
    },700);
    });
  useEffect(()=>{
    getProducts.then((res)=> setItems(res));
  },[id]);
  return (
    <div className="grillaItems">
      <ItemList products={items}/>
    </div>
)
}

export default ItemListContainer