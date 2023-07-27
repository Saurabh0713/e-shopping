import React,{useContext, useState} from 'react'
import appContext from '../context'
import payImg from '../img/pay.png'

export default function Buynow() {

    const {buyNowItem} = useContext(appContext)
    let [paymentMode,setPaymentMode] = useState(null)

    function paymentModeSelected(e){
        console.log(e.target.value)
        setPaymentMode(e.target.value)
    }

  return (
    <div className='py-14 min-h-screen w-full bg-gradient-to-b from-green-600 to-zinc-600 flex items-center justify-center flex-col'>
        {buyNowItem.length>0 &&  <>
        <h1 className='w-3/4 sm:w-1/2 text-2xl text-white m-4'>Selected Item</h1>
        <div className="m-1 md:m-2 p-1 md:p-2 w-3/4 sm:w-1/2 sm:h-40 flex items-center justify-evenly bg-neutral-100">
      <div className="w-20 md:w-2/5 flex items-center justify-center">
        <img
          className="w-16 md:w-32 h-16 md:h-32"
          src={buyNowItem[0].thumbnail}
          alt="product"
        ></img>
      </div>
      <div className="w-1/3 sm:w-2/5 text-xs sm:text-base  p-2">
        <h3>{buyNowItem[0].brand}</h3>
        <h3 className="my-1">{buyNowItem[0].title}</h3>
        <b>Amount to pay: ${buyNowItem[0].price}</b>
      </div>
           
    </div> 
    </>
}
{buyNowItem.length>0 && 
 <>
    <h2 className='bg-neutral-300 w-3/4 sm:w-1/2 p-1 px-2'>Select Payment Mode</h2>
    <div className="m-1 md:m-2 mt-0 md:mt-0 p-1 md:p-2 w-3/4 sm:w-1/2 sm:h-40 flex items-center justify-evenly bg-neutral-200">
    <div className="w-20 md:w-2/5 flex items-center justify-center">
        <img
          className="w-16 md:w-32 h-16 md:h-32"
          src={payImg}
          alt="product"
        ></img>
      </div>
    <form className='flex flex-col' onSubmit={e=>{e.preventDefault();if(paymentMode===null){alert("Please select a Payment Mode")}}}>
       <div>
       <input className='m-1' type='radio' name='payment' value="CreditCard" id='creditcard' onClick={paymentModeSelected}></input>
        <label className='m-1' for="creditcard">Credit Card</label>
       </div>
       <div>
        <input className='m-1' type='radio' name='payment' value="UPI" id='upi' onClick={paymentModeSelected}></input>
        <label className='m-1' for="upi">UPI</label>
       </div>
       <div>
        <input className='m-1' type='radio' name='payment' value="COD" id='cod' onClick={paymentModeSelected}></input>
        <label className='m-1' for="cod">COD</label>
       </div>
       <button
              className="p-2 mx-1 my-3 text-sm md:text-base font-bold bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded">
              Pay Now
            </button>
    </form>
    </div>
    </>
    }
    </div>
  )
}
