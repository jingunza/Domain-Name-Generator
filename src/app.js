/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#dominios").innerHTML = codeHtml;
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
  "reyes",
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
  ".es",
  ".com",
  ".net",
  ".tech",
  ".info",
  ".es",
  ".tk",
  ".eu",
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
const names = domainGenerate(pronoun, adjective, noun, extension);

const hackExtensions = arr => {
  let nombreSplit = arr.map(function(item) {
    return item.split(".");
  });
  for (let i = 0; i < nombreSplit.length; i++) {
    if (
      nombreSplit[i][1] ==
      nombreSplit[i][0].slice(
        nombreSplit[i][0].length - nombreSplit[i][1].length,
        nombreSplit[i][0].length
      )
    ) {
      nombreSplit[i][0] = nombreSplit[i][0].slice(
        0,
        nombreSplit[i][0].length - nombreSplit[i][1].length
      );
    }
  }
  let newNames = nombreSplit.map(function(item) {
    return item[0] + "." + item[1];
  });
  return newNames;
};
const newNames = hackExtensions(names);

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
const codeHtml = generateList(newNames); // variable final que va al window.onload
