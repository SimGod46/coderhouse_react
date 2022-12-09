import { useState, createContext } from "react";
export const cartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        item.quantity = cantidad;
        if(cantidad!=0){
            if(isInCart(item.id)){            
                console.log("Item Exists!");
                //SobreEscribir
                setCart(
                    cart.map(itemOnCart => (itemOnCart.id === item.id ? Object.assign({}, itemOnCart, { "quantity":cantidad }) : itemOnCart))
                    );
            } else {
                console.log("Added to cart!");
                //Anexar
                setCart([...cart,item]);
                console.log(cart);
            }
        } else {
            removeItem(item.id);
        }
    }
    const removeItem = (id) => {
        // Eliminar de "cart"
        setCart(
            cart.filter((itemOnCart)=> itemOnCart.id!=id)
            );
    }
    const clear = ()=>{
        setCart([])
    }

    const isInCart = (id)=>{
        if (cart.find(itemOnCart=>{
            return itemOnCart.id === id; 
          })){return true} else {false}
    }
    return(
        <cartContext.Provider value={{cart, addToCart, removeItem, clear}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider;