const text =
  "Dear my boyfriend ,  I wnna Say Something.                              with or without me,get everything that you deserve,become the person you want to be.i want to see you on the top,living your best live,and being the person you told me you wanted to be.i'ill always be pround of you,and Even though you're often busy, maybe you have a lot on your mind right now, if you need someone to talk to, I'll always be here, sorry if I've been a bit childish lately, but now I'm starting to understand,you have to take care of your health, drink less alcohol and smoke. -_- it's not good for you, and don't eat late................I LOVE YOU SO MUCH . this is from your girlfriend alya:)   ....................  .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();