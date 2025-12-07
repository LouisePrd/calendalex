"use client";

import { useEffect } from "react";
import BackHome from "../../components/DayNavigation";
import "../../styles/styles-jours.css";

export default function Day7() {
  useEffect(() => {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const unlockDay = 7;

    if (month !== 11 || date < unlockDay) {
      alert(`Jour ${unlockDay} non disponible !`);
      return;
    }

    const body = document.body;
    const emojis: HTMLDivElement[] = [];

    function createPrisonEmoji() {
      const emoji = document.createElement("div");
      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * window.innerWidth + "px";
      emoji.style.top = "-50px";
      emoji.style.fontSize = Math.random() * 30 + 20 + "px";
      emoji.style.pointerEvents = "none";
      emoji.style.willChange = "transform";

      if (Math.random() < 0.6) {
        emoji.style.zIndex = "10";
        emoji.textContent = "🚓";
      } else if (Math.random() < 0.8) {
        emoji.style.zIndex = "0";
        emoji.textContent = "🚨";
      } else {
        emoji.style.zIndex = "5";
        emoji.textContent = "👮‍♀️";
      }

      body.appendChild(emoji);
      emojis.push(emoji);

      let top = -50;
      const speed = Math.random() * 3 + 1;

      function fall() {
        top += speed;
        emoji.style.transform = `translateY(${top}px)`;
        if (top < window.innerHeight) {
          requestAnimationFrame(fall);
        } else {
          emoji.remove();
          emojis.splice(emojis.indexOf(emoji), 1);
        }
      }

      fall();

      setTimeout(() => {
        if (emoji.parentElement) {
          emoji.remove();
          emojis.splice(emojis.indexOf(emoji), 1);
        }
      }, 6000);
    }

    const interval = setInterval(createPrisonEmoji, 500);

    return () => {
      clearInterval(interval);
      emojis.forEach(e => e.remove());
    };
  }, []);

  return (
    <div>
      <BackHome />
      <header className="header">
        <h1>Jour 7 🎄</h1>
      </header>
      <p id="description">
        Suite aux folies d'hier, arrêté pour abus de twerk sur la voie publique...
      </p>

      <img
        id="mugshot"
        src="/assets/mugshot.png"
        alt="Image du jour 7"
      />

      <footer>
        <img
          id="logo-footer-7-left"
          src="/assets/jailcat.jpg"
        />
        <img
          id="logo-footer-7-right"
          src="/assets/jailcat.jpg"
        />
      </footer>
    </div>
  );
}
