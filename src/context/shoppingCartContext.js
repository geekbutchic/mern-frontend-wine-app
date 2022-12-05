import React, { createContext, useState } from "react";

export const shoppingCartContext = createContext();

const ShoppingCartContextProvider = (props) => {
  const { children } = props;
  //SHOPPING CART STATE
  const shoppingCartState = [];
  const [shoppingCart, setShoppingCart] = useState(shoppingCartState);
  console.log(`SHOPPING CART STATE: `, shoppingCartState);
  // EMPTY ARRAY ? [] ITEMS : NO ITEMS

  //FINDING ITEMS BY ID
  //WHAT'S IN THE SHOPPING CART HAS SAME ID AS NEW PRODUCT // CART ITEMS ? [ITEM] : UNDEFINED
  //IF PRODUCT FOUND - MAKE COPY OF ARRAY - AND RETURN ARRAY WITH UPDATED SHOPPING CART
  const addToCart = (productData) => {
    const productFound = shoppingCart.find(
      (cartItem) => cartItem.id === productData.id
    );

    if (productFound) {
      const newShoppingCart = shoppingCart.map((cartItem) => {
        if (cartItem.id === productFound.id) {
          const newItemQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newItemQuantity,
            total: newItemQuantity * cartItem.price
          };
        }
        return cartItem;
      });
      setShoppingCart(newShoppingCart);
    } else {
      const newCartItem = {
        ...productData,
        quantity: 1,
        total: productData.price
      };
      setShoppingCart([...shoppingCart, newCartItem]);
    }
  };

  const removeItemFromCart = (productId) => {
    setShoppingCart(
      shoppingCart.filter((cartItem) => cartItem.id !== productId)
    );
  };

  const emptyCart = () => {
    setShoppingCart(shoppingCartState);
  };

  console.log(`SHOPPING CART: `, shoppingCart);

  return (
    <shoppingCartContext.Provider
      value={{ shoppingCart, addToCart, removeItemFromCart, emptyCart }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
