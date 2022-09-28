//Display today's day and date
//importing them from moment.js
var todayEl = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayEl);