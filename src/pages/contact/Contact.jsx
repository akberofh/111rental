import React from "react";
import styles from "./Contact.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import { BsPhoneVibrate } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";
import axios from "axios";

const Contact = () => {
  const phoneNumber = "+994 70 570 68 68";
  const whatsappNumber = "+994705706868";
  const email = "faridra-sp102@code.edu.az";

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);

    const name = formData.get("fullname")
    const phoneNumber = formData.get("mobile")
    const topic = formData.get("topic")
    const message = formData.get("message")

    const data = {
      name,
      phoneNumber,
      topic,
      message
    }

    await axios.post("http://localhost:5500/applications",data);

    e.target.reset();
  };
  
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.Head}>
        <h1>Bizimlə əlaqə</h1>
      </div>
      <div className={styles.contact}>
        <div className={styles.link}>
          <BsPhoneVibrate size={50} color="#003271" />
          <span>Mobil nömrə</span>
          <a href={`tel:${phoneNumber}`} className={styles.contactlink}>
            {phoneNumber}
          </a>
        </div>

        <div className={styles.link}>
          <FaWhatsapp size={50} color="#003271" />
          <span>WhatsApp</span>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactlink}
          >
            +994 70 570 68 68
          </a>
        </div>

        <div className={styles.link}>
          <BsEnvelopeAt size={50} color="#003271" />
          <span>Email</span>
          <a href={`mailto:${email}`} className={styles.contactlink}>
            E-mail ilə əlaqə
          </a>
        </div>

        <div className={styles.link}>
          <LuClock4 size={50} color="#003271" />
          <span>İş saatları</span>
          <a className={styles.clock}>08:00 - 01:00</a>
        </div>
      </div>
      <div className={styles.formandmap}>
        <div className={styles.forms}>
          <form onSubmit={handleSubmit}>
            <h3>Müraciət blankı</h3>
            <div className={styles.inp}>
              <label htmlFor="fullname">Ad Soyad</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Ad Soyad"
              />
            </div>

            <div className={styles.inp}>
              <label htmlFor="mobile">Mobil Nömrə</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Mobil nömrə"
              />
            </div>

            <div className={styles.inp}>
              <label htmlFor="title">Mövzu</label>
              <input type="text" name="topic" id="title" placeholder="Mövzu" />
            </div>

            <div className={styles.inp}>
              <label htmlFor="text">Mesajınız</label>
              <input type="text" name="message"
                id={styles.text}
                placeholder="Mesajınız" />
            </div>

            <div className={styles.btn}>
              <button type="submit">Göndər</button>
            </div>
          </form>
        </div>

        <div className={styles.map}>
          <h3>Xəritədə biz</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14696.486425398482!2d44.9829917!3d39.5451645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401501d2aaa68ad3%3A0x3851a7bb76dea322!2s111%20Garage!5e0!3m2!1sen!2s!4v1641300135357!5m2!1sen!2s&zoom=20"
            height="460"
            width="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
