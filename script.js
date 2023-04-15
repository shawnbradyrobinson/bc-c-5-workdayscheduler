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

OR...fancier...
function saveText(hour){

  console.log($("#hour-"+hour+"-text").val());
  
  
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
 // --- MAIN CONTAINER --- 
  var mainContainer = $("#main-container");
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
  // --- TEXT AREAS --- 
  var hour7Text = $("#hour-7-text");
  var hour8Text = $("#hour-8-text");
  var hour9Text = $("#hour-9-text");
  var hour10Text = $("#hour-10-text");
  var hour11Text = $("#hour-11-text");
  var hour12Text = $("#hour-12-text");
  var hour1Text = $("#hour-1-text");
  var hour2Text = $("#hour-2-text");
  var hour3Text = $("#hour-3-text");
  var hour4Text = $("#hour-4-text");
  var hour5Text = $("#hour-5-text");

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

 // === LOCAL STORAGE VARIABLES ===
  var hour7Saved = localStorage.getItem("HOUR_7");
  var hour8Saved = localStorage.getItem("HOUR_8");
  var hour9Saved = localStorage.getItem("HOUR_9");
  var hour10Saved = localStorage.getItem("HOUR_10");
  var hour11Saved = localStorage.getItem("HOUR_11");
  var hour12Saved = localStorage.getItem("HOUR_12");
  var hour1Saved = localStorage.getItem("HOUR_1");
  var hour2Saved = localStorage.getItem("HOUR_2");
  var hour3Saved = localStorage.getItem("HOUR_3");
  var hour4Saved = localStorage.getItem("HOUR_4");
  var hour5Saved = localStorage.getItem("HOUR_5");
 // === TIME VARIABLES === 
//  var hour7Time = dayjs.get("date").set("hour", 7);
//  var hour8Time = dayjs(8);
 
 // === CURRENT TIME AND DATE === 
 setInterval (function(){
  var today = dayjs(); 
  currentDayDisplay.text(today.format("MMM D, YYYY  | hh:mm:ss A"));
 }, 1000);

 // === COLOR CODED TIME === 
// --- 7 AM ---
if (dayjs().isBefore(dayjs().hour("7"))){
  hour7Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("7"))){
  hour7Div.attr("class", "row time-block present");
} else {
  hour7Div.attr("class", "row time-block past");
}
// --- 8 AM ---
if (dayjs().isBefore(dayjs().hour("8"))){
  hour8Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("8"))){
  hour8Div.attr("class", "row time-block present");
} else {
  hour8Div.attr("class", "row time-block past");
}
// --- 9 AM --- 
if (dayjs().isBefore(dayjs().hour("9"))){
  hour9Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("9"))){
  hour9Div.attr("class", "row time-block present");
} else {
  hour9Div.attr("class", "row time-block past");
}
// --- 10 AM --- 
if (dayjs().isBefore(dayjs().hour("10"))){
  hour10Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("10"))){
  hour10Div.attr("class", "row time-block present");
} else {
  hour10Div.attr("class", "row time-block past");
}

// --- 11 AM --- 
if (dayjs().isBefore(dayjs().hour("11"))){
  hour11Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("11"))){
  hour11Div.attr("class", "row time-block present");
} else {
  hour11Div.attr("class", "row time-block past");
}

// --- 12 PM --- 
if (dayjs().isBefore(dayjs().hour("12"))){
  hour12Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("12"))){
  hour12Div.attr("class", "row time-block present");
} else {
  hour12Div.attr("class", "row time-block past");
}

// --- 1 PM --- 
if (dayjs().isBefore(dayjs().hour("13"))){
  hour1Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("13"))){
  hour1Div.attr("class", "row time-block present");
} else {
  hour1Div.attr("class", "row time-block past");
}

// --- 2 PM --- 
if (dayjs().isBefore(dayjs().hour("14"))){
  hour2Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("14"))){
  hour2Div.attr("class", "row time-block present");
} else {
  hour2Div.attr("class", "row time-block past");
}

// --- 3 PM --- 
if (dayjs().isBefore(dayjs().hour("15"))){
  hour3Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("15"))){
  hour3Div.attr("class", "row time-block present");
} else {
  hour3Div.attr("class", "row time-block past");
}

// --- 4 PM --- 
if (dayjs().isBefore(dayjs().hour("16"))){
  console.log("4 pm is still coming up");
  hour4Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs("04:00:00 PM", "hour"))){
  console.log("It's 4 right now");
  hour4Div.attr("class", "row time-block present");
} else {
  console.log("4 pm has already happened");
  hour4Div.attr("class", "row time-block past");
}

// --- 5 PM --- 
if (dayjs().isBefore(dayjs().hour("17"))){
  hour5Div.attr("class", "row time-block future");
} else if (dayjs().isSame(dayjs().hour("17"))){
  hour5Div.attr("class", "row time-block present");
} else if(dayjs().isAfter(dayjs().hour("17"))) {
  hour5Div.attr("class", "row time-block past");
}

// === SAVE BUTTON === 

 hour7Button.on("click", function(){
  alert("Data saved!");
  console.log(hour7Text.val());
  localStorage.setItem("HOUR_7", hour7Text.val());

 })

 hour8Button.on("click", function(){
  console.log(hour8Text.val());
  localStorage.setItem("HOUR_8", hour8Text.val());
 })

 hour9Button.on("click", function(){
  console.log(hour9Text.val());
  localStorage.setItem("HOUR_9", hour9Text.val());
 })

 hour10Button.on("click", function(){
  console.log(hour10Text.val());
  localStorage.setItem("HOUR_10", hour10Text.val());
 })
 
 hour11Button.on("click", function(){
  console.log(hour11Text.val());
  localStorage.setItem("HOUR_11", hour11Text.val());
 })

 hour12Button.on("click", function(){
  console.log(hour12Text.val());
  localStorage.setItem("HOUR_12", hour12Text.val());
 })

 hour1Button.on("click", function(){
  console.log(hour1Text.val());
  localStorage.setItem("HOUR_1", hour1Text.val());
 })

 hour2Button.on("click", function(){
  console.log(hour2Text.val());
  localStorage.setItem("HOUR_2", hour2Text.val());
 })
 
 hour3Button.on("click", function(){
  console.log(hour3Text.val());
  localStorage.setItem("HOUR_3", hour3Text.val());
 })

 hour4Button.on("click", function(){
  console.log(hour4Text.val());
  localStorage.setItem("HOUR_4", hour4Text.val());
 })
 
 hour5Button.on("click", function(){
  console.log(hour5Text.val());
  localStorage.setItem("HOUR_5", hour5Text.val());
 })


 
 function persistItems(){
  hour7Text.text(hour7Saved);
  hour8Text.text(hour8Saved);
  hour9Text.text(hour9Saved);
  hour10Text.text(hour10Saved);
  hour11Text.text(hour11Saved);
  hour12Text.text(hour12Saved);
  hour1Text.text(hour1Saved);
  hour2Text.text(hour2Saved);
  hour3Text.text(hour3Saved);
  hour4Text.text(hour4Saved);
  hour5Text.text(hour5Saved);

 }
 
 persistItems();
 
 
 
 
 
 
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
