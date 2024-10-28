'use client'
import React , { useState } from "react";

export default function CheckOut(){
    const [showPopup, setShowPopup] = useState(false);

    return( 
        <div className="flex flex-col gap-5 items-center justify-center pt-10">
            <h1 className="text-3xl font-bold">Enter Your Details</h1>
            <div className="flex flex-col items-center justify-center py-20 w-[60%] h-auto border-[1px] border-gray-300">
                <div className="h-80 w-[100%]" onClick={() => setShowPopup(false)}>
                    <form className="flex flex-col items-center justify-center gap-10">
                        <input type="text" placeholder="Enter your name" className="w-96 p-1 border-[1px] border-gray-300 rounded"/>
                        <input type="email" placeholder="Enter your email" className="w-96 p-1 border-[1px] border-gray-300 rounded" />
                        <input type="number" placeholder="Card number" className="w-96 p-1 border-[1px] border-gray-300 rounded" />
                        <input type="text" placeholder="Address" className="w-96 p-1 border-[1px] border-gray-300 rounded" />
                    </form>
                </div>
                <button type="button" className="p-2 px-3 bg-blue-800 rounded text-[12px] text-white hover:bg-green-500" onClick={() => setShowPopup(true)}>Place Your Order</button>
            </div>
            {
                showPopup ? (
                <div className="flex flex-col gap-5 items-center justify-center p-10 bg-white shadow-lg rounded z-20 absolute">
                    <h1 className="text-4xl text-blue-500 font-bold italic">Thank You For Shopping!!!</h1>
                    <p className="italic">Your order will be delivered in 3 Business days</p>
                </div>) :null
            }
        </div>
    );
}