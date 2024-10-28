import Cart from "./Components/Cart";
import ShoppingCart from "./Components/ShoppingCart";
import { ShopContextProvider } from "./Context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <div className="main">
          <div className="container">
            <div className="content">
              <Cart />
              <ShoppingCart />
            </div>
          </div>
        </div>
      </ShopContextProvider>
    </div>
  );
}

export default App;
