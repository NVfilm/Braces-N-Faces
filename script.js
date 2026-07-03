/*=========================================================
Braces 'N Faces Dental Care
Premium JavaScript
Author: ChatGPT
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
    PRELOADER
    ==============================*/

    const preloader = document.querySelector(".preloader");

    if(preloader){

        window.addEventListener("load", ()=>{

            preloader.classList.add("hide");

            document.body.classList.add("loaded");

        });

    }

    /*==============================
    NAVBAR SCROLL
    ==============================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 50){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });

    /*==============================
    SCROLL PROGRESS
    ==============================*/

    const progress = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", ()=>{

        if(!progress) return;

        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progressHeight =
            (window.pageYOffset / totalHeight) * 100;

        progress.style.width = progressHeight + "%";

    });

    /*==============================
    MOBILE MENU
    ==============================*/

    const menuBtn = document.querySelector(".mobile-menu");

    const nav = document.querySelector(".navbar nav");

    if(menuBtn){

        menuBtn.addEventListener("click", ()=>{

            nav.classList.toggle("active");

        });

    }

    /*==============================
    FAQ ACCORDION
    ==============================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item=>{

        const question = item.querySelector(".faq-question");

        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", ()=>{

            faqItems.forEach(other=>{

                if(other!==item){

                    other.classList.remove("active");

                    other.querySelector(".faq-answer").style.maxHeight=null;

                }

            });

            item.classList.toggle("active");

            if(item.classList.contains("active")){

                answer.style.maxHeight = answer.scrollHeight + "px";

            }else{

                answer.style.maxHeight = null;

            }

        });

    });

    /*==============================
    COUNTER ANIMATION
    ==============================*/

    const counters = document.querySelectorAll("[data-count]");

    const runCounter = (counter)=>{

        const target = +counter.dataset.count;

        let count = 0;

        const speed = target / 80;

        const update = ()=>{

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target;

            }

        }

        update();

    }

    const counterObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                runCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    },{

        threshold:.5

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });

    /*==============================
    REVEAL ON SCROLL
    ==============================*/

    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(item=>{

        revealObserver.observe(item);

    });

    /*==============================
    STAGGER
    ==============================*/

    const staggers = document.querySelectorAll(".stagger");

    const staggerObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    staggers.forEach(item=>{

        staggerObserver.observe(item);

    });

    /*==============================
    PARALLAX
    ==============================*/

    const parallaxItems = document.querySelectorAll(".parallax");

    window.addEventListener("scroll", ()=>{

        let scroll = window.pageYOffset;

        parallaxItems.forEach(item=>{

            item.style.transform =
            `translateY(${scroll*0.08}px)`;

        });

    });

    /*==============================
    RIPPLE BUTTON
    ==============================*/

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn=>{

        btn.addEventListener("click",(e)=>{

            const circle = document.createElement("span");

            const diameter = Math.max(btn.clientWidth,btn.clientHeight);

            circle.style.width = diameter+"px";

            circle.style.height = diameter+"px";

            circle.style.left = e.offsetX-diameter/2+"px";

            circle.style.top = e.offsetY-diameter/2+"px";

            circle.classList.add("ripple");

            const ripple = btn.querySelector(".ripple");

            if(ripple){

                ripple.remove();

            }

            btn.appendChild(circle);

        });

    });

    /*==============================
    CURSOR GLOW
    ==============================*/

    const cursor = document.querySelector(".cursor-glow");

    if(cursor){

        document.addEventListener("mousemove",(e)=>{

            cursor.style.left=e.clientX+"px";

            cursor.style.top=e.clientY+"px";

        });

        document.querySelectorAll("a,button,.btn").forEach(el=>{

            el.addEventListener("mouseenter",()=>{

                cursor.classList.add("active");

            });

            el.addEventListener("mouseleave",()=>{

                cursor.classList.remove("active");

            });

        });

    }

    /*==============================
    GSAP
    ==============================*/

    if(typeof gsap!=="undefined"){

        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray("section").forEach(section=>{

            gsap.from(section,{

                opacity:0,

                y:80,

                duration:1,

                ease:"power3.out",

                scrollTrigger:{

                    trigger:section,

                    start:"top 80%"

                }

            });

        });

        gsap.utils.toArray(".service-card").forEach(card=>{

            gsap.from(card,{

                opacity:0,

                y:50,

                duration:.8,

                stagger:.15,

                scrollTrigger:{

                    trigger:card,

                    start:"top 85%"

                }

            });

        });

    }

});

/*=========================================================
SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================================
CURRENT YEAR
=========================================================*/

const year=document.getElementById("year");

if(year){

    year.innerText=new Date().getFullYear();

}