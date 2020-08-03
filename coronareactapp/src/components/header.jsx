import React from "react";
import styles from './header.module.css';

function Header() {
    const date = new Date();
    const hour = date.getHours();
  return (
    <header className={styles.container}>
      <h2>{
                hour>=12 ? hour>=16 ? 
                <h2>Good Evening, Welcome to Coronavirus tracking application</h2> : <h2>Good Afternoon, Welcome to Coronavirus tracking application</h2> : <h2>Good Morning, Welcome to Coronavirus tracking application</h2>
          }
      </h2>
    </header>
  );
}

export default Header;