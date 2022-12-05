import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { shoppingCartContext } from "../context/shoppingCartContext";
import Layout from "../components/Layout";

const CartPage = () => {
  const { shoppingCart, removeItemFromCart, emptyCart } =
    useContext(shoppingCartContext);

  return (
    <Layout>
      {shoppingCart.map((cartItem) => {
        return (
          <div
            class="grid grid-cols-2 ml-20 mr-20 mt-20 mb-20 font-serif text-center"
            key={cartItem.id}
          >
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={cartItem.img}
                alt="wine"
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-bold mb-2">
                  {cartItem.year} {cartItem.title}
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  {cartItem.region} {cartItem.flag}
                </p>
                <p className="text-gray-900 text-base mb-4 font-bold">
                  Price : €{(cartItem.price / 100).toFixed(2)}
                </p>
                <p className="text-gray-900 text-base mb-2 font-medium">
                  Quantity : {cartItem.quantity}
                </p>
                <div>
                  <div class="flex space-x-2 mt-14">
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block px-6 py-2.5 bg-#dc2626-500 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:ring-0 active:bg-red-500 active:shadow-xl transition duration-150 ease-in-out px-8 border hover:text-white"
                      onClick={() => removeItemFromCart(cartItem.id)}
                    >
                      REMOVE ITEMS FROM CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center fixed top-44 mr-60 right-10 ml-28">
              <div class="block rounded-lg shadow-lg bg-white  text-center">
                <div class="py-3 px-6 border-b border-gray-300 font-bold">
                  SHOPPING CART
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Cart Total
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Price : <i class="fa-solid fa-euro-sign"></i> 962
                  </p>
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out mt-20"
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center fixed top-44 right-10 top-44">
              <Link to="/">
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:ring-0 active:bg-green-600 active:shadow-xl transition duration-150 ease-in-out px-8 border hover:text-white"
                >
                  <i class="fa-solid fa-arrow-left"></i> CONTINUE SHOPPING
                </button>
              </Link>
              <div className="flex justify-center fixed top-64 right-10 top-44">
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:ring-0 active:bg-red-500 active:shadow-xl transition duration-150 ease-in-out px-8 border hover:text-white"
                  onClick={emptyCart}
                >
                  CLEAR CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default CartPage;
