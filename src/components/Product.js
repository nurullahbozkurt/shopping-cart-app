import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import { BooksContext } from "../context";

function Product() {
  const { addToCart, state, totalPrice } = useContext(BooksContext);

  return (
    <div className="content">
      <h2 className="menu">
        <span>Books Lists</span>
        <Link to="/Cart">
          My Cart <span className="count">{state.cart.length}</span>{" "}
          <span> Cart Price : {totalPrice.toFixed(2)}€ </span>
        </Link>
      </h2>
      {state.bookList.map((book, i) => (
        <div key={i} className="books">
          <img className="book-img" src={book.image} alt=""></img>
          <div className="book-info">
            <h4>{book.name}</h4>
            <p>Writter:{book.author}</p>
            <p>Price:{book.price}</p>
            <button onClick={() => addToCart(book)} className="button">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
