//Display today's day and date
var todayEl = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayEl);


// browser loads HTML and CSS first and then runs this
$(document).ready(function () {
    //saving information into local storage
    $(".saveBtn").on("click", function () {
        console.log("button clicked");
        
        //get nearby values in jquery
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        console.log(time);
        console.log(text);

        // set time and text on local storage
        localStorage.setItem(time,text);

    })
});
    
    //check what time it is
    // if actual time is more than timeblock then give past attributes
    // if present time equals timeblock then give presen attribute
    // if present time is less than time block then give timeblock attribute of future



    //when i reload the page items from local storage are pulled down