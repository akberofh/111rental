import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Rules.module.css";
const Rules = () => {
  return (
    <div className={styles.Main}>
      <Header/>
      <div className={styles.Content}>
        <div className={styles.head}>
          <h1>İcarə şərtləri</h1>
        </div>
        <p>
          <br />
        </p>
        <p>AVTOMOBİLİN İCARƏ MÜDDƏTİ</p>
        <ul>
          <li>
            Avtomobil kirayəsi üçün müddət məhdudiyyəti yoxdur. İstədiyiniz
            halda avtomobili 2 saatlıq da icarəyə götürə bilərsiniz.
          </li>
          <li>
            Müddətin hesablanması avtomobilin qəbul/təhvili haqqında aktın
            imzalandığı andan başlayır.
          </li>
        </ul>
        <p>
          <br />
        </p>
        <p>ÖDƏMƏ ŞƏRTLƏRİ</p>
        <ul>
          <li>
            Kirayənin tam ödənişi müştərinin avtomobili təhvil aldığı zaman
            olunur.
          </li>
        </ul>
        <p>ÖDƏNİŞ</p>
        <ul>
          <li>Nağd, Posterminal və ya Karta köçürmə ilə qəbul edilir.</li>
        </ul>
        <p>
          <br />
        </p>
        <p>ƏSAS ŞƏRTLƏR</p>
        <ul>
          <li>
            Avtonəqliyyat vasitəsini icarə edən şəxsin ən azı 22 yaşı olmalıdır.
          </li>
          <li>
            Avtonəqliyyat vasitəsindən istifadə edən şəxs şəxsiyyət vəsiqəsini
            və ya beynəlxalq ID-kartı və beynəlxalq sürücülük vəsiqəsini təqdim
            etməlidir.
          </li>
          <li>
            İcarə götürən şəxs ən azı 1 il sürücülük təcrübəsinə malik
            olmalıdır.
          </li>
        </ul>
        <p>
          <br />
        </p>
        <p>AVTOMOBİLİN İSTİFADƏSİ</p>
        <ul>
          <li>Gündəlik yürüşünə məhdudiyyət qoyulmur.</li>
          <li>
            Avtomobili yalnız Naxçıvan Muxtar Respublikası ərazisində istifadə
            etmək olar.
          </li>
        </ul>
        <p>
          <br />
        </p>
        <p>
          <u>Avtomobillərin icarə tarifinə daxil olanlar:</u>
        </p>
        <ul>
          <li>
            Avtomobillərin oğurluq, qəza və üçüncü şəxslərə zərərin vurulmasına
            qarşı sığortası.
          </li>
          <li>Avtomobilin kirayə məbləği.</li>
        </ul>
        <p>
          <u>Avtomobillərin icarə tarifinə daxil olmayanlar:</u>
        </p>
        <ul>
          <li>Yanacaq xərci.</li>
          <li>Yuma xərci.</li>
          <li>Yol hərəkəti qaydalarının pozulmasına görə cərimələr.</li>
          <li>
            Avtomobilin daxildən və xaricdən zədələnməsi, eləcə də şinlərin
            zədələnməsi.
          </li>
        </ul>
        <p>
          <br />
        </p>
      </div>   
      <Footer />
    </div>
  );
};

export default Rules;
