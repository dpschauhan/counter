import React from "react";
import { useState } from "react";

// coupon app
const Coupon = () => {
    const [Price,setPrice]=useState("");
    const [discounted,setdiscounted]=useState("5000");
    const [coupon,setcoupon]=useState();
    const [couponapplied,setcouponapplied]=useState(false);
    let price=5000;
    const couponList={
        "psit": 8.76,//coupon code and discount percentage
        "zomoato": .9, //coupon code and discount percentage
        "new15": .9 //coupon code and discount percentage
        }
    const applycoupon=()=>{
        var coupon=document.getElementsByName("Coupon")[0].value;
        console.log(coupon);
    }
    return (
        <div className="coupon">
            <h1>Coupon App</h1>
            <form action="">
            <input type="text" name="coupon" placeholder="Enter your name"></input>
            <br />
            <button onClick={applycoupon} name="Coupon">Apply</button>
            <button onClick={handleClick}>Reset</button>
            <button onClick={handleClick}>Pay Now {Price}</button>
            </form>
            {/* <p>{message}</p> */}
        </div>
    );
};
export default Coupon;
