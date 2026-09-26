/*  https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav 
https://medium.com/front-end-weekly/how-to-build-reusable-html-components-without-component-based-frameworks-2f7747f4c5db
 */
document.getElementById("navbar").innerHTML = `
<nav class="navbar">
  <ul>
    <li><a href="index.html">Main</a></li>
    <li><a href="resume.html">Resume</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
  </ul>
</nav>
`;

/* 
    https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a 
     https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/footer
*/
document.getElementById("footer").innerHTML = `
<footer class="footer">
  <small>
    Kaung Mon Thar
    <a href="mailto:thark@rose-hulman.edu" target="_blank">Email</a>
    <a
      href="https://app.joinhandshake.com/profiles/kaung_mon_thar"
      target="_blank"
      >Handshake</a
    >
    <a href="https://www.linkedin.com/in/kaungmonthar" target="_blank"
      >LinkedIn</a
    >
    </small>
</footer>
`;

let funFact = [
  "I've only had half of my wisdom teeth removed!",
  "I can speak conversational chinese! (Thanks to the chinese aunties at the wet markets)",
  "I have a love hate situationship with sparkling water.",
  "I used to play competitive chess.",
  "I have an unhealthy relationship with reading.",
  "I've visited 7 different countries!",
];

let funFactBtn = document.getElementById("fun-fact-btn");
let funFactText = document.getElementById("fun-fact-text");

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
if (funFactBtn && funFactText) {
  funFactBtn.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * funFact.length);
    while (funFactText.innerText === funFact[randomNum]) {
      randomNum = Math.floor(Math.random() * funFact.length);
    }
    funFactText.innerText = funFact[randomNum];
  });
}
