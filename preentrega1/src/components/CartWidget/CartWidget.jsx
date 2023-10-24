import React from "react";
import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import zapatillaLogo from "../../assets/zapatilla-logo2.jpg"; // Ajusta la ruta según tu estructura de archivos



const CartWidget = () => {

    return (
        <nav className="cart-widget">
        <img src={zapatillaLogo} alt="Zapatilla Logo"  />
        <div className="cart-info">
            <BsFillCartFill/>
            <p>0</p>
        </div>
    </nav>
    )
}

export default CartWidget; 

