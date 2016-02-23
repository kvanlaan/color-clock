
//Body
var body = document.querySelector("body")
///Color
var colorChange = document.createElement("div")
colorChange.setAttribute("id", "colorChange")
body.appendChild(colorChange)

/// Border

var borderContainer = document.createElement("div")

borderContainer.setAttribute("id", "borderContainer")

var border = document.createElement("div")

border.setAttribute("id", "border")

var borderStyles = window.getComputedStyle(border)
body.appendChild(borderContainer)
borderContainer.appendChild(border)

/// Clock
var date = document.createElement("div")

body.appendChild(date)

date.setAttribute("id", "clock")


///Hex type Div
var hex = document.createElement("div")

hex.setAttribute("id", "hex")

body.appendChild(hex)

/// updateTime 
  function updateTime() { 

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var currentTime = hours + ':' + minutes + ':' + seconds;    
    var myClock = document.getElementById('clock');
    
    myClock.innerHTML = currentTime;

    // converting time into hex value
    var hoursHex = hours.toString(16)
    var minutesHex = minutes.toString(16)
    var secondsHex = seconds.toString(16)
    var backgroundHex = '#' + hours + minutes + seconds
    hex.textContent = backgroundHex
	colorChange.style.backgroundColor = backgroundHex
}


 setInterval("updateTime()", 1000)

///// Border

var width = border.style.width

function updateTimeWidth() { 
	var nowWidth = new Date()
	var secondsWidth = (nowWidth.getSeconds()) * 2
	border.style.width = secondsWidth + "px"
}
  

setInterval("updateTimeWidth()", 2000)

///


