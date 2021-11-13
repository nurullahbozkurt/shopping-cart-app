import React, { createContext, useState, useEffect } from "react";
import { data } from "./data";
export const BooksContext = createContext();

function ContextProvider(props) {
  const [state, setState] = useState({
    bookList: data,
    cart: [],
  });

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("state"));
    setState({ ...state, cart: item });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state.cart));
  }, [state]);

  const totalPrice = state.cart.reduce(
    (total, book) => (total = total + book.price * book.count),
    0
  );
  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((item) => item.id === book.id)
        ? state.cart.map((item) =>
            item.id === book.id ? { ...item, count: item.count + 1 } : item
          )
        : [...state.cart, { ...book, count: +1 }],
    });
  };

  const removeFromCart = (cartItem) => {
    const newObj = state.cart.filter((item) => item.id !== cartItem.id);
    setState({
      ...state,
      cart: newObj,
    });
  };

  const reduce = (cartItem) => {
    setState({
      ...state,
      cart: state.cart.map((item) =>
        item.id === cartItem.id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          : item
      ),
    });
  };

  const increase = (cartItem) => {
    setState({
      ...state,
      cart: state.cart.map((item) =>
        item.id === cartItem.id ? { ...item, count: item.count + 1 } : item
      ),
    });
  };

  return (
    <BooksContext.Provider
      value={{
        data,
        state,
        addToCart,
        removeFromCart,
        reduce,
        increase,
        totalPrice,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
}

export default ContextProvider;

// ...state,
// cart: state.cart.find((cartItem) => cartItem.id === book.id)
//   ? state.cart.map((cartItem) =>
//       cartItem.id === book.id
//         ? { ...cartItem, count: cartItem.count + 1 }
//         : cartItem
//     )
//   : [...state.cart, { ...book, count: 1 }],

// ...state,
// cart: state.cart.find((item) => item.id === book.id)
//   ? state.cart.map((item) =>
//       item.id === book.id ? { ...item, count: item.count + 1 } : item
//     )
//   : [...state.cart, { ...book, count: +1 }],
