import React from "react";
import './Payment.css'
import cards from '../Assests/payments.png'

const Payment = () => {
    return(
        
        <div>
            <div className="pcontainer">
                <form action="">
                    <div className="prow">
                        <div className="pcolumn">
                            <h3 className ="title">Billing Address</h3>
                            <div className="pinput-box">
                                <span>Full Name: </span>
                                <input type ="text"
                                   placeholder="John Smith">
                                </input>    
                            </div>
                            <div className="pinput-box">
                                <span>Email :</span>
                                <input type="email"
                                placeholder="johnsmith@example.com">
                                </input>
                            </div>
                            <div className="pinput-box">
                                <span>Address :</span>
                                <input type="text"
                                placeholder="Room  -  Street  -  Locality">
                                </input>
                            </div>
                            <div className="pinput-box">
                                <span>City :</span>
                                <input type="text"
                                placeholder="Valhalla">
                                </input>
                            </div>

                            <div className="pflex">
                                <div className="pinput-box">
                                    <span>State :</span>
                                    <input type="text"
                                    placeholder="New York">
                                    </input>    
                                </div>
                                <div className="pinput-box">
                                    <span>Zip Code :</span>
                                    <input type="number"
                                    placeholder="00000">
                                    </input>    
                                </div>        
                            </div>
                        </div>

                        <div className="pcolumn">
                            <h3 className ="title">Payment</h3>
                            <div className="input-box">
                                <span>Methods Accepted: </span>
                                <img src={cards} alt="Cards"></img>
                           
                            </div>
                            <div className="pinput-box">
                                <span>Name On Card :</span>
                                <input type="text"
                                placeholder="John Smith">
                                </input>
                            </div>
                            <div className="pinput-box">
                                <span>Credit Card Number :</span>
                                <input type="number"
                                placeholder="0000 2222 4444 7777">
                                </input>
                            </div>
                            <div className="pinput-box">
                                <span>Expiration Date :</span>
                                <input type="text"
                                placeholder="MM/YYYY">
                                </input>
                            </div>
                            <div className="pinput-box">
                                <span>CVV :</span>
                                <input type="number"
                                placeholder="777">
                                </input>
                            </div>

                            <div className="pflex">
                                <div className="pinput-box">
                                    <span>State :</span>
                                    <input type="text"
                                    placeholder="New York">
                                    </input>    
                                </div>
                                <div className="pinput-box">
                                    <span>Zip Code :</span>
                                    <input type="number"
                                    placeholder="00000">
                                    </input>    
                                </div>        
                            </div>
                        </div>    
                    </div>

                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;