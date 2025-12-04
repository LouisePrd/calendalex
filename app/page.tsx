"use client";
import "./style-home.css";
import { useEffect } from "react";
import initCalendar from "./scripts/calendar";

export default function Home() {
  useEffect(() => {

    initCalendar();

    const logo = document.getElementById("logo");
    const header = document.querySelector("header");

    if (!logo || !header) return;

    let posX = 0;
    let speed = 2;
    let direction = 1;
    let animationFrameId: number | null = null;

    const updateMaxX = () => header.clientWidth - logo.clientWidth;
    let maxX = updateMaxX();

    window.addEventListener("resize", () => {
      maxX = updateMaxX();
    });

    function moveLogo() {
      posX += speed * direction;

      if (posX >= maxX || posX <= 0) {
        direction *= -1;
        (logo as HTMLElement).style.transform =
          direction === 1
            ? "translateY(-50%) scaleX(1)"
            : "translateY(-50%) scaleX(-1)";
      }

      (logo as HTMLElement).style.left = posX + "px";
      animationFrameId = requestAnimationFrame(moveLogo);
    }

    moveLogo();

    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");

    if (popup && closeBtn) {
      logo.addEventListener("click", () => {
        popup.style.display = "block";
        if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      });

      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
        moveLogo();
      });
    }

    // --- SNOWFLAKES ❄ ---
    const snowflakes: HTMLDivElement[] = [];
    const numFlakes = 50;

    for (let i = 0; i < numFlakes; i++) {
      const flake = document.createElement("div") as HTMLDivElement;
      flake.classList.add("snowflake");
      flake.innerText = "❄";
      flake.style.left = Math.random() * window.innerWidth + "px";
      flake.style.animationDuration = 2 + Math.random() * 3 + "s";
      flake.style.opacity = (0.5 + Math.random() * 0.5).toString();
      flake.style.fontSize = 10 + Math.random() * 20 + "px";
      document.body.appendChild(flake);
      snowflakes.push(flake);
    }

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      snowflakes.forEach((flake) => flake.remove());
    };
  }, []);

  return (
    <>
      <header>
        <img id="logo" src="./assets/gaya.png" alt="Logo Gaya" />
      </header>

      <main>
        <h1>Ho ho ho !</h1>

        <section className="advent-grid">
          <div data-day="17">17</div>
          <div data-day="5">5</div>
          <div data-day="1"><a href="./advent/day1.html">1</a></div>
          <div data-day="2"><a href="./advent/day2.html">2</a></div>
          <div data-day="15">15</div>
          <div data-day="3"><a href="./advent/day3.html">3</a></div>
          <div data-day="23">23</div>

          <div data-day="16">16</div>
          <div data-day="6">6</div>
          <div data-day="24">24</div>

          <div data-day="22">22</div>
          <div data-day="7">7</div>
          <div data-day="4"><a href="./advent/day4.html">4</a></div>
          <div data-day="9">9</div>
          <div data-day="10">10</div>
          <div data-day="20">20</div>
          <div data-day="14">14</div>
          <div data-day="21">21</div>
          <div data-day="8">8</div>
          <div data-day="18">18</div>
          <div data-day="11">11</div>
          <div data-day="13">13</div>
          <div data-day="19">19</div>
          <div data-day="12">12</div>
        </section>
      </main>

      <div
        id="popup"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgb(255, 0, 0)",
          padding: "50px",
          border: "5px solid #ffffff",
          display: "none",
          zIndex: 1000,
          fontSize: "20px",
          color: "#ffffff",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Pourquoi t'as cliqué ???? Le consentement ??????? 😾&nbsp;
        <button id="closePopup">OK</button>
      </div>

      <footer>
        <img id="nerd-cat" src="./assets/nerd-cat.png" alt="Chat nerd avec lunettes" />
        <img id="cat-christmas" src="./assets/cat-christmas.png" alt="Chat de Noël" />
      </footer>
    </>
  );
}
