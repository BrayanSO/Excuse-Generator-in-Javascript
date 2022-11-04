/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let action = ["ate ", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excusa = "";

  excusa = randomVal(who) + "";
  excusa = excusa + randomVal(action) + " ";
  excusa = excusa + randomVal(what) + " ";
  excusa = excusa + randomVal(when);

  document.getElementById("excusa").innerText = excusa;
  console.log(excusa);
};

function randomVal(arr) {
  let num = Math.floor(Math.random() * (arr.length - 1));
  return arr[num];
}
