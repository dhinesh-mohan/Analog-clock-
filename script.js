"use strict";

let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.display = "flex";
  mn.style.display = "flex";
  sc.style.display = "flex";
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hour = document.getElementById("hour");
  let minute = document.getElementById("minutes");
  let second = document.getElementById("seconds");
  let am = document.getElementById("ampm");

  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();
  let a = h < 12 ? "AM" : "PM";
  h = h > 12 ? h - 12 : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  am.innerHTML = a;
}, 1000);
