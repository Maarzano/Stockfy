import AppRoutes from "./Routes";
import { CartProvider } from "./Context/Cart";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <CartProvider>
        <AppRoutes/>
      </CartProvider>
    </HashRouter>
  );
}

export default App;
