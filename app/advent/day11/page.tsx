"use client";

import { useEffect } from "react";
import BackHome from "../../components/DayNavigation";
import "../../styles/styles-jours.css";
import styles from "./day11.module.css";

export default function Day11() {
  useEffect(() => {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const unlockDay = 11;

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
          <h1>Jour 11 🎄</h1>
        </header>

        <p id="description">
          Horoscope du jour pour bien commencer ta journée ! 🥸
        </p>

        <div className={styles.horoscopeContainer}>
          <div className={styles.category}>
            <h2 className={styles.sectionTitle}>Vie amoureuse</h2>
            <p className={styles.text}>
              On sait que les Scorpions sont sérieux dans leur relation
              sentimentale, et que vous ne vous engagez pas à la légère.
              <br></br>
              <br></br>
              Pourtant, ce jeudi, certains Scorpions n'auront qu'une envie :
              s'évader. Votre relation vous pèse actuellement (ah bon?🥺)et vous
              rêvez d'un peu plus d'émotions fortes. <br></br>
              <br></br>N'oubliez pas que les bubble teas viennent de Taiwan
              #voyage et qu'il faut traverser la rue pour en acheter un
              #emotionsFortes...<br></br>A méditer...
            </p>
          </div>

          <div className={styles.category}>
            <h2 className={styles.sectionTitle}>Votre vie professionnelle</h2>
            <p className={styles.text}>
              Si vous travaillez ce jeudi, vous serez, comme à votre habitude,
              un modèle à suivre (????? qui a écrit ça ???) au travail. Mais
              vous aurez beau montrer l'exemple, vous ne serez pas entendu. Vous
              en serez agacé dans cette société matriarcale.<br></br>
              <br></br>
              Parfois, il ne suffit pas de mener quelques petites actions.
              Haussez le ton contre tous ces wokes qui tentent de mettre à terre
              vos idées et n'hésitez pas à demander de l'aide à Elvin, la
              planète de la communication.
            </p>
          </div>

          <div className={styles.category}>
            <h2 className={styles.sectionTitle}>Vos finances</h2>
            <p className={styles.text}>
              La journée est ouverte à différents aspects. <br></br>
              <br></br>Il y a ceux qui doivent surveiller de près leurs affaires
              et ceux, se sachant plus cigales que fourmis, qui doivent investir
              ou dépenser avec prudence. <br></br>Enfin, les chanceux qui se
              verront offrir de belles opportunités.<br></br>
              <br></br>
              <strong>TW : collection Art Smiski</strong>
              <br></br>
              La dernière phrase ne concerne pas les acheteurs compulsifs de
              smiskis, évidemment.
            </p>
          </div>

          <div className={styles.category}>
            <h2 className={styles.sectionTitle}>Votre bien-être</h2>
            <p className={styles.text}>
              De l'énergie, beaucoup d'énergies circulent ce jeudi dans la
              France de Macron. <br></br>
              <br></br>Positives ou négatives ? Seul Novelli en a la réponse.
              Cependant, allez-vous savoir les utiliser à bon escient ?<br></br>{" "}
              <br></br>Il y a ceux qui devraient se détendre si des douleurs
              résultant d'efforts physiques intenses se réveillent. Puis, il y a
              ceux qui devront planifier leurs activités pour ne pas se
              disperser. La journée sera un peu goofy.
            </p>
          </div>

          <div className={styles.category}>
            <a
              href="https://twitter.com/Ducknoodle26/status/1952950838051389765"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../assets/gifs/funny-cat.gif" alt="Funny cat" />
            </a>
          </div>

          <div className={styles.category}>
            <h2 className={styles.sectionTitle}>En gros</h2>
            <p className={styles.text}>
              Ce sera pas ton meilleur jour pour slay, mais va aller, oket ?
              <br></br>
              <br></br>
              Profites en pour te reposer un peu, booster ta créativité au
              jeudimac et préparer demain. Plus d'excuses, toutes les planètes
              seront alignées pour toi !<br></br>
              <br></br> C'est pas moi qui le dis, c'est Evozen :D
            </p>
          </div>
        </div>
      </div>

      <footer>
        <p className={styles.source}>
          Source :{" "}
          <a
            href="https://x.com/W0BUZ/status/1952847473405579359"
            target="_blank"
            rel="noopener noreferrer"
          >
            Evozen
          </a>
        </p>
      </footer>
    </div>
  );
}
