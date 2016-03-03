
//Test to make sure javascript is loaded to the html correctly
// console.log("This works!");

//jQuery - loaded when html is done loading
$(document).ready(function() {
// console.log("jQuery works!");

  $('.generate-button').on('click', generateClick);
  // $('.generate-button').on('click', changeCounter);
  // $('.generate-button').on('click', changeCounter);
  $('.container').on('click', '.delete', deleteButton);
  $('.container').on('click', '.change', changeButton);

});
var buttonCounter = 0;


function generateClick() {
  // var buttonID = 0;
  // console.log(buttonCounter);
  // parseInt(buttonCounter);

  buttonCounter++;
  $('.container').append('<div class="new-button"></div>');
  var $el = $('.container').children().last();

  $el.append('<button class="delete">Delete</div');
  $el.append('<button class="change">Change</div');
  $el.append('<p>' + buttonCounter + '</p>')


  // $('.counter').replaceWith(buttonCounter);
  // console.log(buttonCounter);
  // return buttonCounter;

}

function deleteButton() {
  $(this).parent().remove();
}

function changeButton() {
  $(this).parent().toggleClass('highlight');
}

// function changeCounter() {
//   buttonCounter++;
//   // console.log(buttonCounter);
//   $('.counter').replaceWith(buttonCounter);
//   console.log(buttonCounter);
// }

//
