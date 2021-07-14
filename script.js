$("#currentDay").text(moment().format("MMMM Do, YYYY"));

//Change timeblock text area background color based on time
var checkTime = function () {
    //get Current time
    var currentTime = moment().format('HH');
    //below is code to manipulate currentTime for testing purposes
    // var currentTime = 13

    //get all elements with class "text"
    var timeblockEl = $(".timeblockText");
    for (var i = 0 ; i < timeblockEl.length ; i++) {
        //iterate through each time block element
        var timeblock = i + 8;
        //get element by ID
        var findEl = document.getElementById(timeblockEl[i].id)
        //remove any old classes from element
        $(timeblockEl[i].id).removeClass(".present .past .future");
        //apply new class if task is present/past/future
        if (timeblock < currentTime) {
            $(findEl).addClass("past");
        } else if (timeblock > currentTime) {
            $(findEl).addClass("future");
        } else {
            $(findEl).addClass("present");
        }
    }
}
//check currentTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

var eightEl = $("#textEight");
var nineEl = $("#textNine");
var tenEl = $("#textTen");
var elevenEl = $("#textEleven");
var twelveEl = $("#textTwelve");
var oneEl = $("#textOne");
var twoEl = $("#textTwo");
var threeEl = $("#textThree");
var fourEl = $("#textFour");


function renderText() {
    var eightText1 = localStorage.getItem("eightText");
    var nineText1 = localStorage.getItem("nineText");
    var tenText1 = localStorage.getItem("tenText");
    var elevenText1 = localStorage.getItem("elevenText");
    var twelveText1 = localStorage.getItem("twelveText");
    var oneText1 = localStorage.getItem("oneText");
    var twoText1 = localStorage.getItem("twoText");
    var threeText1 = localStorage.getItem("threeText");
    var fourText1 = localStorage.getItem("fourText");

    if (!eightText1 || !nineText1 || !tenText1 || !elevenText1 || !twelveText1 || !oneText1 || !twoText1 || !threeText1 || !fourText1)
        return;
    
    eightEl.text(eightText1);
    nineEl.text(nineText1);
    tenEl.text(tenText1);
    elevenEl.text(elevenText1);
    twelveEl.text(twelveText1);
    oneEl.text(oneText1);
    twoEl.text(twoText1);
    threeEl.text(threeText1);
    fourEl.text(fourText1);
};

saveButton = $(".saveBtn");

saveButton.click (function(event) {
    event.preventDefault();

    var eightText = eightEl.val().trim();
    var nineText = nineEl.val().trim();
    var tenText = tenEl.val().trim();
    var elevenText = elevenEl.val().trim();
    var twelveText = twelveEl.val().trim();
    var oneText = oneEl.val().trim();
    var twoText = twoEl.val().trim();
    var threeText = threeEl.val().trim();
    var fourText = fourEl.val().trim();

    console.log(eightText);

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

renderText();