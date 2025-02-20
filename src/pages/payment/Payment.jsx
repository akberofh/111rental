import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Ödəniş uğurla həyata keçirildi!");
      navigate("/cars");
    }, 2000);
  };

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentBox}>
        <h2 className={styles.paymentTitle}>Bank Ödənişi</h2>
        <form onSubmit={handlePayment}>
          <div>
            <label className={styles.paymentLabel}>Kart Nömrəsi</label>
            <input
              type="text"
              maxLength="16"
              className={styles.paymentInput}
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/, ""))}
              required
            />
          </div>

          <div className={styles.paymentRow}>
            <div>
              <label className={styles.paymentLabel}>Bitmə Tarixi</label>
              <input
                type="text"
                maxLength="5"
                className={styles.shortInput}
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
            </div>

            <div>
              <label className={styles.paymentLabel}>CVV</label>
              <input
                type="text"
                maxLength="3"
                className={styles.shortInput}
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/, ""))}
                required
              />
            </div>
          </div>

          <div>
            <label className={styles.paymentLabel}>Kart Sahibinin Adı</label>
            <input
              type="text"
              className={styles.paymentInput}
              placeholder="Ad Soyad"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.paymentButton}
            disabled={loading}
          >
            {loading ? "Ödəniş edilir..." : "Ödəniş et"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
