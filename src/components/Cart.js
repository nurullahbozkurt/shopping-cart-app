import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../context";

function Cart() {
  const { state, removeFromCart, reduce, increase, totalPrice } =
    useContext(BooksContext);

  return (
    <div className="content">
      <h2 className="menu">
        <Link to="/">Books Lists</Link>
        <span>
          My Cart <span className="count">{state.cart.length}</span>{" "}
          <span> Cart Price : {totalPrice.toFixed(2)}€ </span>
        </span>
      </h2>
      {state.cart.map((cartItem, index) => (
        <div key={index} className="books">
          <img className="book-img" src={cartItem.image} alt=""></img>
          <div className="book-info">
            <h4>
              <span className="item">{cartItem.name}</span>
            </h4>
            <p>
              <span className="item">{cartItem.author}</span>
            </p>
            <p>
              Price: <span className="item">{cartItem.price}</span>€
            </p>
            <p>
              Total Price:
              <span className="item">
                {(cartItem.price * cartItem.count).toFixed(2)}
              </span>
              €
            </p>
            <p>
              Cart: <span className="item">{cartItem.count}</span> count
            </p>
            <button onClick={() => reduce(cartItem)}>-</button>
            <button onClick={() => removeFromCart(cartItem)} className="button">
              Remove from cart
            </button>
            <button onClick={() => increase(cartItem)}>+</button>
          </div>
        </div>
      ))}
      {/* <div className="books">
        <img className="book-img" src="img/book.jpeg" alt=""></img>
        <div className="book-info">
          <h4>Books Name</h4>
          <p>Writter:M.Kemal Atatürk</p>
          <p>Price:100₺</p>
          <p>Total Price:100₺</p>
          <p>Sepette toplam 1 adet var</p>
          <button>-</button>
          <button className="button">Sepetten Çıkar</button>
          <button>+</button>
        </div>
      </div> */}
    </div>
  );
}

export default Cart;
