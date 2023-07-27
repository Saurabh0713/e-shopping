import React, { useState } from "react"
import Header from './Components/Header';
import Home from "./Components/Home";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import appContext from "./context";
import Buynow from "./Components/Buynow";

function App() {
  
const [cartItems,setCartItems] = useState([])
const [buyNowItem,setBuyNow] = useState([])

const dispatcherEvents = (actionType,payload) => {
  switch(actionType){
    case "ADD_ITEM":{
      if(cartItems.includes(payload)){return}
      payload.quantity = 1
      payload.totalPrice = payload.price * payload.quantity
      let item = cartItems.slice()
      item.push(payload)
      setCartItems(item)
      break
    }
    case "DELETE_ITEM":{
      let item = cartItems.slice()
      item.splice(item.indexOf(payload),1)
      setCartItems(item)
      break
    }
    case "UPDATE_ITEM":{
      let item = cartItems.slice()
      let index = item.findIndex(value => value.id===payload.id)
      item[index] = payload
      setCartItems(item)
      break
    }
    case "BUY_NOW":{
      let item = []
      item.push(payload)
      setBuyNow(item)
      break
    }
    default:{
      console.log("INVALID")
    }
  }
}

  return (
    <appContext.Provider value={{cartItems,buyNowItem,dispatcherEvents}}>

     <div className="box-border">
      <Header/>
      <Home/>
      <Products/>
      <Cart/>
      <Buynow/>
      <Contact/>
    </div>
    </appContext.Provider>
  );
}

export default App;
