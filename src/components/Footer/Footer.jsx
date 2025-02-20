import React from "react";
import styles from "./Footer.module.css";
import logo from "../../pages/photo/logo.png";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigation = useNavigate();

  const goHome = () => {
    navigation("/");
  };

  const goServices = () => {
    navigation("/services");
  };

  const goRules = () => {
    navigation("/rules");
  };

  const goAbout = () => {
    navigation("/aboutus");
  };
  const goFaq = () => {
    navigation("/faq");
  };

  const goContact = () => {
    navigation("/contact");
  };
  return (
    <div className={styles.Container}>
      <div className={styles.OneFoot}>
        <div className={styles.logo}>
          <div className={styles.image}>
          <a onClick={() => navigation("/")} href="">111 Rent A Car</a>
          </div>
          <p>Günlük və saatlıq avtomobil icarəsi üçün xidmətinizdəyik</p>
        </div>

        <div className={styles.company}>
          <h4>Şirkət</h4>
          <a onClick={goAbout} href="">
            Şirkət haqqında
          </a>
          <a onClick={goServices} href="">
            Xidmətlər
          </a>
          <a onClick={goRules} href="">
            İcarə şərtləri
          </a>
        </div>
        <div className={styles.support}>
          <h4>Dəstək</h4>
          {/* <a href="">Məlumat mərkəzi</a> */}
          <a onClick={goFaq} href="">
            Sual-cavab
          </a>
          <a onClick={goContact} href="">
            Əlaqə
          </a>
        </div>
      </div>
      <div className={styles.TwoText}>
        <div className={styles.about}>
          <span>
            © 111 Rent A Car, 2025. Created by{" "}
            <a href="https://www.instagram.com/faridabbasof/" target="_blank">
              Farid Abbasov
            </a>
          </span>
        </div>

        <div className={styles.icon}>
          <a className={styles.inst} href="https://www.instagram.com/faridabbasof/"target="_blank">
            <FaInstagram />
          </a>
          <a
            className={styles.mail}
            href="mailto:faridra-sp102@code.edu.az?subject=Sorğu&body=Salam Farid, mən sizinlə əlaqə saxlamaq istəyirəm."
          >
            <IoMdMail />
          </a>

          <a
            className={styles.facebook}
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61573146687679"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
