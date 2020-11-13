const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["웹 퍼블리셔", "웹 디자이너"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
} 
else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
}
}

function erase() {
    if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
} 
else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
}
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Typing

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    });

// MENU

AOS.init();
// aos


$(function(){
  setInterval(function(){
      $(".slide_box").delay("2500");
      $(".slide_box").animate({
          marginTop: "-500px"
      }, "500");
      $(".slide_box").delay("2500");
      $(".slide_box").animate({
          marginTop: "-1000px"
      }, "500");
      $(".slide_box").delay("2500");
      $(".slide_box").animate({
          marginTop: "0"
      }, "500");
  });
});
// slide

