import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import appContext from "../context";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const {dispatcherEvents} = useContext(appContext)

  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setProducts(data);
    });
  }, []);

  function handleAddToCart(item){
    dispatcherEvents("ADD_ITEM",item)
  }

  function handleBuyNow(item){
    dispatcherEvents("BUY_NOW",item)
  }

  return (
    <div className="py-14 w-full h-max min-h-screen bg-gradient-to-b from-blue-900 to-zinc-500 flex flex-col justify-center items-center" id="products">
      {products.products && (
        <div className="w-4/5 px-0 pt-0 bg-gradient-to-b from-zinc-700 to-amber-300/90 flex flex-col justify-center items-center">
          {/* .......................................................................... */}
          <div className="md:w-1/2 w-full m-10 mt-0">
            <img className="w-full" src={products.products[5].thumbnail}></img>
            <div className="bg-neutral-100 w-full p-4">
              <h3 className="md:text-xl p-1">{products.products[5].brand}</h3>
              <h2 className="md:text-2xl text-xl p-1 text-neutral-100 bg-stone-700">{products.products[5].title}</h2>
              <p className="md:text-base text-sm text-slate-900 p-1">{products.products[5].description}</p>
              <p className="md:text-xl text-base p-1 md:m-2">
                Price : ${products.products[5].price}
              </p>
              <Link to="/buynow">
              <button className="md:m-2 m-1 bg-cyan-500 active:bg-cyan-700 text-neutral-100 px-2 py-1 rounded hover:bg-cyan-600" onClick={()=>{handleBuyNow(products.products[5])}}>
                Buy now
              </button>
              </Link>
              <button className="md:m-2 m-1 bg-amber-500 active:bg-amber-700 text-neutral-100 px-2 py-1 rounded hover:bg-amber-600"  onClick={()=>{handleAddToCart(products.products[5])}}>
                Add To Cart
              </button>
              <img
                className="md:w-48 w-28 inline-block"
                src={products.products[5].images[1]}
              ></img>
            </div>
          </div>
          {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
          <div className="w-full flex md:flex-row flex-col m-10">
            <img
              className="md:h-96 md:w-3/5"
              src={products.products[8].thumbnail}
            ></img>
            <div className="bg-neutral-100 md:h-96 h-max p-4">
              <h3 className="md:text-xl text-base p-1">{products.products[8].brand}</h3>
              <h2 className="md:text-2xl text-xl p-1 text-neutral-100 bg-stone-700">
                {products.products[8].title}
              </h2>
              <p className="md:text-base text-sm text-slate-900 p-1">
                {products.products[8].description}
              </p>
              <p className="md:text-xl text-base p-1 md:m-2">
                Price : ${products.products[8].price}
              </p>
              <Link to="/buynow">
              <button className="md:m-2 m-1 bg-cyan-500 active:bg-cyan-700 text-neutral-100 px-2 py-1 rounded hover:bg-cyan-600" onClick={()=>{handleBuyNow(products.products[8])}}>
                Buy now
              </button>
              </Link>
              <button className="md:m-2 m-1 bg-amber-500 active:bg-amber-700 text-neutral-100 px-2 py-1 rounded hover:bg-amber-600"  onClick={()=>{handleAddToCart(products.products[8])}}>
                Add To Cart
              </button>
              <img
                className="w-28 inline-block m-auto"
                src={products.products[8].images[1]}
              ></img>
            </div>
          </div>
{/* ............................................................................. */}
          <div className="w-full flex md:flex-row flex-col m-10">
            <div className="bg-neutral-100 md:h-96 h-max p-4">
              <h3 className="md:text-xl text-base p-1">{products.products[6].brand}</h3>
              <h2 className="md:text-2xl text-xl p-1 text-neutral-100 bg-stone-700">
                {products.products[6].title}
              </h2>
              <p className="md:text-base text-sm text-slate-900 p-1">
                {products.products[6].description}
              </p>
              <p className="md:text-xl text-base p-1 md:m-2">
                Price : ${products.products[6].price}
              </p>
              <Link to="/buynow">
              <button className="md:m-2 m-1 bg-cyan-500 active:bg-cyan-700 text-neutral-100 px-2 py-1 rounded hover:bg-cyan-600" onClick={()=>{handleBuyNow(products.products[6])}}>
                Buy now
              </button>
              </Link>
              <button className="md:m-2 m-1 bg-amber-500 active:bg-amber-700 text-neutral-100 px-2 py-1 rounded hover:bg-amber-600"  onClick={()=>{handleAddToCart(products.products[6])}}>
                Add To Cart
              </button>
              <img
                className="w-28 inline-block m-auto"
                src={products.products[6].images[0]}
              ></img>
            </div>
            <img
              className="md:h-96 md:w-3/5"
              src={products.products[6].thumbnail}
            ></img>
          </div>
          {/* ========================================================== */}

        
          <h2 className="m-6 text-3xl text-white">Our wide range of products</h2>
          <div className="flex flex-wrap justify-center items-center">
          {
          /* {for(i=3;i<products.products.length;i++){}} */
          products.products.map(element => {
            return <ProductCard products={element}/>
          })
        }
          </div>
        </div>
      )}
    </div>
  );
}
