var currentDayEl = $("#currentDay");
var today = moment();

currentDayEl.text(today.format("MMMM Do, YYYY"));

//Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    // var currentTime = moment().format('HH');
    var currentTime = 08

    //get all elements with class "taskarea"
    var timeBlockEl = $(".text");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockEl.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockEl[i].id;

        //get element by ID
        var changeID = document.getElementById(timeBlockEl[i].id)

        //remove any old classes from element
        $(timeBlockEl[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(changeID).addClass("past");
        } else if (elementID > currentTime) {
            $(changeID).addClass("future");
        } else {
            $(changeID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

eightEl = $("#time08");
nineEl = $("#time09");
tenEl = $("#time10");
elevenEl = $("#time11");
twelveEl = $("#time12");
oneEl = $("#time01");
twoEl = $("#time02");
threeEl = $("#time03");
fourEl = $("#time04");

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
}

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