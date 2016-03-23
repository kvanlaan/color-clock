//Query Selectors
var body = document.querySelector("body")

///Color
var colorChange = document.createElement("div")
colorChange.setAttribute("id", "colorChange")
body.appendChild(colorChange)

// Clock
var date = document.createElement("div")
body.appendChild(date)
date.setAttribute("id", "clock")

//Border
var borderContainer = document.createElement("div")
borderContainer.setAttribute("id", "borderContainer")
var border = document.createElement("div")
border.setAttribute("id", "border")
var borderStyles = window.getComputedStyle(border)
body.appendChild(borderContainer)
borderContainer.appendChild(border)


///Hex type Div
var hex = document.createElement("div")
hex.setAttribute("id", "hex")
body.appendChild(hex)

//end query selectors

// updateTime function
function updateTime() {

    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    var currentTime = hours + ':' + minutes + ':' + seconds
    var myClock = document.getElementById('clock')

    myClock.innerHTML = currentTime

    //converting time to the hex value
    var hoursHex = hours.toString(16)
    var minutesHex = minutes.toString(16)
    var secondsHex = seconds.toString(16)
    var backgroundHex = '#' + hours + minutes + seconds
    hex.textContent = backgroundHex
        //setting the background color to the hex value
    colorChange.style.background = "radial-gradient(circle," + backgroundHex + ",rgba(0,0,0,.5))"

}

setInterval("updateTime()", 1000)

//Making the loading bar

var width = border.style.width

function updateTimeWidth() {
    var nowWidth = new Date()
    var secondsWidth = (nowWidth.getSeconds()) * 2
    border.style.width = secondsWidth + "px"
}

//kick things off!
setInterval("updateTimeWidth()", 2000)