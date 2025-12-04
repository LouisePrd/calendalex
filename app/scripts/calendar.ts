export default function initCalendar(): void {
  const cases = document.querySelectorAll<HTMLDivElement>(".advent-grid > div");
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();

  cases.forEach((c) => {
    const day = parseInt(c.dataset.day || "0");
    const locked = month !== 11 || day > date;

    if (locked) {
      c.classList.add("locked");
    }

    c.addEventListener("click", () => {
      if (locked) {
        c.classList.remove("shake");
        void c.offsetWidth;
        c.classList.add("shake");
        alert(`La case du jour ${day} n'est pas encore disponible ! hehe`);
      }
    });
  });
}
