import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import { userContext } from "../context/userContext";
import { shoppingCartContext } from "../context/shoppingCartContext";
//REDUX IMPORT
import { useSelector } from "react-redux";

const Header = () => {
  //USE CONTEXT VERSION
  // const { user } = useContext(userContext);

  //USER REDUX VERSION
  const user = useSelector((state) => state.user);

  const { shoppingCart } = useContext(shoppingCartContext);

  const cartCount = shoppingCart.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-red-700 p-8">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 text-white mr-14">
            <span className="font-semibold text-xl tracking-tight font-serif">
              <i className="fa-solid fa-wine-bottle"></i> POESIA IN BOTTIGLIA
            </span>
          </div>
        </Link>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow text-white font-serif">
            <Link to="/wines-by-region">Wines By Region</Link>
          </div>
          <div className="inline-block px-4 py-2">
            {user ? (
              <h4>
                Welcome Back : {user.firstName} {user.lastName}
              </h4>
            ) : null}
          </div>
          <div>
            <Link
              to="/sign-in"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-700 hover:bg-white mt-4 lg:mt-0 mr-4 font-serif"
            >
              Login
            </Link>
          </div>
          <div>
            <Link
              to="/cart"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-700 hover:bg-white mt-4 lg:mt-0"
            >
              <i className="fa-brands fa-opencart"></i>
              <span class="absolute right-0 top-0 rounded-full bg-orange-400 w-6 h-6 top right p-1 m-2 text-white font-mono text-sm  leading-tight text-center">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
