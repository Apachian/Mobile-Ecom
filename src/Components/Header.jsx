import { useState, useEffect } from "react";
import Model from "./UI/Model";
import Cart from "./Cart";
import styles from "./Header.module.css";
import Container from "./UI/Container";
import { BsCart } from "react-icons/bs";
import { useCart } from "../Contexts/CartProvider";

function Header() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const [isModelOpen, setIsModelOpen] = useState(false);
  function closeModel() {
    setIsModelOpen(false);
  }

  useEffect(() => {
    if (isModelOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModelOpen]);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>ARC Shop</h1>
          <button
            className={styles.showCartBtn}
            onClick={() => {
              setIsModelOpen(true);
            }}
          >
            <span className={styles.cartIconandNumber}>
              <BsCart />
              {totalQuantity > 0 && (
                <span className={styles.number}>{totalQuantity}</span>
              )}
            </span>
            <span>cart</span>
          </button>
        </nav>
      </Container>

      {isModelOpen && (
        <Model closeModel={closeModel}>
          <Cart />
        </Model>
      )}
    </header>
  );
}

export default Header;

