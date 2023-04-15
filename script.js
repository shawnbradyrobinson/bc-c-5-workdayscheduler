/*
$(function (){

  ==== ADD EXTRA HOURS === DONE
  All I should have to do is just extend the divs out to working hours in the html, and then remove the past, present, future classes until they are applied through the logic later down here...

=== DOCUMENT QUERY SELECTORS ===
var hourNineDiv = $("#hour-9");
var hourTenDiv = $("#hour-10");
//make ids in the html for the different save buttons 
var hourNineButton = $("#hour-9-button");



=== DISPLAY CURRENT DATE IN THE HEADER === 

Day.JS current date stuff from the class examples...

=== SAVE BUTTON CLICK EVENT LISTENER === 

What does `this` reference in the click listener function?
***RESEARCH 'this' jQuery click listener function***

***SLOW BUT SURE WAY***
hourNineButton.on(click, function(){

saveText(); //Save whatever value is currently in hour-9 div to local storage

})



How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked?

How might the id be useful when saving the description in local storage?

=== PAST, PRESENT, AND FUTURE COLOR CODING === 
***RESEARCH in Day.JS if there's a built in past, present, future method***

If not, we could assign some sort of value to a bunch of variables, one representing each id number, and then check to see if each variable is greater than or less than (current time) -- which will then set the color code. 


Get the current hour from Day.js in 24 hour time...

Use the id attribute of each time block to add or remove the classes...
***LOOK BACK AT CLASSWORK ON ADDING AND REMOVING CLASSES IN JQUERY***

=== USE LOCAL STORAGE TO SET CORRESPONDING TEXT AREAS, EVEN ON REFRESH === 
function saveText(){
  var nineAMSaved = getLocalStorage("hour-nine")

  nineAMSaved = hourNineDiv.val();  
}


***run the onRefresh at the start of the program***
function onRefresh(){
//might need a sentry check in her about:

if(nineAMSaved === null){
  return; 
}
etc...


setLocalStorage(nineAMSaved);
etc...
}



})

*/

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
 // === DOM OBJECTS ===
 // --- DIVS ---
  var currentDayDisplay = $("#currentDay");
  var hour7Div = $("#hour-7"); 
  var hour8Div = $("#hour-8"); 
  var hour9Div = $("#hour-9"); 
  var hour10Div = $("#hour-10"); 
  var hour11Div = $("#hour-11"); 
  var hour12Div = $("#hour-12"); 
  var hour1Div = $("#hour-1"); 
  var hour2Div = $("#hour-2"); 
  var hour3Div = $("#hour-3"); 
  var hour4Div = $("#hour-4"); 
  var hour5Div = $("#hour-5"); 
 // --- BUTTONS --- 
  var hour7Button = $("#hour-7-button");
  var hour8Button = $("#hour-8-button");
  var hour9Button = $("#hour-9-button");
  var hour10Button = $("#hour-10-button");
  var hour11Button = $("#hour-11-button");
  var hour12Button = $("#hour-12-button");
  var hour1Button = $("#hour-1-button");
  var hour2Button = $("#hour-2-button");
  var hour3Button = $("#hour-3-button");
  var hour4Button = $("#hour-4-button");
  var hour5Button = $("#hour-5-button");

 
 hour7Div.attr("class", "row time-block future");
 
 // === CURRENT TIME AND DATE === 
 setInterval (function(){
  var today = dayjs(); 
  currentDayDisplay.text(today.format("MMM D, YYYY  | HH:mm:ss A"));
 }, 1000);

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
