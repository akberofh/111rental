import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios"; 
import styles from './TwoSection.module.css';
import { FaManatSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const TwoSection = () => {
  const [cars, setCars] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5500/product");
        setCars(response.data); 
      } catch (error) {
        console.error("Xəta baş verdi:", error.message);
      }
    };
    fetchCars();
  }, []);

  const displayedCars = cars.slice(0, 4);

  return (
    <div className={styles.Contain}>
      <div className={styles.text}>
        <h2>Seçilmiş avtomobillər</h2>
        <a onClick={() => navigation("/cars")}  href="">
          Hamısını göstər <FaArrowRight />
        </a>
      </div>

      <div className={styles.cardsContainer}>
        {displayedCars.map((car) => (
          <div key={car._id} className={styles.card}>
            <div className={styles.cardTop}>
              <img src={car.image} alt={car.model} />
            </div>
            <div className={styles.cardBottom}>
              <div className={styles.left}>
                <h3>{car.brand} {car.model}</h3>
              </div>
              <div className={styles.right}>
                <p>{car.year}</p>
              </div>
            </div>
            <div className={styles.detailsRow}>
              <div className={styles.left}>
                <p>{car.capacity} nəfərlik</p>
              </div>
              <div className={styles.left}>
                <p>100km / {car.fuelConsumption}L</p>
              </div>
              <div className={styles.right}>
                <p>{car.fuelType}</p>
              </div>
              <div className={styles.right}>
                <p>{car.transmission}</p>
              </div>
            </div>
            <div className={styles.bottomRow}>
              <div className={styles.left}>
                <p>{car.pricePerDay} <FaManatSign /> / günlük</p>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoSection;
