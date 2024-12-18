import React from 'react';
import Nav from '../Navbar/Navbar.jsx'
import { PRODUCTS } from "../../products.js";
import { Product } from "./product";
import "./Homev2.css"

const Home = () => {
    return(
        <div>
            <div className="shop">
                <div className="shopTitle">
                <h1>EF Supplies</h1>
                </div>
        
                <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
                </div>
            </div>
         </div>
    );
};

export default Home;