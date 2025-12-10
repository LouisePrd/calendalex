"use client";

import { useState, useEffect } from "react";
import BackHome from "../../components/DayNavigation";
import "../../styles/styles-jours.css";
import styles from "./day10.module.css";

export default function Day10() {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step < 3) setStep(step + 1);
  };

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const unlockDay = 10;

    if (month !== 11 || date < unlockDay) {
      alert(`Jour ${unlockDay} non disponible !`);
      document.body.innerHTML = `
          <header class="header">
            <h1>Accès verrouillé</h1>
          </header>
          <main class="card">
            <p>Tssss arrête de tricher... #nerd </p>
          </main>`;
      return;
    }
  }, []);

  return (
    <div>
      <BackHome />
      <div className="day-container">
        <header className="header">
          <h1>Jour 10 🎄</h1>
        </header>

        <p id="description">Clique sur le cadeau jusqu'à le déballer...</p>

        <div className={styles.giftWrapper} onClick={handleClick}>
          <div
            className={`${styles.ribbon} ${step >= 1 ? styles.ribbonOff : ""}`}
          ></div>

          <div
            className={`${styles.lid} ${step >= 2 ? styles.lidOpen : ""}`}
          ></div>

          <div className={styles.box}></div>

          {step >= 3 && (
            <div className={styles.giftContent}>
              <img
                src="/assets/gifs/dance.gif"
                className={styles.surprise}
                alt="surprise"
              />
              <p>Hihihi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
