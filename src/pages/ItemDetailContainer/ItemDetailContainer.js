import {data} from "../../data/data";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import  "../styles_pages.css"

function ItemDetailContainer(prop) {

    const [item,setItems] = useState([]);
    const { id } = useParams(); // Esta fijado como id en la consigna de la entrega, pero en realdiad es la catergoria
    const getProducts = new Promise((res,rej)=>{
      setTimeout(()=>{ 
          const filteredData = data.find(item=>{
            return item.id === id; // Se cambió el tipo de ID a string en data.js
          })
          console.log(filteredData.image);
          res(filteredData);
      },700);
      });

    useEffect(()=>{
      getProducts.then((res)=> setItems(res));
    },[id]);

    return (
    <div className="d-flex justify-content-center">
        <div className="card tarjetaDetallada">
          <div className="d-flex align-items-stretch ">
            <div className="d-flex align-items-center">
              <h1>{item.title}</h1>
{/*              <img className="columna1" src={require(`../../data/itemImg/${item.image}_1.webp`)}/> */}
              </div>
            <div className="columna2">
              <p>LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  </p>
              <p>Descripciones generales del producto</p>
              <h2>${item.precio}</h2>
            </div>
          </div>          
        </div>
      </div>
  )
  }
  
  export default ItemDetailContainer