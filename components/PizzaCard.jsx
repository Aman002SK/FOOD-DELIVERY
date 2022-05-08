import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>PIZZA TOWN</h1>
      <span className={styles.price}>RS100.90</span>
      <p className={styles.desc}>
      One of the simplest and most traditional pizzas is the Margherita,
      which is topped with tomatoes or tomato sauce, mozzarella, and basil..
      </p>
    </div>
  );
};

export default PizzaCard;
