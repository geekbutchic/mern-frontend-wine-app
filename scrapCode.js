// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import WinesByRegion from "./pages/WinesByRegion";
// import SignInPage from "./pages/SignInPage";
// import CartPage from "./pages/CartPage";
// import HomeScreen from "./pages/HomeScreen";
// import "./App.css";

// const App = () => {
//   //USER STATE
//   const userInitialState = undefined;
//   const [user, setUser] = useState(userInitialState); // USER LOGGED IN ? Y : N

//   const signIn = (userData) => {
//     setUser(userData);
//   };

//   const signOut = () => {
//     setUser(userInitialState);
//   };

//   //SHOPPING CART STATE
//   const shoppingCartState = [];
//   const [shoppingCart, setShoppingCart] = useState(shoppingCartState);
//   console.log(`SHOPPING CART STATE: `, shoppingCartState);
//   // EMPTY ARRAY ? [] ITEMS : NO ITEMS

//   //FINDING ITEMS BY ID
//   //WHAT'S IN THE SHOPPING CART HAS SAME ID AS NEW PRODUCT // CART ITEMS ? [ITEM] : UNDEFINED
//   //IF PRODUCT FOUND - MAKE COPY OF ARRAY - AND RETURN ARRAY WITH UPDATED SHOPPING CART
//   const addToCart = (productData) => {
//     const productFound = shoppingCart.find(
//       (cartItem) => cartItem.id === productData.id
//     );

//     if (productFound) {
//       const newShoppingCart = shoppingCart.map((cartItem) => {
//         if (cartItem.id === productFound.id) {
//           const newItemQuantity = cartItem.quantity + 1;
//           return {
//             ...cartItem,
//             quantity: newItemQuantity,
//             total: newItemQuantity * cartItem.price
//           };
//         }
//         return cartItem;
//       });
//       setShoppingCart(newShoppingCart);
//     } else {
//       const newCartItem = {
//         ...productData,
//         quantity: 1,
//         total: productData.price
//       };
//       setShoppingCart([...shoppingCart, newCartItem]);
//     }
//   };

//   const removeItemFromCart = (productId) => {
//     setShoppingCart(
//       shoppingCart.filter((cartItem) => cartItem.id !== productId)
//     );
//   };

//   const emptyCart = () => {
//     setShoppingCart(shoppingCartState);
//   };

//   console.log(`USER STATE: `, user);
//   console.log(`SHOPPING CART: `, shoppingCart);

//   return (
//     <Routes>
//       <Route path="/" element={<HomeScreen addToCart={addToCart} />} />
//       <Route path="/wines-by-region" element={<WinesByRegion />} />
//       <Route
//         path="/sign-in"
//         element={<SignInPage user={user} signIn={signIn} signOut={signOut} />}
//       />
//       <Route
//         path="/cart"
//         element={
//           <CartPage
//             shoppingCart={shoppingCart}
//             addToCart={addToCart}
//             removeItemFromCart={removeItemFromCart}
//             emptyCart={emptyCart}
//           />
//         }
//       />
//     </Routes>
//   );
// };

// export default App;
// PRE CONTEXT HOOK CODE

// USER REDUCER WITH IF STATEMENT
// const reducer = (state, action) => {
//   //LOGIC FOR STATE CHANGE RESIDES IN HERE
//   if (action.type === "signIn") {
//     return { ...action.payload.userData };
//   }
//   if (action.type === "signOut") {
//     return undefined;
//   }
// };
