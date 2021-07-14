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

    $("#blockEight").text(eightText);
    $("#blockNine").text(nineText);
    $("#blockTen").text(tenText);
    $("#blockEleven").text(elevenText);
    $("#blockTwelve").text(twelveText);
    $("#blockOne").text(oneText);
    $("#blockTwo").text(twoText);
    $("#blockThree").text(threeText);
    $("#blockFour").text(fourText);
};

saveButton = $(".saveBtn");

saveButton.click (function(event) {
    event.preventDefault();

    var eightText = $("#blockEight").val().trim();
    var nineText = $("#blockNine").val().trim();
    var tenText = $("#blockTen").val().trim();
    var elevenText = $("#blockEleven").val().trim();
    var twelveText = $("#blockTwelve").val().trim();
    var oneText = $("#blockOne").val().trim();
    var twoText = $("#blockTwo").val().trim();
    var threeText = $("#blockThree").val().trim();
    var fourText = $("#blockFour").val().trim();

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