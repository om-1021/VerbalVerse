import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Verbal Verse</div>
      <div className={styles.text}>
        Verbal Verse creative thoughts agency &copy; All rights reserved
      </div>
    </div>
  );
};

export default Footer;
