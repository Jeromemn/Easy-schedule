// start by rendering blocks
//may have to break down into smaller steps
// create input for time slots
//save to local storage
// link current day and time
// create global vriables
// will need to json parse and stringify for data stored to local storage
// Global variables

const currentTime = document.getElementById("time");
const dateEl = document.getElementById("date");
const { DateTime } = luxon; // using luxon to populate date and time
const eventType = $("eventType");
var dateInputEl = $("#datepicker");
var formEl = $("#skills-form");
const schedule = $("#scheduler");

// get todays date
const todaysDate = DateTime.now().toLocaleString(DateTime.DATE_HUGE);
console.log(todaysDate);
dateEl.textContent = todaysDate;
// get current time
const theTimeIs = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);
currentTime.textContent = theTimeIs;

var eventSubmitForm = function (event) {
  event.preventDefault();

  var eventInput = eventType.val();
  var dateInput = dateInputEl.val();

  if (!eventInput || !dateInput) {
    console.log("You need to fill out the form!");
    return;
  }
    // want to submit to daily planner for that date
  //printSkills(nameInput, dateInput);

  eventType.val("");
  dateInputEl.val("");
};

schedule.on("submit", eventSubmitForm);

$(function () {
  $("#datepicker").datepicker({
    // changeMonth: true,
    //changeYear: true,
  });
});
