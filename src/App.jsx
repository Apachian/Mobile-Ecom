import Products from "./Components/Products";
import CartProvider from "./Contexts/CartProvider";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider >
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        autoClose={600}
        hideProgressBar={true}
      />
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
