import React from "react";
import styles from "./FourSection.module.css";
const FourSection = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.image}>
        <img src="https://cdn.worldvectorlogo.com/logos/bmw-7.svg" alt="Bmw" />
      </div>
      <div className={styles.image}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/logo-porsche2.svg"
          alt="Porsche"
        />
      </div>
      <div className={styles.image}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg"
          alt="Mercedes"
        />
      </div>
      <div className={styles.image}>
        <img
          src="https://imgs.search.brave.com/QwC_EbgWUnhmLWVL36kyWK629yfWd9I6_a2bV-vQeZU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjIvTGV4/dXMtTG9nby1QTkct/UGhvdG8ucG5n"
          alt="Lexus"
        />
      </div>
      <div className={styles.image}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/land-rover-2.svg"
          alt="Land Rover"
        />
      </div>
      <div className={styles.image}>
        <img src="https://cdn.worldvectorlogo.com/logos/kia-4.svg" alt="Kia" />
      </div>
    </div>
  );
};

export default FourSection;
