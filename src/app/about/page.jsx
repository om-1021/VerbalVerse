import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}> About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Verbal Verse is a vibrant online hub where writers and readers unite
          to explore creativity's boundless realms. Unleash your literary
          passion through captivating stories and thought-provoking ideas that
          inspire.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>No. of Writers</p>
          </div>
          <div className={styles.box}>
            <h1>13 K+</h1>
            <p>No. of Readers/Day</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Posts Everyday</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="about image"
          fill
          className={styles.img}
        ></Image>
      </div>
    </div>
  );
};

export default AboutPage;
