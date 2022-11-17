import  "../styles.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
export const ComponenteNavBar = (props) =>{
    return(
        <nav>
            <ul className="listaHeader">
                <li><NavLink to="/"><h2>Artic Gather</h2></NavLink></li>
                <li><NavLink to="/" className={({isActive})=> (isActive ? "active":"inactive")}>Home</NavLink></li>
                <li><NavLink to="/category/Chaqueta" className={({isActive})=> (isActive ? "active":"inactive")}>Chaqueta</NavLink></li>
                <li><NavLink to="/category/Pantalones" className={({isActive})=> (isActive ? "active":"inactive")}>Pantalones</NavLink></li>
                <li><NavLink to="/category/Botas" className={({isActive})=> (isActive ? "active":"inactive")}>Botas</NavLink></li>
                <li><Link to="/cart"><CartWidget/></Link></li>
            </ul>
        </nav>
    )
}
/*
import { Component } from "react";
//tambien puede ser: export class ClassComponent extends Component {
class ClassComponent extends Component {
    render(){
        return(
            <div>
                <h2>Hola soy un componente</h2>
            </div>
        )
    }
}
export default ClassComponent;
*/