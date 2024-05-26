import React from "react";
import { useCart } from "../Contexts/CartProvider";
import styles from "./CartItem.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function CartItem({ id, price, img, title, quantity }) {
  const { increaseQty, decreaseQty, removeItemFromCart } = useCart();
  return (
    <div className={styles.cartItem}>
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}>
          <img src={img} alt={title} className={styles.cartImg} />
        </div>
        <h3>{title}</h3>
      </div>

      {/* right */}
      <div className={styles.othersControl}>
        <div className={styles.qtyInput}>
          <button
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              decreaseQty(id);
            }}
          >
            <FaMinus />
          </button>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <button
            onClick={() => {
              increaseQty(id);
            }}
          >
            <FaPlus />
          </button>
        </div>
        <p> &#8377;{price * quantity}</p>
        <button
          className={styles.removeItemBtn}
          onClick={() => {
            removeItemFromCart(id);
          }}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
