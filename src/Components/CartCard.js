import React, { useState, useContext, useEffect } from "react";
import appContext from "../context";

export default function CartCard(props) {
  const [count, setCount] = useState(1);
  const {dispatcherEvents} = useContext(appContext)

  function handleQuantityChange(event) {
    if (event.target.id === "inc") {
      let quantity = count + 1;
      setCount(quantity);
      props.item.quantity = quantity;
      props.item.totalPrice = props.item.price * props.item.quantity;
      dispatcherEvents("UPDATE_ITEM",props.item)
    } else {
      let quantity = count;
      if (quantity === 1) {
        return;
      }
      quantity = quantity - 1;
      setCount(quantity);
      props.item.quantity = quantity;
      props.item.totalPrice = props.item.price * props.item.quantity;
      dispatcherEvents("UPDATE_ITEM",props.item)
    }
  }

  function handleDelete(){
    // console.log(props.delete)
    props.delete(props.item)
  }

  useEffect(()=>{
    props.refresh()
  },[props.item.quantity])

  return (
    <div className="m-1 md:m-2 p-1 md:p-2 w-11/12 sm:w-4/5 sm:h-40 flex items-center justify-evenly bg-neutral-100 relative">
      <button className="sm:w-6 w-4 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 absolute top-0 right-0" onClick={handleDelete}>X</button>
      <div className="w-20 md:w-1/5 flex items-center justify-center">
        <img
          className="w-16 md:w-32 h-16 md:h-32"
          src={props.item.thumbnail}
          alt="product"
        ></img>
      </div>
      <div className="w-1/3 sm:w-2/5 text-xs sm:text-base  p-2">
        <h3>{props.item.brand}</h3>
        <h3 className="my-1">{props.item.title}</h3>
        <p>${props.item.price}</p>
      </div>
      <div className="w-2/5 md:w-1/5 p-2 text-xs sm:text-base">
        <div className="flex items-center justify-between">
          <p className="">Quantity</p>
          <div>
            <button
              className="w-4 md:w-5 mx-1 text-sm md:text-base font-bold bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded"
              id="dec"
              onClick={handleQuantityChange}
            >
              -
            </button>
            <button
              className="w-4 md:w-5 mx-1 text-sm md:text-base font-bold bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded"
              id="inc"
              onClick={handleQuantityChange}
            >
              +
            </button>
          </div>
          <p>{props.item.quantity}</p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p>Total Price :</p>
          <b>${props.item.totalPrice}</b>
        </div>
      </div>
    </div>
  );
}
