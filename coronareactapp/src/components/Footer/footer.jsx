// importing libraries
import React from "react";
import styles from './footer.module.css';

// Footer() function returns copyright information
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <p>Copyright ⓒ {year} Geetha Chittuluri @ Portland State University.</p>
    </footer>
  );
}

export default Footer;
