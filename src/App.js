import React, { useState } from "react"
import Header from './Components/Header';
import Home from "./Components/Home";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import appContext from "./context";
import Buynow from "./Components/Buynow";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";


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
    <BrowserRouter>
    <appContext.Provider value={{cartItems,buyNowItem,dispatcherEvents}}>
    <Header/>
    <ScrollToTop/>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/products" element={<Products/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
     <Route path="/buynow" element={<Buynow/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </appContext.Provider>
    </BrowserRouter>
  );
}

export default App;
