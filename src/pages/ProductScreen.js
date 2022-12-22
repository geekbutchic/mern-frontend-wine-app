import React from "react";
import { useContext } from "react";
import { shoppingCartContext } from "../context/shoppingCartContext";

const ProductScreen = (props) => {

  const { addToCart } = useContext(shoppingCartContext);

  const { productData } = props;

  const onAddToCart = () => {
    addToCart(productData);
  };

  return (
    <div className="grid grid-cols-2">
      <img
        className="w-full ease-in-out duration-300..."
        src={productData.img}
        alt="wine"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-6 font-serif">
          {productData.year} {productData.title}
        </div>
        <div className="text-black text-base font-serif">
          <p>{productData.info}</p>
        </div>
        <div className="font-medium py-4 font-serif">
          <p className="font-bold">
            Region : {productData.region} {productData.flag}
          </p>
        </div>
        <div className="font-serif">
          <p className="font-bold">Count in Stock: {productData.count}</p>
          <p className="font-bold">
            Price : € {(productData.price / 100).toFixed(2)}
          </p>
        </div>
        <div className="ripple bg-red-700 px-4 py-2 mt-6 w-3/12 text-center text-white rounded-md shadow shadow-red-600/50 hover:bg-red-600 active:scale-95 relative transition after:content-[' '] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-red-600 after:rounded-md after:-z-10 after:transition after:duration-500 hover:after:scale-150 hover:after:opacity-0 cursor:pointer">
          <button-2
          type="button" 
          onClick={onAddToCart}>Add To Cart</button-2>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
