/*
$(function (){

  ==== ADD EXTRA HOURS ===
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

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
