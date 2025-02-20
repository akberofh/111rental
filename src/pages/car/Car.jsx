import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Car.module.css";
import Header from "../../components/Header/Header";
import { FaManatSign } from "react-icons/fa6";

const Car = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5500/product/${id}`);
        if (data.length > 0) {
          setCar(data[0]);
        }
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };

    fetchCar();
  }, [id]);

  

  if (!car) return <p>Yüklənir...</p>;

  const handleOrderClick = () => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("firstname");
    const surname = formData.get("lastname");
    const phoneNumber = formData.get("phone");
    const age = formData.get("age");
    const days = formData.get("days");
    const date = formData.get("pickupDate");

    const data = {
      name,
      surname,
      phoneNumber,
      age,
      days,
      date,
    };

    try {
      await axios.post("http://localhost:5500/reservation", data);
      e.target.reset();
      navigate("/payment");
    } catch (error) {
      console.error("Error during reservation:", error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.main}>
        <div>
          <h1>
            {car.brand} {car.model}
          </h1>
        </div>

        <div className={styles.Contain}>
          <div className={styles.detailImage}>
            <div>
              <img src={car.image} alt={car.brand} />
            </div>
          </div>

          <div className={styles.detailText}>
            <div>
              <span>
                {car.pricePerDay}
                <FaManatSign />/ Günlük
              </span>
              <button onClick={handleOrderClick}>Sifariş et</button>
            </div>
            <span>ÖZƏLLİKLƏR</span>

            <div className={styles.detailst}>
              <ul>
                <li>
                  <span>Mühərrik</span>
                  <span>{car.engine}sm³</span>
                </li>
                <li>
                  <span>Buraxılış ili</span>
                  <span>{car.year}</span>
                </li>
                <li>
                  <span>Rəngi</span>
                  <span>{car.color}</span>
                </li>
              </ul>
            </div>

            <div className={styles.detailList}>
              <ul>
                <li>{car.capacity} nəfərlik</li>
                <li>{car.fuelConsumption} L / 100km</li>
                <li>{car.transmission}</li>
                <li>{car.fuelType}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <h2>Sifariş ver</h2>
        <button onClick={handleCloseModal} className={styles.closeButton}>
          X
        </button>
      </div>
      {loading ? (
        <div className={styles.loadingContainer}>
          <p>Yüklənir...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.orderForm}>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="firstName">Ad</label>
              <input type="text" id="firstName" name="firstname" required />
            </div>
            <div>
              <label htmlFor="lastName">Soyad</label>
              <input type="text" id="lastName" name="lastname" required />
            </div>
          </div>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="phone">Mobil nömrə</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <label htmlFor="age">Yaş</label>
              <input type="number" id="age" name="age" required />
            </div>
          </div>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="days">Neçə günlük?</label>
              <input type="number" id="days" name="days" required />
            </div>
            <div>
              <label htmlFor="pickupDate">Götürmə tarixi</label>
              <input type="date" id="pickupDate" name="pickupDate" required />
            </div>
          </div>
          <div className={styles.formRow}>
            <button type="submit">Sifariş et</button>
          </div>
        </form>
      )}
    </div>
  </div>
)}
    </div>
  );
};

export default Car;
