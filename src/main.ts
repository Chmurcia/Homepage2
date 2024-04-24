// Setting up

import './styles.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Variables

const startBtn = document.querySelector('.start') as HTMLButtonElement;
const dropBtn = document.querySelector('.nav-drop') as HTMLButtonElement;
const navBtns = document.querySelector('.navbar')?.querySelectorAll('button');
const docBody = document.querySelector('body');

 
let click = false;

// GSAP
gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline();
tl1.fromTo(".intro-text .top", {opacity: 0, y: 25, x: -50}, {opacity: 1, x: 0, duration: 1})
  .to(".intro-text .top", {y: 0, duration: .5})
  .fromTo(".intro-text .bottom", {opacity: 0}, {opacity: 1, duration: 1})
  .to(".intro-text", {y: -30, duration: .5})
  .fromTo(".main-text .start", {opacity: 0, y: 0}, {opacity: 1, y: 0,  duration: 1})

const tl2 = gsap.timeline({ repeat: -1 });
tl2.fromTo('.main-footer-svg', {y: -50}, {x: 0, duration: 0.2, delay: 1})
   .to('.main-footer-svg', {y: -50, duration: 0.1})
   .to('.main-footer-svg', {y: 0, duration: 0.2})
   .to('.main-footer-svg', {y: -50, duration: 0.1})
   .to('.main-footer-svg', {y: 0, duration: 0.2})
   .to('.main-footer-svg', {y: -50, duration: 0.1})

setTimeout(() => {
  startBtn.style.pointerEvents = 'all'
}, 3500);
// Functions

function updateWidthScreen() {
   let screenWidth = window.innerWidth;

   if (screenWidth <= 800) {
     gsap.to(".drop-menu", {opacity: 0, display: 'none', y: 0});
     gsap.to(".nav-drop-svg", {rotate: 0, duration: 0.8});
     console.log('hey');
   }
  
}

function letScroll() {
  docBody!.style.overflow = "visible";
}


function mainBtnDisappear(): void {
  gsap.to(".start", {x: 100, duration: 0.5, opacity: 0});
  gsap.to(".main-text", {y: 30, duration: 0.5, delay: 0.5});
  startBtn.style.pointerEvents = 'none';
  gsap.to(".main-text", {y: 150, scrollTrigger: {scrub: 3, trigger: '.main-text', start: "top center", end: "bottom top"}});
}

function showMainSec(): void {
  console.log('hey');
  gsap.fromTo('.click-menu', {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.2});
  const tl2 = gsap.timeline();
  tl2.fromTo('.nav-drop', {x: 200}, {x: 0, opacity: 1, duration: 0.1})
     .fromTo('.cont-btn', {x: 200}, {x: 0, opacity: 1, duration: 0.1})
     .fromTo('.port-btn', {x: 200}, {x: 0, opacity: 1, duration: 0.1})
     .fromTo('.home-btn', {x: 200}, {x: 0, opacity: 1, duration: 0.1})
     .fromTo('.nav-theme', {x: 200}, {x: 0, opacity: 1, duration: 0.25})
     .fromTo('.main-footer-svg', {y: 100}, {y: -50, opacity: 0.77, duration: 0.3})
     gsap.fromTo(".main-footer-svg", {opacity: 0.77}, {opacity: 0, scrollTrigger: {scrub: 2, trigger: '.main-footer-svg', start: "top bottom", end: "+=10%", toggleActions: "restart none none reverse"}});
  navBtns?.forEach(btn => {
    btn.style.pointerEvents = 'all';
  })
  letScroll();
}

function drop(): void {
    if (click == false) {
      gsap.to(".nav-drop-svg", {rotate: 180, duration: 0.8});
      click = true;
      gsap.to(".drop-menu", {opacity: 1, display: 'flex', y: 70});
    } else {
      gsap.to(".nav-drop-svg", {rotate: 0, duration: 0.8});
      gsap.to(".drop-menu", {opacity: 0, display: 'none', y: 0});
      click = false;
    }
}

// Events
startBtn.addEventListener('click', () => {
  mainBtnDisappear();
  setTimeout(showMainSec, 1500);
})

dropBtn.addEventListener('click', drop);

window.addEventListener('resize', updateWidthScreen);