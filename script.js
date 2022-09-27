$(document).ready(function () {
  const currentTime = document.getElementById("time");
  const dateEl = document.getElementById("date");
  const { DateTime } = luxon; // using luxon to populate date and time

  // get todays date
  const todaysDate = DateTime.now().toLocaleString(DateTime.DATE_HUGE);

  dateEl.textContent = todaysDate;
  // get current time
  const theTimeIs = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);
  currentTime.textContent = theTimeIs;
  // Additional function datepicker for scheduling different dates to be added
  // $(function () {
  //   $("#datepicker").datepicker({
  //     // changeMonth: true,
  //     //changeYear: true,
  //   });
  // });

  var timesOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  for (var i = 0; i < timesOfDay.length; i++) {
    var timeFrame = $(`<div>`);
    var timeblock = $(`<div>`);
    let currentHour = DateTime.now().hour;

    timeFrame.text(
      DateTime.now()
        .set({ hour: timesOfDay[i], minute: 0 })
        .toLocaleString(DateTime.TIME_SIMPLE)
    );
    if (timesOfDay[i] < currentHour) {
      timeFrame.addClass(`past`);
    } else if (timesOfDay[i] > currentHour) {
      timeFrame.addClass(`future`);
    } else if ((timesOfDay[i] = currentHour)) {
      timeFrame.addClass(`present`);
    }

    var rootEl = $(`#root`);
    
    var timeblock = $(`<div>`);
    timeblock.addClass(`timeblock row`);
    timeFrame.addClass(`hour`);
    let eventZone = $(`<input>`);
    // gets scheduledEvents from local storage
    const scheduledEvents = JSON.parse(
      localStorage.getItem("scheduled-events")
    );

    // because scheduledEvents will be null the first time, we need to handle this..
    // set an empty var
    let value;

    // if scheduledEvents is true and a value is stored for that hour
    if (scheduledEvents && scheduledEvents[timesOfDay[i]]) {
      // set the value to what is in local storage
      value = scheduledEvents[timesOfDay[i]];
    } else {
      // otherwise we will just set empty
      value = "";
    }
    eventZone.val(value);
    eventZone.addClass(`past grow`);
    eventZone.addClass(``);
    eventZone.attr(`type`, `text`);
    eventZone.attr(`data-hour`, timesOfDay[i]);
    var editHourEvent = $(`<button>`);
    editHourEvent.addClass(`saveBtn`);
    editHourEvent.text(`+`);
    editHourEvent.attr(`data-hour`, timesOfDay[i]);
    editHourEvent.click(saveEvent);
    timeblock.append(timeFrame, eventZone, editHourEvent);
    rootEl.append(timeblock);
  }

  function saveEvent(event) {
    const hour = $(event.target).attr("data-hour");
    const input = $(`input[data-hour=${hour}]`).val();

    const scheduledEvents = JSON.parse(
      localStorage.getItem("scheduled-events")
    );

    if (!scheduledEvents) {
      localStorage.setItem(
        "scheduled-events",
        JSON.stringify({ [hour]: input })
      );
      return;
    } ///spread operator "..." takes contents of object and
    localStorage.setItem(
      "scheduled-events",
      JSON.stringify({ ...scheduledEvents, [hour]: input })
    );
  }
});
