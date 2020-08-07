import React from "react";
import styles from './footer.module.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <p>Copyright ⓒ {year} Geetha Chittuluri @ Portland State University.</p>
    </footer>
  );
}

export default Footer;
