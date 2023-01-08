// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeEl = $('#currentDay')
var btnEl = $('.btn')
var timeOfDayEl = $('.hour')
console.log(timeOfDayEl)
console.log(btnEl)


$(function update(){
  var time = dayjs().format('dddd, MMMM DD')
  $('#currentDay').text(time)
})


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 var emptyList = []
  btnEl.on('click',function(){
    // console.log(document.body.children[1].children);
    // console.log(btnEl.prevAll('div').children());
    // var timeBlockId = $(this).closest('.time-block').attr('id');
    // console.log(timeBlockId)
    // let userInput = $(this).siblings('.description').val();
    // console.log(userInput)
    // var todoList = $(this).siblings('.description').val();
    // localStorage.setItem('todoList', todoList)


    for (let i = 0; i < 9; i++) {
      var containerEl = $('.container').children().eq(i).children().eq(1);
      let text = containerEl.val();
      emptyList.push(text || "");
      console.log(emptyList);
      localStorage.clear();
      localStorage.setItem('todoList', JSON.stringify(emptyList))
      let savedList = JSON.parse(localStorage.getItem('todoList')) 
      console.log(savedList)
    }
  })
  // if (currentHour === btnEl.prevAll('div').html()){
    //   console.log('hello')
    // };
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
      // past, present, and future classes? How can Day.js be used to get the
      // current hour in 24-hour time?
      var currentHour = dayjs().format('H')
      console.log(currentHour)
      
      var arrayDiv = $('div').map(function() {
        return $(this).attr('id');
      }).get();
      
      
      console.log(arrayDiv)
      arrayDiv.forEach(function(element) {
        if (element == currentHour) {
          console.log('Match found');
          console.log(element);
          $('#' + element).addClass('present').removeClass('past');
        } else if (element > currentHour) {
          $('#' + element).addClass('future').removeClass('past');
        }  
        })
      
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
      var savedList = localStorage.getItem('description')
      $('#description').html(savedList);
      
      // TODO: Add code to display the current date in the header of the page.
      console.log(currentHour)
    });
    