import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Services.module.css";
const Services = () => {
  return (
    <div className={styles.services}>
      <Header />

      <div className={styles.content}>
          <h1>Xidmətlərimiz</h1>
          <p>
            111 Rent A Car şirkəti sizlərə aşağıdakı xidmətləri təklif edir
          </p>
          <ol>
            <li>Gəlin maşını xidməti.</li>
            <li>Hava limanında qarşılama.</li>
            <li>Hava limanında yola salma.</li>
            <li>Sürücü ilə avtomobil icarəsi.</li>
            <li>İstənilən ünvanda avtomobil təhvil verilməsi.</li>
            <li>İstənilən ünvandan avtomobilin təhvil alınması.</li>
          </ol>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
