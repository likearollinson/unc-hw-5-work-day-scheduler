//show current day in jumbotron
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

//change timeblock text area background color based on time
var checkTime = function () {
    //get current time
    var currentTime = moment().format('HH');
    //below is code to manipulate currentTime for testing purposes
    // var currentTime = 13

    //get all elements with class "text"
    var timeblockEl = $(".timeblockText");
    //iterate through each timeblock element
    for (var i = 0 ; i < timeblockEl.length ; i++) {
        //create variable time block that represents each timeblock based on iteration
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

//function for rendering the text for the timeblocks
function renderText() {
    //sets variable that returns local storage value based on key
    var eightText = localStorage.getItem("eightText");
    var nineText = localStorage.getItem("nineText");
    var tenText = localStorage.getItem("tenText");
    var elevenText = localStorage.getItem("elevenText");
    var twelveText = localStorage.getItem("twelveText");
    var oneText = localStorage.getItem("oneText");
    var twoText = localStorage.getItem("twoText");
    var threeText = localStorage.getItem("threeText");
    var fourText = localStorage.getItem("fourText");
    //sets timeblock text to text from local storage
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

click event that allows for the saving of text for textblocks
$(".saveBtn").click (function(event) {
    event.preventDefault();
    //sets local storage to value in in text box
    localStorage.setItem("eightText", $("#blockEight").val().trim());
    localStorage.setItem("nineText", $("#blockNine").val().trim());
    localStorage.setItem("tenText", $("#blockTen").val().trim());
    localStorage.setItem("elevenText", $("#blockEleven").val().trim());
    localStorage.setItem("twelveText", $("#blockTwelve").val().trim());
    localStorage.setItem("oneText", $("#blockOne").val().trim());
    localStorage.setItem("twoText", $("#blockTwo").val().trim());
    localStorage.setItem("threeText", $("#blockThree").val().trim());
    localStorage.setItem("fourText", $("#blockFour").val().trim());
    //calls rendertext function 
    renderText();
});

renderText();