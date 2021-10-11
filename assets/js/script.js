var dateNow = moment().format("dddd, MMMM Do YYYY");

var displayToday = document.getElementById("currentDay");

displayToday.textContent = dateNow

var currentTime = moment().hours()

document.addEventListener('load', ()=>{
    document.getElementsById("#currentDay").display.innerHTML(dateNow)
    document.getElementsByClassName('.saveBtn').addEventListener('click', addUserInput());
});

let apptDetails = JSON.parse(localStorage.getItem("description"))

for (let i = 0; i <= 8; i++) {
    makeTimeSlot(i);
}

function makeTimeSlot() {
    $(".time-block").each(function(){
        var timeRow = parseInt($(this).attr("id"))
        if (currentTime > timeRow) {
            $(this).addClass("past")
        }
            else if (currentTime === timeRow) {
                $(this).addClass("present")
            }
            else $(this).addClass("future")
           
    })}
    
    makeTimeSlot()

$(".saveBtn").on("click", function(){
    var valueEl = $(this).siblings(".description").val()
    var timeEl = $(this).parent().attr("id") 
    var toDos = JSON.parse(window.localStorage.getItem("appointments")) || []
    toDos.push({time:timeEl, value:valueEl})
    window.localStorage.setItem("appointments", JSON.stringify(toDos))
})

var saved = JSON.parse(localStorage.getItem("appointments"))
$(".description").each(function(){
    var id =  $(this).parent().attr("id") 
    console.log(typeof id);
    for (let i=0; i < saved.length; i++){
        var element = saved[i]
        console.log(typeof id);
        if (id === element.time){
            $(this).text(element.value)
        }
    }

})
console.log(saved);

