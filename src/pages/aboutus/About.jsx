import React from "react";
import styles from "./About.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <div className={styles.about}>
      <Header />
      <div className={styles.Content}>
        <h1>Haqqımızda</h1>
        <h1><strong>111 Rent A Car Məhdud Məsuliyyətli Cəmiyyəti</strong></h1>
        <p><br /></p>
        <p>Bizim şirkət ən sərfəli şərtlər ilə, hər bir kategoriya müştərilər üçün kirayə avtomobilləri təklif edir. Hətta ov üçün xüsusi avadanlıqlarla təchiz edilmiş avtomobillər təklif edirik.</p>
        <br />
        <p>Bizim şirkətimiz xidmətlərin geniş çeşidini təmin etməyə çalışır, buna görə də bizdə bahalı və təmtəraqlı avtomobillərdən başqa həmçinin orta və ekonom klass səviyyəli maşınlar, eləcə də əhalinin bütün təbəqələrinin tələbatının təmin olunması üçün avtobuslar və yolsuzluq avtomobilləri da var.</p>
        <br />
        <p>Bizim şirkətimizin Azərbaycanda analoqu olmayan böyük avtoparkında Mercedes-Benz, BMW, Audi, Volkswagen, Lexus, Infiniti, Toyota, Kia, Hyundai, Honda, Nissan, Mitsubishi və s. kimi məşhur Amerika, Avropa, Koreya və Yapon istehsalçılarının kirayə maşınları təqdim edilmişdir. Bütün avtomobillər KASKO üzrə sığortalanıb, vaxtı-vaxtında texniki müayinədən keçirlər və çox gözəl vəziyyətdədir.</p>
        <br />
        <p>Bizim keyfiyyətli və etibarlı avtomobillərimiz vasitəsi ilə siz respublikanın bir çox gözəl yerlərinə baş çəkə bilərsiniz, bununla bərabər səyahətlərdə sonsuz azadlığı hiss edəcək və yeni hisslər dənizinə qərq olacaqsınız.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
