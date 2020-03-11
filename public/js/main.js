"use strict";

/*************/
var bd = document.body;
var header = document.querySelector("#header");
var logo = document.querySelector("#logo");
var links = document.querySelectorAll("a");
/*************/

var hideHeader = function hideHeader(event) {
  var current = window.pageYOffset || window.scrollY;

  if (current > 200) {
    header.classList.add("is-header-hidden");
    logo.classList.add("is-logo-hidden");
  } else {
    header.classList.remove("is-header-hidden");
    logo.classList.remove("is-logo-hidden");
  }
};

var disabledLinks = function disabledLinks(e) {
  e.preventDefault();
};
/*************/


var mainFunction = function mainFunction(e) {
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", disabledLinks);
  }
};
/*************/


window.addEventListener("scroll", hideHeader);
window.addEventListener("load", mainFunction);