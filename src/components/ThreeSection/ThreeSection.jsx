import React from "react";
import styles from "./ThreeSection.module.css";
import { FaCar } from "react-icons/fa";
import { RiContractFill } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const ThreeSection = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.oneText}>
        <span>
          Sadələşdirilmiş <br />
          <span className={styles.rented}>avtomobil icarəsi</span>
        </span>
      </div>
      <div className={styles.twoText}>
        <div className={styles.card}>
          <a className={styles.car} href="">
            <FaCar />
          </a>
          <div className={styles.cardText}>
            <h2>Avtomobil Seçin</h2>
            <p>İcarəyə götürmək istədiyiniz avtomobili seçin.</p>
          </div>
        </div>
        <div className={styles.card}>
          <a className={styles.contract} href="">
            <RiContractFill />
          </a>
          <div className={styles.cardText}>
            <h2>Müqavilə imzalayın</h2>
            <p>Sənədləri təqdim edərək müqavilə imzalayın.</p>
          </div>
        </div>
        <div className={styles.card}>
          <a className={styles.payment} href="">
            <FaRegMoneyBillAlt />
          </a>
          <div className={styles.cardText}>
            <h2>Ödəniş edin</h2>
            <p>Ödəniş etdikdən sonra atvomobili təhvil alın</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSection;
