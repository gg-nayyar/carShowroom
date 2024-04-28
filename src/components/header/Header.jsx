import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
        <a style={{marginLeft: '20px',fontSize: '30px', marginRight:'auto'}} rel='stylesheet' href=''>CarBarn</a>
        <a rel="stylesheet" href="">Car1</a>
        <a rel="stylesheet" href="">Car2</a>
        <a rel="stylesheet" href="">Car3</a>
        <a rel="stylesheet" href="">About Us</a>
    </div>
    )
}
export default Header;
