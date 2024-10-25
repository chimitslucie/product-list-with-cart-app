import Cart from "./Components/Cart";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <div className="content">
            <Cart />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
