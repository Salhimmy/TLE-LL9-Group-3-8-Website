var daHamburg = document.querySelector("#hamburg-menu")
var daMenu = document.querySelector(".drop-down-menu")
var daStatus = false

function priii() {
  if(!daStatus) {
    daMenu.style.display = "block"
    daStatus = true
  }
  else if(daStatus) {
    daMenu.style.display = "none"
    return daStatus = false
  }
}

var monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
var midday

function displayDateTime() {
  var today = new Date()
  var hours = updateHours(today.getHours())
  var minutes = updateTime(today.getMinutes())
  var seconds = updateTime(today.getSeconds())
  var year = today.getFullYear()
  var months = today.getMonth()
  var day = today.getDay()

  document.getElementById("currentDateTime").innerHTML = `${monthList[months-1]} ${day}, ${year} ${hours}:${minutes}:${seconds} ${midday}`;
  setTimeout(displayDateTime, 1000);
}

displayDateTime()

function updateTime(n) {
  if(n < 10) {
      return "0" + n;
  }
  else {
      return n;
  }
}

function updateHours(n) {
  if(n < 10 && n != 0) {
      midday = "A.M.";
      return "0" + n;
  }
  else if(n == 10 || n == 11) {
      midday = "A.M.";
      return n;
  }
  else if(n == 12) {
      midday = "P.M.";
      return n;
  }
  else if(n > 12 && n < 22) {
      midday = "P.M.";
      return "0" + n % 12;
  }
  else if(n == 22 || n == 23) {
      midday = "P.M.";
      return n % 12;
  }
  else if(n == 0) {
      midday = "A.M."
      return n = 12;
  }

  return midday
}