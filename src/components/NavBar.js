import  "./styles.css"
import CartWidget from "./CartWidget"
export const ComponenteNavBar = (props) =>{
    return(
        <nav>
            <ul className="listaHeader">
                <li><h2>Artic Gather</h2></li>
                <li><a href="#">Chaquetas</a></li>
                <li><a href="#">Pantalones</a></li>
                <li><a href="#">Botas</a></li>
                <li><a href="#">Guantes</a></li>
                <li><CartWidget/></li>
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