const today = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[today.getMonth()];
document.querySelector(
  ".date"
).textContent = `${day}, ${month} ${today.getDate()}, ${today.getFullYear()}`;

// function sumbmitPractice(){
//     var http = require("http");

//     http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("Hello World!");
//     }).listen(8080);
// }

// sumbmitPractice()
