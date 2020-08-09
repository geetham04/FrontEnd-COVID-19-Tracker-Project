// importing libraries
import React from "react";
import Timer from '../Timer/timer';
import styles from './header.module.css';
//import HighlightIcon from "@material-ui/icons/Highlight";

// Header() function return current time within a styled container
function Header() {
  return (
    
    <nav className={styles.container}> 
    <header class="topbanner text-right mx-xl-5 d-flex align-items-center justify-content-end">
      <h3>
      <Timer />
      </h3>
    </header>
    </nav> 
  );
}

export default Header;


