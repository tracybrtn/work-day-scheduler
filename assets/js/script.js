//Display today's day and date
var todayEl = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayEl);


// browser loads HTML and CSS first and then runs this
$(document).ready(function () {
    //saving information into local storage
    $(".saveBtn").on("click", function () {
        console.log("button clicked");
        
        //get nearby values in jquery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // set time and text on local storage
        localStorage.setItem(time,text);
    });

    function timeTracker() {
        //check what time it is
        var currentTime = moment().hour()

        //loop
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("00"))

            //Add or remove classes depending on time
            // if current time is greater than time block then give it past class
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");

            // if current time is equal than time block then give it present class
            } else if (timeBlock === currentTime) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");

            // if current time is lesser than time block then give it future class
            } else if (timeBlock > currentTime) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");

            // will leave this here since moment.js is now legacy
            } else {
                console.log('time tracker error');
            }
        })
    }

    //get items from local storage, if any
    $("#0900 .description").val(localStorage.getItem("0900"));
    $("#1000 .description").val(localStorage.getItem("1000"));
    $("#1100 .description").val(localStorage.getItem("1100"));
    $("#1200 .description").val(localStorage.getItem("1200"));
    $("#1300 .description").val(localStorage.getItem("1300"));
    $("#1400 .description").val(localStorage.getItem("1400"));
    $("#1500 .description").val(localStorage.getItem("1500"));
    $("#1600 .description").val(localStorage.getItem("1600"));
    $("#1700 .description").val(localStorage.getItem("1700"));

    //Call time tracker function after everything has been loaded
    timeTracker();
})