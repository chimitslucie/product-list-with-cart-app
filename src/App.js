import Cart from "./Components/Cart";
import Basket from "./Components/Basket";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <div className="content">
            <Cart />
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
