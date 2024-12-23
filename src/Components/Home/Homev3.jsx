import React, { useState, useEffect } from 'react';
import { Kit, Product } from '../Product/product.jsx';
import "./Homev3.css";

import toiletries from "../Assests/images/pic01.jpg";
import kitchen from "../Assests/images/pic03.jpg";
import supplies from "../Assests/images/schoolpak.png";
import pot from "../Assests/images/pot3.png"
import toaster from "../Assests/images/toaster.png"
import mug from "../Assests/images/mug.png"
import nailclipper from "../Assests/images/nailclipr.png"
import deodorant from "../Assests/images/deodorant.png"
import tbandpaste from "../Assests/images/tbandp.png"
import stapler from "../Assests/images/stapler.png"
import scissors from "../Assests/images/scissors-1.png"
import indexcards from "../Assests/images/indexcards-1.png"


<script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

const imageMapping = {
    "Toiletry Necessities": toiletries,
    "Kitchen Necessities": kitchen,
    "Student Supplies": supplies,
    "Pot Set": pot,
    "Toaster": toaster,
    "Mug Set": mug,
    "Nail Clipper": nailclipper,
    "Deodorant": deodorant,
    "Toothbrush and Toothpaste": tbandpaste,
    "Stapler": stapler,
    "Scissors": scissors,
    "Index Cards": indexcards
};

const kitMapping = {
    "Toiletry Necessities": { image: toiletries, discountPrice: 59.99 },
    "Kitchen Necessities": { image: kitchen, discountPrice: 69.99 },
    "Student Supplies": { image: supplies, discountPrice: 89.99 },
};

const Home = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
  
    // Fetch products from the backend
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}api/products`);
          if (response.ok) {
            const data = await response.json();
            setProducts(data.map((product) => ({ ...product, price: parseFloat(product.price) })));
          } else {
            console.error('Failed to fetch products');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchProducts();
    }, []);

  return (
    <>
      <div className="products">
        <div className="container">
          <h1 className="lg-title">Special Offers</h1>
          <p className="text-light">Here are our pre-packaged necessity kits!</p>
          <div className="product-items">
            {products.map((product) => {
              if (kitMapping[product.name]) {
                // Render Kit Component
                return (
                  <Kit
                    key={product.product_id}
                    name={product.name}
                    price={product.price}
                    discountPrice={kitMapping[product.name].discountPrice}
                    image={kitMapping[product.name].image}
                    category="Necessity Kits"
                    onAddToCart={() => addToCart(product)}
                  />
                );
              } else {
                // Render Product Component
                return (
                  <Product
                    key={product.product_id}
                    name={product.name}
                    price={product.price}
                    image={imageMapping[product.name]}
                    category="General Products"
                    onAddToCart={() => addToCart(product)}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;