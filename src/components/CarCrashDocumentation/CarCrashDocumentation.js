import React from "react";

import styles from "./CarCrashDocumentation.module.css";
import formula1 from "../../assets/images/formulas/formula1.png";
import formula2 from "../../assets/images/formulas/formula2.png";
import formula3 from "../../assets/images/formulas/formula3.png";
import formula4 from "../../assets/images/formulas/formula4.png";
import formula5 from "../../assets/images/formulas/formula5.png";
import formula6 from "../../assets/images/formulas/formula6.png";
import formula7 from "../../assets/images/formulas/formula7.png";
import formula8 from "../../assets/images/formulas/formula8.png";
import formula9 from "../../assets/images/formulas/formula9.png";
import formula10 from "../../assets/images/formulas/formula10.png";

import table1 from "../../assets/images/tables/table1.png";
import table2 from "../../assets/images/tables/table2.png";
import table3 from "../../assets/images/tables/table3.png";
import table4 from "../../assets/images/tables/table4.png";

import example1 from "../../assets/images/examples/example1.png";
import example2 from "../../assets/images/examples/example2.png";
import example3 from "../../assets/images/examples/example3.png";
import example4 from "../../assets/images/examples/example4.png";

const CarCrashDocumentation = () => (
  <>
    <h1>Документация</h1>
    <div className={styles.Documentation}>
      <section>
        <h3 className={styles.sectionTitle}>Съдържание</h3>
        <ol>
          <li>
            <p>Какво е виртуален сензор?</p>
            <ul>
              <li>Същност</li>
              <li>Предимства на виртуалните сензори пред физическите</li>
              <li>Приложение</li>
            </ul>
          </li>

          <li>
            <p>Виртуален сензор за изчисляване вероятността за смъртност
при катастрофа, ако има такава
            </p>
            <ul>
              <li>Специфики при изчисляване вероятността за смъртност
при катастрофа
              </li>
              <li>Методи за измерване</li>
            </ul>
          </li>

          <li><p>Описание на работата на виртуалния сензор</p></li>
          <li><p>Резултати от проведени тестове</p></li>
          <li><p>Източници</p></li>
        </ol>
      </section>

      <section>
        <h3 className={styles.sectionTitle}>Какво е виртуален сензор?</h3>
        <h5 className={styles.sectionSubTitle}>Същност</h5>
        <p>Виртуалните сензори отчитат качеставата на продукти или
параметрите на процеси посредством математически модели
като заместител на физичните сензори или в комбинация с
тях. Те се прилагат като надеждна и по-евтина алтернатива на
скъпите и непрактични физически измервания.
        </p>

        <h5 className={styles.sectionSubTitle}>Предимства на виртуалните сензори пред физическите</h5>
        <p>Има няколко причини виртуалните сензори да са
предпочитани пред физическите:
        </p>
        <ul>
          <li>
            <p>Трудно отчитане чрез физическите сензори</p>
          </li>
          <li>
            <p>Физическите сензори са твърде бавни</p>
          </li>
          <li>
            <p>Инсталирането на физически сензор е твърде скъпо</p>
          </li>
          <li>
            <p>Пространството не позволява инсталирането на физичен
сензор
            </p>
          </li>
        </ul>
        <p>
      Това са достатъчно причини, за да се избира повече
виртуалния сензор пред физичния.
        </p>

        <h5 className={styles.sectionSubTitle}>Приложение</h5>
        <p>Виртуалните датчици извършват индиректни отчитания на
абстрактни условия (които не са физически измерими) чрез
компилиране и анализирани на данни. Приложението на
такива сензори вече е утвърдено в редица области. Сред тях
са автомобилостроенето, роботиката, жилищната и сградна
автоматизация. Предстои масово налагане и в
машиностроенето. Най-разпространените приложения на
такива решения са за отчитане на вибрации, прогнозиране на
смущения и предсказване на грешката.
        </p>
      </section>

      <section>
        <h3 className={styles.sectionTitle}>Виртуален сензор за изчисляване вероятността за смъртност
при катастрофа
        </h3>
        <h5 className={styles.sectionSubTitle}>Специфики при изчисляване вероятността за смъртност при
катастрофа
        </h5>
        <p>Всички знаят, че автомобилните катастрофи са много
опасни, но как може да бъде обясненя чрез физиката? Можем
ли да предвидим последствията от автомобилна катастрофа?
Това са въпроси, които вълнуват хората. За да намерим
отговори на въпросите е нужно да проведем опит за
симулация на катастрофа. Нещата, които ще са ни необходими
са:
        </p>
        <ul>
          <li><p>Автомобил</p></li>
          <li><p>Шофьор</p></li>
          <li><p>Подходящо място за симулация</p></li>
          <li><p>Препятствие за сблъсък</p></li>
          <li><p>Информация за условията на околната среда</p></li>
        </ul>
        <p>
      Неща, които можем лесно да осигурим. Но какво става, ако
искаме да проведем същия опит, но при други условия на
пътя, с друг шофьор. Катастрофата зависи от твърде много
условия и дори малка промяна на едно от тях би довело до
различен резултат. Провеждането на няколко опита би било

възможно, но ако искаме да имаме по-добри резултати и по-
точни са необходими безброй много опити. За целта

създадохме виртуален сензор, който позволява потребителят
да придобие представа как различните фактори определят
вероятността за смъртност.
        </p>

        <h5 className={styles.sectionSubTitle}>Методи за измерване</h5>
        <p>Автомобилът започва да се движи с определена скорост. На
дадено разстояние от него има препяствие, което ще доведе
до катастрофа, ако шофьорът не успее да спре на време.
Шофьорът забелязва пречката пред себе си и започва да
натиска спирачките. Измерваме спирачния път, ако имаме
сблъсък продължаваме с измерванията. При сблъсък колата
няма да е достигнала скорост 0 km/h , за целта трябва да
определим с какава скорост ще се блъсне колата. Тази скорост
ни е необходима, за да намерим с каква сила ще бъде ударът,
който ще понесе шофьорът. След изчисляването на тази сила
според резултатите установяваме каква е вероятността за
смърт.
        </p>
      </section>

      <section>
        <h3 className={styles.sectionTitle}>Описание на работата на виртуалния сензор</h3>
        <p>Първата задача на виртуалния сензор е да изчисли дали ще
има катастрофа. Това се случва по следния алгоритъм:
        </p>

        <p>Изчисляваме по следната формула спирачния път:</p>
        <img src={formula1} alt="formula1" />

        <p>
        Спирачният път се разделя на две: reaction distance –
разстоянието, което изминава автомобила, докато шофьора
реагира и breaking distance – разстоянието, което изминава
автомобила след натискането на спирачките.
        </p>

        <p>Формулата за намиране на reaction distance е следната:</p>
        <img src={formula2} alt="formula2" />

        <p>Скоростта ще бъде подадена от потребителя, а времето за
реакция се определя по следната таблица:
        </p>
        <img src={table1} alt="table1" />

        <p>Формулата за намиране на braking distance се изразява по
следния начин:
        </p>
        <img src={formula3} alt="formula3" />

        <p>Но крайната скорост е равна на 0. От където за braking
distance:
        </p>
        <img src={formula4} alt="formula4" />
        <img src={formula5} alt="formula5" />

        <p>Като краен резултат за braking distance се получава:</p>
        <img src={formula6} alt="formula6" />

        <p>Земното ускорение е константа със стойност 9,8 m/s 2 .</p>

        <p>Наклонът на пътя се взема от следната таблица:</p>
        <img src={table2} alt="table2" />

        <p>Коефицентът на триене също се взема от таблица:</p>
        <img src={table3} alt="table3" />

        <h5>Пример:</h5>
        <ul>
          <li>Скорост – 50 km/h</li>
          <li>Много внимателен шофьор</li>
          <li>Без наклон на пътя</li>
          <li>Сух асфалт</li>
          <li>35 m – разстояние до сблъсъка</li>
        </ul>
        <h6>Фиг.1</h6>
        <img src={example1} alt="example1" />
        <p>От фиг.1 можем да видим, че след пресмятане за reaction
distance получаваме 13.9 m, а за breaking distance 10.7 m. След
като ги съберем се получава 24.6 m, за спирачния път. До

дървото, в случая, имаме 35 m, което означава, че няма да
има катастрофа. Ако имаме тази ситуация програмата
приключва тук със съобщение, че катастрофа няма да има и
на какво разстояние от мястото на сблъсък колата ще успее да
спре. В другия случай продължава със следващите задачи.
        </p>

        <h5>Втората задача на виртуалния сензор е да намери скоростта, с
която ще се движи колата при удара.
        </h5>

        <p>Скоростта се изчислява по следната формула:</p>
        <img src={formula7} alt="formula7" />

        <h5>Пример:</h5>
        <ul>
          <li>Скорост – 50 km/h</li>
          <li>Много внимателен шофьор</li>
          <li>Без наклон на пътя</li>
          <li>Сух асфалт</li>
          <li>20 m – разстояние до сблъсъка</li>
        </ul>
        <h6>Фиг.2</h6>
        <img src={example2} alt="example2" />

        <p>От фиг.2 разбираме, че разликата между разстоянието до
удара и reaction distance е 6.1 m. За изчисляването на

скоростта ни е необходимо това разстояние, защото тогава
скоростта започва реално да се намалява. Скоростта ще бъде
9.09 m/s 2 .
        </p>
        <img src={example3} alt="example3" />

        <h5>Третата задача е да изчисли силата на удара.</h5>
        <p>За целта ще използваме следната формула:</p>
        <img src={formula8} alt="formula8" />

        <p>Като за d имаме два случая:</p>
        <ul>
          <li>Без колан – d = 4 cm -&gt; 0.04m</li>
          <li>С колан – d = 20 cm -&gt; 0.2 m</li>
        </ul>

        <h5>Пример:</h5>
        <ul>
          <li>Скорост – 50 km/h</li>
          <li>Много внимателен шофьор</li>
          <li>Без наклон на пътя</li>
          <li>Сух асфалт</li>
          <li>20 m – разстояние до сблъсъка</li>
          <li>С колан</li>
          <li>Тегло на шофьора – 50 кг</li>
        </ul>

        <h6>Фиг.3</h6>
        <img src={example4} alt="example4" />

        <p>Силата на удар при тези дадени стойности ще бъде
10 338.21 N. Тази сила ще я използваме за да намерим
времето за спиране. По тази формула:
        </p>
        <img src={formula9} alt="formula9" />

        <p>След проучване установихме, че вероятността за
смърт зависи от деускорението превърнато в мерната
единица g (gravity). Следната таблица го показва:
        </p>
        <img src={table4} alt="table4" />

        <p>За да намерим това деускорение ще използваме
формулата:
        </p>
        <img src={formula10} alt="formula10" />
      </section>

      <section>
        <h3 className={styles.sectionTitle}>Източници:</h3>
        <ul>
          <li>
            <a
              href="http://hyperphysics.phy-astr.gsu.edu/hbase/carcr2.html"
              target="_blank"
              rel="noopener noreferrer"
            >Hyperphysics
            </a>
          </li>

          <li>
            <a
              href="https://www.science.org.au/curious/technology-future/physics-speeding-cars"
              target="_blank"
              rel="noopener noreferrer"
            >Science.org
            </a>
          </li>

          <li>
            <a
              href="https://static.tti.tamu.edu/tti.tamu.edu/documents/1125-1F.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >Technical Report
            </a>
          </li>

          <li>
            <a
              href="https://www.webpages.uidaho.edu/niatt_labmanual/chapters/geometricdesign/theoryandconcepts/BrakingDistance.htm"
              target="_blank"
              rel="noopener noreferrer"
            >Braking Distance
            </a>
          </li>

          <li>
            <a
              href="https://korkortonline.se/en/theory/reaction-braking-stopping/"
              target="_blank"
              rel="noopener noreferrer"
            >Stopping Distance
            </a>
          </li>

          <li>
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3503411/"
              target="_blank"
              rel="noopener noreferrer"
            >Injury Risk
            </a>
          </li>

          <li>
            <a
              href="http://www.softschools.com/formulas/physics/deceleration_formula/44/"
              target="_blank"
              rel="noopener noreferrer"
            >SoftSchools
            </a>
          </li>

          <li>
            <a
              href="https://www.shofior.com/wordpress/%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82
              -%D0%BD%D0%B0-%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-
              %D0%B8-%D1%81%D0%BF%D0%B8%D1%80%D0%B0%D1%87%D0%B5%D0%BD-%D0%BF%D1%8A%D1%82/"
              target="_blank"
              rel="noopener noreferrer"
            >Скорост на движение и спирачен път
            </a>
          </li>
        </ul>
      </section>
    </div>
  </>
);

export default CarCrashDocumentation;
