import React, { useState } from "react";
import styles from "./Header.module.css";
import img from "../../pages/photo/logo.png";
import Drawer from "react-modern-drawer";
import { BiMenuAltRight } from "react-icons/bi";
import { FiUser, FiSun, FiMoon, FiHeart } from "react-icons/fi";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("dark-mode") == null ? false : localStorage.getItem("dark-mode"));
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { user, loading } = useAuth();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    const tempV = !isDarkMode;

    setIsDarkMode(tempV);
/*     document.body.classList.toggle("dark-mode"); */
  const rootElement = document.getElementById("root");
    if (tempV) {
      rootElement.setAttribute("data-theme", "dark");
    } else {
      rootElement.removeAttribute("data-theme");
    }
  };

  return (
    <div className={styles.Contain}>
      <div className={styles.navLogo}>
        <a onClick={() => navigation("/")} href="">111 Rent A Car</a>
      </div>

      <div className={styles.navbar}>
        <ul>
          <a onClick={() => navigation("/cars")} href="">Avto Park</a>
          <a onClick={() => navigation("/services")} href="">
            Xidmətlər
          </a>
          <a onClick={() => navigation("/rules")} href="">
            İcarə şərtləri
          </a>
          <a onClick={() => navigation("/faq")} href="">
            Sual-cavab
          </a>
          <a onClick={() => navigation("/aboutus")} href="">
            Haqqımızda
          </a>
          <a onClick={() => navigation("/contact")} href="">
            Əlaqə
          </a>
        </ul>
      </div>

      <div className={styles.navActions}>
        <div
          className={styles.userIcon}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <FiUser size={24} />
          {isUserMenuOpen && (user ? (
            <div className={styles.userMenu}>
              <a onClick={async () => {
                await supabase.auth.signOut();
              }}>Sign out</a>
            </div>
          ) : (
            <div className={styles.userMenu}>
              <a href="/login">Sign in</a>
              <a href="/register">Sign up</a>
            </div>
          ))}
        </div>

        <div className={styles.themeToggle} onClick={toggleDarkMode}>
          {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </div>

        <div className={styles.wishlist}>
          <FiHeart onClick={() => navigation("/wishlist")} size={24} />
        </div>

        <div className={styles.menu}>
          <button onClick={toggleDrawer}>
            <BiMenuAltRight size={35} />
          </button>
          <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
            <div className={styles.Menu}>
              <div className={styles.themeToggleTwo} onClick={toggleDarkMode}>
                {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
              </div>
              <div className={styles.menuBar}>
                <ul>
                  <a onClick={() => navigation("/cars")} href="">Avto Park</a>
                  <a onClick={() => navigation("/services")} href="">
                    Xidmətlər
                  </a>
                  <a onClick={() => navigation("/rules")} href="">
                    İcarə şərtləri
                  </a>
                  <a onClick={() => navigation("/faq")} href="">
                    Sual-cavab
                  </a>
                  <a onClick={() => navigation("/aboutus")} href="">
                    Haqqımızda
                  </a>
                  <a onClick={() => navigation("/contact")} href="">
                    Əlaqə
                  </a>
                </ul>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
