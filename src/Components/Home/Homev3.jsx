import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import "./Homev3.css"
import toiletries from "../Assests/images/pic01.jpg";
import kitchen from "../Assests/images/pic03.jpg";
import supplies from "../Assests/images/schoolpak.png";
import pot from "../Assests/images/pot3.png"
import toaster from "../Assests/images/toaster.png"
import mug from "../Assests/images/mug.png"
import naiilcliipper from "../Assests/images/nailclipr.png"
import deodorant from "../Assests/images/deodorant.png"
import tbandpaste from "../Assests/images/tbandp.png"
import stapler from "../Assests/images/stapler.png"
import scissors from "../Assests/images/scissors-1.png"
import indexcards from "../Assests/images/indexcards-1.png"


<script src="https://kit.fontawesome.com/dbed6b6114.js" crossorigin="anonymous"></script>

const Home = () => {
    return(
        <body>
        <Navbar />
        <div class = "products">
            <div class = "container">
        
                <h1 class = "lg-title">Special Offers</h1>
                <p class = "text-light">Here are our 3 pre-packaged necessity kits!</p>

                <div class = "product-items">
                    {/*<!-- Toiletry Needs -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {toiletries} width={200} height={200} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">Toiletries</h2>
                            </div>
                            <a href = "#" class = "product-name">Toiletry Necessiities</a>
                            <p class = "product-price">$ 89.99</p>
                            <p class = "product-price">$ 59.99</p>
                        </div>

                        <div class = "off-info">
                            <h2 class = "sm-title">33% off</h2>
                        </div>
                    </div>
                    {/*<!-- end of Toiletry Needs-->*/}

                    {/*<!-- Kitchen Needs -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                            <img src = {kitchen} width={200} height={200} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart
                                    <span><i class = "fas fa-plus"></i></span>
                                </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">Kitchen</h2>
                            </div>
                            <a href = "#" class = "product-name">Kitchen Necessities</a>
                            <p class = "product-price">$ 89.99</p>
                            <p class = "product-price">$ 59.99</p>
                        </div>
                        <div class = "off-info">
                            <h2 class = "sm-title">33% off</h2>
                        </div>
                    </div>
                    {/*<!-- end -->*/}

                    {/*<!-- Student Supply Needs -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {supplies} width={240} height={200} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">School Supplies</h2>
                            </div>
                            <a href = "#" class = "product-name">Student Necessities</a>
                            <p class = "product-price">$ 119.99</p>
                            <p class = "product-price">$ 89.99</p>
                        </div>
                        <div class = "off-info">
                            <h2 class = "sm-title">33% off</h2>
                        </div>
                    </div>
                    {/*<!-- end of single product -->*/}

                    {/*<!-- Kitchen product 1-->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {pot} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">Kitchen</h2>
                            </div>
                            <a href = "#" class = "product-name">Cooking Pot</a>
                            <p class = "product-price">$ 9.99</p>
                            <p class = "product-price">$ 7.99</p>
                        </div>
                    </div>
                    {/*<!-- end -->*/}

                    {/*<!-- Kitchen Product 2 -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {toaster} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">Kitchen</h2>
                            </div>
                            <a href = "#" class = "product-name">Toaster</a>
                            <p class = "product-price">$ 23.99</p>
                            <p class = "product-price">$ 17.99</p>
                        </div>
                    </div>
                    {/*<!-- end -->*/}

                    {/*<!-- Kitchen Product 3 -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {mug} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">Kitchen</h2>
                            </div>
                            <a href = "#" class = "product-name">Coffee Mug</a>
                            <p class = "product-price">$ 8.99</p>
                            <p class = "product-price">$ 4.99</p>
                        </div>
                    </div>
                    {/*<!-- end -->*/}

                    {/*<!-- Bathroom Product 1 -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {tbandpaste} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">Bathroom</h2>
                            </div>
                            <a href = "#" class = "product-name">Toothbrush and Paste</a>
                            <p class = "product-price">$ 7.99</p>
                            <p class = "product-price">$ 4.99</p>
                        </div>
                    </div>
                    {/*<!-- end -->*/}

                    {/*<!-- Bathroom Product 2 -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {deodorant} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">Bathroom</h2>
                            </div>
                            <a href = "#" class = "product-name">Deodorant</a>
                            <p class = "product-price">$ 4.99</p>
                            <p class = "product-price">$ 2.99</p>
                        </div>

                    
                    </div>
                    {/*-- end --*/}

                    {/*<!-- Bathroom Product 3 -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {naiilcliipper} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">Bathroom</h2>
                            </div>
                            <a href = "#" class = "product-name">Nail Clipper</a>
                            <p class = "product-price">$ 7.99</p>
                            <p class = "product-price">$ 4.99</p>
                        </div>

                    
                    </div>
                    {/*-- end --*/}

                    {/*<!-- School Supplies 1 -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {stapler} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">School Supplies</h2>
                            </div>
                            <a href = "#" class = "product-name">Stapler</a>
                            <p class = "product-price">$ 11.99</p>
                            <p class = "product-price">$ 7.99</p>
                        </div>
                    </div>
                    {/*<!-- end of single product -->*/}

                    {/*<!-- single product -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {scissors} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">School Supplies</h2>
                            </div>
                            <a href = "#" class = "product-name">Scissors</a>
                            <p class = "product-price">$ 6.99</p>
                            <p class = "product-price">$ 4.99</p>
                        </div>
                    </div>
                    {/*<!-- end -->*/}

                    {/*<!-- School Supplies Product 3 -->*/}
                    <div class = "product">
                        <div class = "product-content">
                            <div class = "product-img">
                                <img src = {indexcards} alt = "product image"></img>
                            </div>
                            <div class = "product-btns">
                                <button type = "button" class = "btn-cart"> add to cart </button>
                                <a href = "/Payment">
                                <button type = "button" class = "btn-buy"> buy now </button>
                                </a>
                            </div>
                        </div>

                        <div class = "product-info">
                            <div class = "product-info-top">
                                <h2 class = "sm-title">School Supplies</h2>
                            </div>
                            <a href = "#" class = "product-name">Index Cards</a>
                            <p class = "product-price">$ 5.99</p>
                            <p class = "product-price">$ 3.99</p>
                        </div>
                    </div>
                    {/*<!-- end of single product -->*/}

                </div>
            </div>
        </div>

        
        
    </body>
        );
    };
    
    export default Home;