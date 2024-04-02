import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/contact.png"
          alt="contact page image"
          fill
        ></Image>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <input type="text" placeholder="Full Name"></input>
          <input type="text" placeholder="Email Address"></input>
          <input type="text" placeholder="Phone Number (Optional)"></input>
          <textarea
            name=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
