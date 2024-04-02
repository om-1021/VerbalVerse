import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thought Agency </h1>
        <p className={styles.desc}>
          Where creativity blooms, stories thrive. A sanctuary for writers and
          readers alike, Exploring realms of literary delights.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt=""
            fill
            className={styles.brandImage}
          ></Image>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" className={styles.herImg} fill></Image>
      </div>
    </div>
  );
};
export default Home;
