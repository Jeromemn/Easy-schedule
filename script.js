// start by rendering blocks
//may have to break down into smaller steps
// create input for time slots
//save to local storage
// link current day and time
// create global vriables
// will need to json parse and stringify for data stored to local storage
// Global variables

// create an array for events, date,time, event
//const events = [] **add objects to array**

const currentTime = document.getElementById("time");
const dateEl = document.getElementById("date");
const { DateTime } = luxon; // using luxon to populate date and time
const eventType = $("eventType");
var dateInputEl = $("#datepicker");
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

  var eventType = eventType.val();
  var dateInputEl = dateInputEl.val();

  if (!eventType || !dateInput) {
    console.log("You need to fill out the form!");
    return;
  }

//     // want to submit to daily planner
//   //printSkills(nameInput, dateInput);

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

// function timeIdentifier() {
//   const scheduledEvents = JSON.parse(localStorage.getItem("events"));
//   for
// }

var timesOfDay = [
  '9:00AM',
  '10:00AM',
  '11:00AM',
  '12:00PM',
  '1:00PM',
  '2:00PM',
  '3:00PM',
  '4:00PM',
  '5:00PM',
];


for (var i = 0; i <timesOfDay.length; i++) {
  var timeFrame = $(`<div>`);
  timeFrame.text(timesOfDay[i]);
  if (!timeFrame === theTimeIs) {
  timeFrame.addClass(`past`);
  }

  
// establish parent ** add type and data for time in event zone
var rootEl = $(`#root`);
//first child element 
var timeblock = $(`<div>`);
timeblock.addClass(`timeblock row`);
//var timeFrame = $(`<time>`);
timeFrame.addClass(`hour`);
// timeFrame.text(timeOfDay[i]);
var eventZone = $(`<input>`);
eventZone.addClass(`past grow`);
eventZone.addClass(``);
eventZone.attr(`type`, `text`);
//eventZone.css('border textarea');
// eventZone.addClass(`ifTime`, `textarea`);
var editHourEvent = $(`<button>`);
editHourEvent.addClass(`saveBtn`)
timeblock.append(timeFrame, eventZone, editHourEvent);
rootEl.append(timeblock);

if timeFrame =

}




// let nineAm = $(`<timeblock>`);
// nineAm.text(` 9:00AM`);
// nineAm.addClass(`row`);
// rootEl.append(nineAm);

// do for daily layout
// $('#btn').on('click', function(){

//   var today = $('planner').val()
//   console.log(today)
//   var todo = $('#eventType').val();
//   console.log(todo)
//   localStorage.setItem('9am', todo)
// })
// //****

// var todo = localStorage.getItem(`9am`)
// $('#eventType').val(todo)

