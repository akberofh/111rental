import React, { useState } from "react";
import styles from "./Faq.module.css";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.Faq}>
          <Header/>
      <div className={styles.Contain}>
        <div className={styles.Head}>
          <h1>Sual Cavab</h1>
          <p>
            Bu səhifədə siz şirkətimizə ən çox verilən sualları və cavablarını
            görə bilərsiniz.
          </p>
        </div>
        <div className={styles.Content}>
          <div className={styles.Foot}>
            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(1)}
              >
                Avtomobil icarə götürmək üçün nə qədər müddət sürücülük
                vəsiqəsinə sahib olmalıyam?
                <span>{activeIndex === 1 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 1 ? styles.show : ""
                }`}
              >
                <p>
                  Şirkətimizdən icarə avtomobil götürmək üçün sürücülük
                  vəsiqənizin verilmə tarixindən ən az 2 il keçməlidir.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(2)}
              >
                Avtomobil icarə götürmək üçün yaş həddi varmı?
                <span>{activeIndex === 2 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 2 ? styles.show : ""
                }`}
              >
                <p>
                  Bəli var. Avtomobil icarə götürmək üçün yaş həddi 24 olaraq
                  təyin olunmuşdur.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(3)}
              >
                Avtomobil icarə götürmək üçün minimum depozit məbləği nə
                qədərdir?
                <span>{activeIndex === 3 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 3 ? styles.show : ""
                }`}
              >
                <p>
                  Hazırda şirkətimizdə 0 Depozit kompaniyası olduğu üçün
                  avtomobilləri depozitsiz icarəyə götürə bilərsiniz.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(4)}
              >
                Avtomobil icarə götürmək üçün hansı sənədlər lazımdır ?
                <span>{activeIndex === 4 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 4 ? styles.show : ""
                }`}
              >
                <p>
                  Avtomobil icarə götürmək üçün Şəxsiyyət vəsiqəniz və Sürücülük
                  vəsiqənizin yanınızda olması lazımdır.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(5)}
              >
                Xarici ölkə vətəndaşları avtomobil icarəyə götürə bilərmi?
                <span>{activeIndex === 5 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 5 ? styles.show : ""
                }`}
              >
                <p>
                  Bəli, 24 yaşdan və sürücülük vəsiqəsi 2 ildən yuxarı olmaq
                  şərtilə xarici pasport, bütün ölkələrdə keçərli olan sürücülük
                  vəsiqəs ilə avtomobil icarəyə götürə bilər.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(6)}
              >
                Avtomobilləriniz kasko sığortalıdırmı?
                <span>{activeIndex === 6 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 6 ? styles.show : ""
                }`}
              >
                <p>
                  Şirkətimizin bütün avtomobilləri full kasko və icbari
                  sığortalıdır. Hadisə baş verdiyi halda 24/7 xidmət göstərən
                  əlaqə nömrəmiz sizə bununla bağlı köməkçi olacaqdır.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(7)}
              >
                Qarşılama xidməti var?
                <span>{activeIndex === 7 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 7 ? styles.show : ""
                }`}
              >
                <p>
                  Bəli, şirkətimiz öz müştərilərinə hava limanında qarşılama və
                  yola salma (Avtomobili ünvanda təhvil vermə və ünvanda təhvil
                  alma) xidməti təqdim edir.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.Twofoot}>
          <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(8)}
              >Mən avtomobili öz adıma sənədləşdirib , ikinci şəxsə idarə etməyə verə bilərəm?           
                <span>{activeIndex === 8 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 8 ? styles.show : ""
                }`}
              >
                <p>
                Xeyir avtomobili yalnız etibarnamə verilən şəxs idarə edə bilər.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(9)}
              > Mən 2-ci sürücü ilə avtomobil icarə etmək istəyirəm, mümkündürmü?                         
                <span>{activeIndex === 9 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 9 ? styles.show : ""
                }`}
              >
                <p>
                Bəli, sürücünün yaş həddi, stajı şərtlərə uyğun gəlirsə, ikinci sürücünün adını müqavilədə qeyd etməklə, digər sürücü üçün yol vərəqəsi də əldə edə bilərsiniz.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(10)}
              >Uzunmüddətli kirayə avtomobil təqdim edirsinizmi?
                  
                <span>{activeIndex === 10 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 10 ? styles.show : ""
                }`}
              >
                <p>
                Bəli, əlbəttə. Əsasən digər şirkətlərlə əməkdaşlığımız bucür müqavilə əsasında qurulub. Bu zaman qiymətlərə individual yanaşmaq mümkündür. Bunun üçün bizimlə əlaqə qurub tələblərinizdən asılı olaraq uyğun qiymət ala bilərsiniz.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(11)}
              >Saatlıq icarəyə avtomobil götürə bilərəm?
                <span>{activeIndex === 11 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 11 ? styles.show : ""
                }`}
              >
                <p>
                Bəli, şirkətimiz həm sutkalıq həm də saatlıq avtomobil icarəsi xidmətini təqdim edir.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(12)}
              >İcarə avtomobildə nə qədər benzin olur?                          
                <span>{activeIndex === 12 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 12 ? styles.show : ""
                }`}
              >
                <p>
                Benzin siyasətində sərt politika aparmırıq. Yəni, benzin ilkin sizə hansı miqdarda təqdim olunursa, eyni miqdarda geri qaytarmalısınız.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(13)}
              >Reservasiya etməmiş, yaxınlaşdığım gün avtomobili icarəyə götürə biləcəm? 
                <span>{activeIndex === 13 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 13 ? styles.show : ""
                }`}
              >
                <p>
                Əlbəttə, parkımızda avtomobil qaldığı halda icarəyə götürə biləcəksiniz. Ancaq yaxşı olardı, prosesi online olaraq edəsiniz ki, artıq yaxınlaşdığınız anda əvvəlcədən bron etdiyiniz avtomobili götürə biləsiniz. vaxt itirmədən sənədlərinizə əvvəlcədən hazırlayaq.
                </p>
              </div>
            </div>

            <div className={styles.question}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(14)}
              >Sizin icarə avtomobillərinizin üstündə reklam banneri varmı?              
                <span>{activeIndex === 14 ? "−" : "+"}</span>
              </button>
              <div
                className={`${styles.answer} ${
                  activeIndex === 14 ? styles.show : ""
                }`}
              >
                <p>
                İcarəyə təqdim olunan avtomobillərin heç birində reklam bannerləri yerləşdirilməyib.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Faq;
