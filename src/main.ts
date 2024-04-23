// Setting up

import './styles.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP

gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline();
tl1.fromTo(".intro-text .top", {opacity: 0, y: 25, x: -50}, {opacity: 1, x: 0, duration: 1})
  .to(".intro-text .top", {y: 0, duration: .5})
  .fromTo(".intro-text .bottom", {opacity: 0}, {opacity: 1, duration: 1})
  .to(".intro-text", {y: -30, duration: .5})
  .fromTo(".main-text .start", {opacity: 0, y: 0}, {opacity: 1, y: 0,  duration: 1})

// Variables

const startBtn = document.querySelector('.start') as HTMLButtonElement;


// Functions

function mainBtnDisappear(): void {
  gsap.to(".start", {x: 100, duration: 0.5, opacity: 0});
  gsap.to(".main-text", {y: 30, duration: 0.5, delay: 0.5});
}

function showMainSec(): void {
  console.log('hey')
}

/* Only for intro button! */
startBtn.addEventListener('click', () => {
  mainBtnDisappear();
  setTimeout(showMainSec, 1500);
})