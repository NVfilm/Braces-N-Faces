
/* =========================
PREMIUM DENTAL WEBSITE JS
BRACES 'N FACES
========================= */

document.addEventListener("DOMContentLoaded", () => {

/* =========================
MOBILE MENU
========================= */

const nav = document.querySelector(".navbar nav");

const menuToggle = document.createElement("div");
menuToggle.innerHTML = "☰";
menuToggle.classList.add("menu-toggle");

document.querySelector(".navbar .container").appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* =========================
SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =========================
NAVBAR GLASS ON SCROLL
========================= */

const navbar = document.querySelector(".navbar .container");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.9)";
        navbar.style.backdropFilter = "blur(20px)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.7)";
    }
});

/* =========================
SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".card, .doctor, .split img, .hero-left");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});

/* =========================
COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll("[data-count]");

const animateCounter = (el) => {
    const target = +el.getAttribute("data-count");
    let count = 0;

    const update = () => {
        count += Math.ceil(target / 100);
        if (count < target) {
            el.innerText = count;
            requestAnimationFrame(update);
        } else {
            el.innerText = target;
        }
    };

    update();
};

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));

/* =========================
FAQ (IF EXISTS)
========================= */

document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

/* =========================
BUTTON RIPPLE EFFECT
========================= */

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function (e) {

        let ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });
});

/* =========================
GSAP (OPTIONAL - IF LOADED)
========================= */

if (typeof gsap !== "undefined") {

    gsap.from(".hero-left h1", {
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".hero-left p", {
        y: 30,
        opacity: 0,
        delay: 0.2
    });

    gsap.from(".card", {
        opacity: 0,
        y: 40,
        stagger: 0.05,
        duration: 0.8
    });

}

/* =========================
FLOAT ANIMATION (SOFT UI MOVE)
========================= */

const floatElements = document.querySelectorAll(".card, .doctor");

floatElements.forEach(el => {
    el.addEventListener("mousemove", (e) => {

        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height/2)/20}deg)
            rotateY(${-(x - rect.width/2)/20}deg)
            scale(1.02)
        `;

    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "none";
    });

});

/* =========================
END
========================= */

});
