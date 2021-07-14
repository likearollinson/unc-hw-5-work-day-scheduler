$("#currentDay").text(moment().format("MMMM Do, YYYY"));

//Change timeblock text area background color based on time
var checkTime = function () {
    //get Current time
    var currentTime = moment().format('HH');
    //below is code to manipulate currentTime for testing purposes
    // var currentTime = 13

    //get all elements with class "text"
    var timeBlockEl = $(".timeblockText");
    for (var i = 0 ; i < timeBlockEl.length ; i++) {
        //iterate through each time block element
        var timeBlock = i + 8;
        //get element by ID
        var findEl = document.getElementById(timeBlockEl[i].id)
        //remove any old classes from element
        $(timeBlockEl[i].id).removeClass(".present .past .future");
        //apply new class if task is present/past/future
        if (timeBlock < currentTime) {
            $(findEl).addClass("past");
        } else if (timeBlock > currentTime) {
            $(findEl).addClass("future");
        } else {
            $(findEl).addClass("present");
        }
    }
}
//check currentTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

var eightEl = $("#textEight").val();
var nineEl = $("#textNine");
var tenEl = $("#textTen");
var elevenEl = $("#textEleven");
var twelveEl = $("#textTwelve");
var oneEl = $("#textOne");
var twoEl = $("#textTwo");
var threeEl = $("#textThree");
var fourEl = $("#textFour");

function renderText() {
    var eightText = localStorage.getItem("eightText");
    var nineText = localStorage.getItem("nineText");
    var tenText = localStorage.getItem("tenText");
    var elevenText = localStorage.getItem("elevenText");
    var twelveText = localStorage.getItem("twelveText");
    var oneText = localStorage.getItem("oneText");
    var twoText = localStorage.getItem("twoText");
    var threeText = localStorage.getItem("threeText");
    var fourText = localStorage.getItem("fourText");

    if (!eightText || !nineText || !tenText || !elevenText || !twelveText || !oneText || !twoText || !threeText || !fourText)
        return;
    
    eightEl.text(eightText);
    nineEl.text(nineText);
    tenEl.text(tenText);
    elevenEl.text(elevenText);
    twelveEl.text(twelveText);
    oneEl.text(oneText);
    twoEl.text(twoText);
    threeEl.text(threeText);
    fourEl.text(fourText);
};

var saveButton = $(".saveBtn")

saveButton.click (function(event) {
    event.preventDefault();

    var eightText = eightEl.value;
    var nineText = nineEl.value;
    var tenText = tenEl.value;
    var elevenText = elevenEl.value;
    var twelveText = twelveEl.value;
    var oneText = oneEl.value;
    var twoText = twoEl.value;
    var threeText = threeEl.value;
    var fourText = fourEl.value;

    localStorage.setItem("eightText", eightText);
    localStorage.setItem("nineText", nineText);
    localStorage.setItem("tenText", tenText);
    localStorage.setItem("elevenText", elevenText);
    localStorage.setItem("twelveText", twelveText);
    localStorage.setItem("oneText", oneText);
    localStorage.setItem("twoText", twoText);
    localStorage.setItem("threeText", threeText);
    localStorage.setItem("fourText", fourText);
    renderText();
});