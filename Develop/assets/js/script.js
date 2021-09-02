var today = moment();
var hour = $(".hour")

// This grabs the date for the top of the screen
$("#currentDay").text(today.format("MMMM Do YYYY"));

$(document).ready(function() {
     // this function colors the timeblocks depending on what time it is currently
    // (named the function fortuneTeller because it knows the past, present, and future)
    function fortuneTeller() {
        var currentHour = today.hour();
        $(".field").each(function () {
            var rowHour = parseInt($(this).attr("data-hour"));
            $(this).val(localStorage.getItem(rowHour));
            console.log(rowHour)
            console.log(currentHour)
            if (currentHour < rowHour) {
                $(this).addClass("future");
            } else if (currentHour > rowHour) {
                $(this).addClass("past");
            } else if (currentHour === rowHour) {
                console.log("reached")
                $(this).addClass("present");
            }
        })
    }
    fortuneTeller();
});

// this function allows what is typed in the text field to be remembered and remain when page refreshes
function storageSave() {
    var value = $(this).prev().val()
    var key = $(this).prev().attr("data-hour")
    localStorage.setItem(key, value);
}
$(".saveBtn").on("click", storageSave);
 