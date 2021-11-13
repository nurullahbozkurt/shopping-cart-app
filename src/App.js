import "./css/style.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="header">
        <h1>BOOKS CART</h1>
      </div>
      <Route exact path="/" component={Product} />
      <Route path="/Cart" component={Cart} />
    </div>
  );
}

export default App;
