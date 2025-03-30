document.addEventListener('DOMContentLoaded', () => {
    const ball = document.querySelector('.ball');
    const arr_hero = document.querySelector('.arr_hero');
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let ballX = window.innerWidth / 2, ballY = window.innerHeight / 2;
    const speed = 0.05; // Velocità di inseguimento
    const orbitRadius = 30; // Raggio dell'orbita
    let angle = 0;
    let isMouseInside = false;

    arr_hero.addEventListener('mousemove', (e) => {
      const rect = arr_hero.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseInside = true;
    });

    arr_hero.addEventListener('mouseleave', () => {
      isMouseInside = false;
    });

    function animate() {
      const distX = mouseX - ballX;
      const distY = mouseY - ballY;
      ballX += distX * speed;
      ballY += distY * speed;

      if (isMouseInside) {
        angle += 0.03; // Incrementa l'angolo per l'orbita quando il cursore è dentro
      } else {
        angle += 0.01; // Orbita più lentamente quando il puntatore è fermo
        mouseX = window.innerWidth / 2;
        mouseY = window.innerHeight / 2;
      }

      const orbitX = ballX + orbitRadius * Math.cos(angle);
      const orbitY = ballY + orbitRadius * Math.sin(angle);

      ball.style.transform = `translate(${orbitX}px, ${orbitY}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  });

// togal header

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Header Color Change

window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        document.querySelector(".nav-link.active")?.classList.remove("active");
        this.classList.add("active");
    });
});

// care
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    links.forEach((link) => {
        link.addEventListener("click", function () {
            links.forEach((item) => item.classList.remove("active")); // Remove active class
            this.classList.add("active"); // Add active class to clicked link
        });
    });
});

// skills

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".SkillProgress");
    progressBars.forEach((bar) => {
        let percent = bar.getAttribute("data-skill");
        bar.style.width = percent + "%";
    });
});

// work
const slider = document.querySelector(".slider");

function activate(e) {
    const items = document.querySelectorAll(".slider-item");
    if (e.target.matches("material-icons")) {
        slider.append(items[0]);
    }
    if (e.target.matches(".material-icons")) {
        slider.prepend(items[items.length - 1]);
    }
}

document.addEventListener("click", activate, false);

// ay

const toggleButton = document.getElementById("theme-toggle");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = getSystemTheme();
    setTheme(savedTheme || systemTheme);
}

toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
});

loadTheme();