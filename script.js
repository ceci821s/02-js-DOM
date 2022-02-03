// ---------------------------------------------------------
// VÆLG ET DOM ELEMENT - NYT INDHOLD I ET ELEMENT (TextContent & innerHTML)

// defineret hvor skal skal kunne ændre tekst eller andet
const titel = document.querySelector("header");
console.log(titel);

// får titel til at loade hurtigere - og så der ikke sker andet før min DOM er loaded
document.addEventListener("DOMContentLoaded", start);

// Definere jeg hvad der skal ændres i min titel (header) inde i min funktion start

function start() {
  console.log("dom er loaded");

  // det her er for alt indholdet (uformateret indhold)
  titel.textContent = "Billedegalleri";
  // det her er for specifikt indhold i min header (indsætte HTMl i min DOM)
  titel.innerHTML = "<h1>Billeder</h1>";
}

// ---------------------------------------------------------
// NYT INDHOLD I ET ELEMENT (attributter)

// nyt indhold i element = attributter som et billede - img(src) eller link - a(href)
const pic = document.querySelector("img");
console.log(pic);

// her kan jeg erstatte med et andet billede
pic.src = "fotos/sky.jpeg";
// her kan jeg erstatte med et noget andet tekst i mit alt""
pic.alt = "dette er en alt tekst";

// ---------------------------------------------------------
// NYT INDHOLD MED createElement & appendChild

// lavet en h1'er som jeg vil have lavet om
// let h1 = document.createElement("h1");

// lavet en tekst til min h1'er
// let overskrift = document.createTextNode("Min overskrift til info");

// sat teksten ind i h1'eren
// h1.appendChild(overskrift);

// tilføje h1'eren til min DOM
// titel.appendChild(h1);

// det samme hvis det er et billede:
// let img = document.createElement("img");
// img.src = "fotos/regnbue.jpeg";
// titel.appendChild(img);
// ---------------------------------------------------------

// når man sætter en section i querySelector, så fjerne alt inholdet sig og bliver erstattet med det andet

// document.querySelector(".element_1");

// const info = document.querySelector("section");
// console.log("info");

// info.innerHTML = "<h2>Billede 1</h2>";
