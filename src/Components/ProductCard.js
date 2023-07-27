import React,{useContext} from 'react'
import appContext from '../context'
import { Link } from 'react-router-dom'

export default function ProductCard(products) {
    // console.log(products)

    const {dispatcherEvents} = useContext(appContext)

    function handleAddToCart(){
      dispatcherEvents ("ADD_ITEM",products.products)
    }

    function handleBuyNow(){
      dispatcherEvents("BUY_NOW",products.products)
    }

  return (
    <div className='m-4 w-56 h-max bg-slate-300 text-slate-400 rounded'>
        <div className="h-56 border">
              <h2 className="text-2xl h-10 text-center p-1 text-neutral-100 bg-teal-500">
                { products.products.title}
              </h2>
        <img
              className="h-44 w-full"
              src={products.products.thumbnail}
            ></img>     
        </div>
        <div className="h-40 px-2">
        {/* <h3 className="text-xl p-1">{products.products.brand}</h3> */}
              <p className="text-sm h-20 overflow-hidden text-slate-700 mt-2 p-1">
                {products.products.description}
              </p>
              <p className="text-slate-900 m-1">
                Price : ${products.products.price}
              </p>
              <Link to="/buynow">
              <button className="m-1 bg-cyan-500 active:bg-cyan-700 text-neutral-100 px-2 py-1 rounded hover:bg-cyan-600" onClick={handleBuyNow}>
                Buy now
              </button>
              </Link>
              <button className="m-1 bg-amber-500 active:bg-amber-700 text-neutral-100 px-2 py-1 rounded hover:bg-amber-600" onClick={handleAddToCart}>
                Add to Cart
              </button>
        </div>

    </div>
  )
}
