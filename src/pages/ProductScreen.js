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
          <p className="font-bold">Price : € {(productData.price / 100).toFixed(2)}</p>
        </div>
        <div className=" font-serif bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded mt-6 w-3/12">
          <button onClick={onAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
