import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

// calling context as a hook.
const Context = createContext();

// state context funcitonal components.
// It will handle all the states through out our app.
// passing children props means whenever we call Statecontext, whatever we pass into it(wepping it), it will be considered children and we can render it out.
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  // Hnadling cart items here.
  const onAdd = (product, quantity) => {
    // check if same product is in card, will return true/false
    const checkProductInCart = cartItems.find(
      (items) => items._id === product._id
    );

    // if item already exist in the cart, we will increase price and quantity of cart..
    if (checkProductInCart) {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);

      // Now we update cart items. We will map over the all the items in the cart. then increase the quantity inthe cart.
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      // If item is not in the cart.
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);

      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  //   To set quatity, we will make fuctions.
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    // This means that we will render context provider and wrap it with StateContext.

    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// This will allow us to use our context created i.e; StateContext just as a hook.
export const useStateContext = () => useContext(Context);
