/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#dominios").innerHTML = generateList(
    domainGenerate(pronoun, adjective, noun, extension)
  );
};

let pronoun = ["the", "my", "your", "our", "their"];
let adjective = [
  "magnificent",
  "great",
  "big",
  "pretty",
  "large",
  "efficent",
  "generous"
];
let noun = [
  "place",
  "lobby",
  "world",
  "planet",
  "store",
  "shop",
  "earth",
  "buro",
  "stack",
  "market"
];
let extension = [
  ".com",
  ".net",
  ".tech",
  ".info",
  ".es",
  ".tk",
  ".eu",
  ".es",
  ".us",
  ".gov",
  ".edu"
];

const domainGenerate = (arr1, arr2, arr3, arr4) => {
  let names = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        for (let m = 0; m < arr4.length; m++) {
          names.push(arr1[i] + arr2[j] + arr3[k] + arr4[m]);
        }
      }
    }
  }
  return names;
};

const generateList = arr => {
  let codeHtml = "<ul>";
  let iniLi = "<li>";
  let finLi = "</li>";
  let finUl = "</ul>";
  for (let v = 0; v < arr.length; v++) {
    codeHtml = codeHtml + iniLi + arr[v] + finLi;
  }
  codeHtml += finUl;
  return codeHtml;
};
