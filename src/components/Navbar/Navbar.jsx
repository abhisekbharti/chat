import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true); // Set logged in to true
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged out to false
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">Hello! my chatting</a>
      </div>
      <ul className={styles.nav_links}>
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <button onClick={handleLogin}>Login/Signup</button>
          )}
        </li>
        <li>
          <a href="./login">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
