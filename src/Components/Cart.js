import React, { useContext, useEffect, useState } from 'react'
import appContext from '../context'
import CartCard from './CartCard'

export default function Cart() {
  const {cartItems} = useContext(appContext)
  const {dispatcherEvents} = useContext(appContext)

  const [totalCartPrice,setCartPrice] = useState(0)
 
function deleteItem(item){
  dispatcherEvents("DELETE_ITEM",item)
}

useEffect(()=>{
  refreshTotalPrice()
},[cartItems.length])

const refreshTotalPrice=()=>{
  let total = cartItems.reduce((sum,value)=>{return sum = sum + value.totalPrice},0)
  setCartPrice(total)
}

  return (
    <div className='py-14 min-h-screen w-full bg-gradient-to-b from-yellow-600 to-zinc-600 flex items-center justify-center flex-col'>
      {
          cartItems.map( element => {
            return <CartCard item={element} delete={deleteItem} refresh={refreshTotalPrice}/>
          })
        }
      { cartItems.length > 0 ? <div className='m-4 p-5 sm:text-lg font-semibold bg-stone-300 w-4/5 flex justify-between items-center'>
          <span>Total Price: ${totalCartPrice} </span>
          <button className='bg-cyan-400 px-2 py-1 hover:bg-cyan-500'>Pay Now</button>
        </div> : <div className='bg-rose-500 text-lg p-10 animate-pulse rounded-xl text-center'>CART IS EMPTY... add items to your Cart</div>
        }
    </div>
  )
}
