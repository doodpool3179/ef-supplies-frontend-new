import React from "react";
import './Payment.css'
import cards from '../Assests/payments.png'
//import { Link } from 'react-router-dom'

const Payment = () => {
    return(
        <body>
            <link rel="stylesheet" href="Payment.css"></link>

            <div class ="container">
                <form action="">
                    <div class="row">
                        <div class="column">
                            <h3 class ="title">Billing Address</h3>
                            <div class="input-box">
                                <span>Full Name: </span>
                                <input type ="text"
                                   placeholder="John Smith">
                                </input>    
                            </div>
                            <div class="input-box">
                                <span>Email :</span>
                                <input type="email"
                                placeholder="johnsmith@example.com">
                                </input>
                            </div>
                            <div class="input-box">
                                <span>Address :</span>
                                <input type="text"
                                placeholder="Room  -  Street  -  Locality">
                                </input>
                            </div>
                            <div class="input-box">
                                <span>City :</span>
                                <input type="text"
                                placeholder="Valhalla">
                                </input>
                            </div>

                            <div class="flex">
                                <div class="input-box">
                                    <span>State :</span>
                                    <input type="text"
                                    placeholder="New York">
                                    </input>    
                                </div>
                                <div class="input-box">
                                    <span>Zip Code :</span>
                                    <input type="number"
                                    placeholder="00000">
                                    </input>    
                                </div>        
                            </div>
                        </div>

                        <div class="column">
                            <h3 class ="title">Payment</h3>
                            <div class="input-box">
                                <span>Methods Accepted: </span>
                                <img src={cards} alt="Cards"></img>
                           
                            </div>
                            <div class="input-box">
                                <span>Name On Card :</span>
                                <input type="text"
                                placeholder="John Smith">
                                </input>
                            </div>
                            <div class="input-box">
                                <span>Credit Card Number :</span>
                                <input type="number"
                                placeholder="0000 2222 4444 7777">
                                </input>
                            </div>
                            <div class="input-box">
                                <span>Expiration Date :</span>
                                <input type="text"
                                placeholder="MM/YYYY">
                                </input>
                            </div>
                            <div class="input-box">
                                <span>CVV :</span>
                                <input type="number"
                                placeholder="777">
                                </input>
                            </div>

                            <div class="flex">
                                <div class="input-box">
                                    <span>State :</span>
                                    <input type="text"
                                    placeholder="New York">
                                    </input>    
                                </div>
                                <div class="input-box">
                                    <span>Zip Code :</span>
                                    <input type="number"
                                    placeholder="00000">
                                    </input>    
                                </div>        
                            </div>
                        </div>    
                    </div>

                    <button type="submit" class="btn">Submit</button>
                </form>
            </div>
        </body>
    );
};

export default Payment;