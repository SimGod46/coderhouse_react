import {useState,useEffect} from "react";
import ItemList from "../../components/ItemList/ItemList";
import {useParams} from "react-router-dom";
import  "../styles_pages.css"
import {getFirestore, collection, getDocs, query, where, limit} from 'firebase/firestore';
import LoadingComponent from "../../components/Loading/loading";
function ItemListContainer(prop) {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const { id } = useParams(); // Esta fijado como id en la consigna de la entrega, pero en realdiad es la catergoria
  /*
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
*/
const getProducts =()=>{
  const db = getFirestore();
  const querySnapshot = collection(db,"items");
  if( id ){
    const queryFilter = query(querySnapshot,where("category","==",id));
    getDocs(queryFilter).then((response)=>{const data = response.docs.map((item)=>{
      return {id: item.id, ...item.data()};
    });
    console.log(data);
    setItems(data);
    setLoading(false);
   }).catch((error)=>{console.log(error)});
  } else {
    getDocs(querySnapshot).then((response)=>{const data = response.docs.map((item)=>{
      return {id: item.id, ...item.data()};
    });
    console.log(data);
    setItems(data);
    setLoading(false);
   }).catch((error)=>{console.log(error)});
  }
}

  /*
  useEffect(()=>{
    getProducts.then((res)=> {setItems(res);setLoading(false);});
  },[id]);
*/
  useEffect(()=>{getProducts()},[id])

  return(
    <LoadingComponent estadoCarga={loading}>
      <div className="grillaItems" style={{marginBottom:"1vh"}}>
        <ItemList products={items}/>
      </div>        
    </LoadingComponent>
  )
}

export default ItemListContainer