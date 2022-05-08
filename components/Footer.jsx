import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE CHENNAI PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            2046 L. Tamabaram Road
            <br /> Chennai, 600140
            <br /> (+91) 9025795814
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> Chennai, 600125
            <br /> (+91)8207753918
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> Chennai, 600123
            <br /> (+91) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> Mumbai, 850211
            <br /> (+91) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
