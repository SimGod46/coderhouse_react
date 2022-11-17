import {data} from "../../data/data";
import {useState,useEffect} from "react";
import ItemList from "../../components/ItemList/ItemList";
import {useParams} from "react-router-dom";

function ItemListContainer(prop) {
  const [items,setItems] = useState([]);
  const { categoryName } = useParams();
  const getProducts = new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log(categoryName);
      if(categoryName){
        const filteredData = data.filter((item)=>{
          return item.category === categoryName;
        })
        res(filteredData);
      } else {
        res(data);
      }
    },2000);
    });
  useEffect(()=>{
    getProducts.then((res)=> setItems(res));
  },[]);
  return (
    <div>
      <ItemList products={items}/>
    </div>
)
}

export default ItemListContainer