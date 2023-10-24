import React from "react";
import "./itemListContainer.css";


const ItemListContainer = ({ greeting }) => {

    return (
        <>
            <h1 className="titulo">{greeting}</h1>
            <nav>
                <li>
                <li><a href="#home">Link1</a></li>
                <li><a href="#home">Link2</a></li>
                <li><a href="#home">Link3</a></li>
                </li>
            </nav>
        </>

    )
}

export default ItemListContainer;

