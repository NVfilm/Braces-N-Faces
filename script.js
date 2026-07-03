
/*=========================================================
BRACES 'N FACES DENTAL CARE
COMPLETE PREMIUM SCRIPT.JS
GSAP • INTERACTIONS • ANIMATIONS • UI LOGIC
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

/*=========================
PRELOADER
=========================*/

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    if (preloader) {
        preloader.classList.add("hide");
    }
});

/*=========================
NAVBAR SCROLL EFFECT
=========================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.9)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.75)";
        navbar.style.boxShadow = "none";
    }
});

/*=========================
MOBILE MENU
=========================*/

const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".navbar nav");

if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

/*=========================
SMOOTH SCROLL
=========================*/

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

/*=========================
FAQ ACCORDION
=========================*/

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
    const question = faq.querySelector(".faq-question");
    const answer = faq.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        faqs.forEach(item => {
            if (item !== faq) {
                item.querySelector(".faq-answer").style.maxHeight = null;
            }
        });

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

    });
});

/*=========================
COUNTER ANIMATION
=========================*/

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
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

/*=========================
REVEAL ON SCROLL
=========================*/

const revealElements = document.querySelectorAll(".reveal, .service-card, .why-card, .doctor-card, .review-card");

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s ease";
    revealObserver.observe(el);
});

/*=========================
CURSOR EFFECT
=========================*/

const cursor = document.querySelector(".cursor-glow");

if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button, .btn").forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });

        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    });
}

/*=========================
PARALLAX EFFECT
=========================*/

window.addEventListener("scroll", () => {
    const parallax = document.querySelectorAll(".hero img, .parallax");

    let scroll = window.pageYOffset;

    parallax.forEach(el => {
        el.style.transform = `translateY(${scroll * 0.2}px)`;
    });
});

/*=========================
BUTTON RIPPLE EFFECT
=========================*/

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = btn.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });
});

/*=========================
GSAP (OPTIONAL IF LOADED)
=========================*/

if (typeof gsap !== "undefined") {

    gsap.from(".hero h1", {
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from(".hero p", {
        opacity: 0,
        y: 30,
        delay: 0.3
    });

    gsap.from(".service-card", {
        scrollTrigger: ".services",
        opacity: 0,
        y: 40,
        stagger: 0.1
    });

}

/*=========================
END
=========================*/

});
