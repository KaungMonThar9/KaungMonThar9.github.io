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
