// create and insert a nav element as firstchild of body
var body = document.body;
var nav = document.createElement("nav");
var content = document.getElementById("content");

content.style.cssText = "margin-top: 120px; margin-left: 5%; margin-right: 5%; ";

// insert nav.css stylesheet to page
var head = document.head;
head.innerHTML += '<link rel="stylesheet" href="css/nav.css">';

// insert nav before current firstChild
if (body.firstChild === null) {
    body.appendChild(nav);
} else {
    body.insertBefore(nav, body.firstChild);
}

nav.style.position = "fixed 0 0";

// insert all links
nav.innerHTML += "<span>" + "Navigaatio: ";


/*
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */


// Links

nav.innerHTML += '<div class="dropdown" id="navHTML">';
var navHTML = document.getElementById("navHTML");

navHTML.innerHTML += '<a href="index.html">' + "Penkkiurheilu";
navHTML.innerHTML += '<a href="rules.html">' + "Säännöt";
navHTML.innerHTML += '<a href="starting.html">' + "Aloittaminen";               // done
navHTML.innerHTML += '<a href="genderneutrality.html">' + "Sukupuolijakauma";   // done


navHTML.innerHTML += '<a href="geography.html">' + "Aluejakauma";
navHTML.innerHTML += '<a href="synonyms.html">' + "Sanasto";
navHTML.innerHTML += '<a href="facts.html">' + "Faktoja";
navHTML.innerHTML += '<a href="popculture.html">' + "Kulttuuriviittaukset";

// navHTML.innerHTML += '<a href="gallery.html">' + "Kuvat";



// Gallery links

nav.innerHTML += '<div class="dropdown" id="kuvat">';
var navKuvat = document.getElementById("kuvat");

navKuvat.innerHTML += '<button class="dropbtn" id="buttonKuvat">' + '<a href="gallery.html" style="padding: 3px">Kuvat</a>';

navKuvat.innerHTML += '<div class="dropdown-content" id="dropdownKuvat">';
var dropdownKuvat = document.getElementById("dropdownKuvat");

dropdownKuvat.innerHTML += '<a href="kuva01.html">' + "Kuva01";
dropdownKuvat.innerHTML += '<a href="kuva02.html">' + "Kuva02";
dropdownKuvat.innerHTML += '<a href="kuva03.html">' + "Kuva03";
dropdownKuvat.innerHTML += '<a href="kuva04.html">' + "Kuva04";


