const container = document.getElementById("container");

var myTimer = null;

//Header & Timer hidden before start button clicked 
header.style.display = 'none';
time.style.display = 'none';

//Function that generates 6 x 6 grid 
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  header.style.display = 'block';
  time.style.display = 'block';
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.id = `${c}`;  //Give each cell a unique ID so that double-clicking one doesn't turn it black
    container.appendChild(cell).className = "grid-item";
  }
  generateColors();
  addClickListener();
  myTimer = startTimer();
}


var colors = ["blue", "red", "green", "orange", "purple", "gray"];

function generateColors() {
  var nonShuffledGridItems = $('div[class="grid-item"]');

  var shuffledGridItems = nonShuffledGridItems;

  shuffleArray(nonShuffledGridItems); //Calling shuffle function passing in the non

  for (var i = 0; i < shuffledGridItems.length; i += 2) { //Iterate loop by 2 because coloring two grid items
    var randomColor = Math.floor(Math.random() * colors.length);
    //Color box at index i and box i + 1 with the same random color 
    $(shuffledGridItems[i]).css('background-color', colors[randomColor]);
    $(shuffledGridItems[i + 1]).css('background-color', colors[randomColor]);
  }
};

//Function that shuffles 
function shuffleArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    let gridItem = arr[i];
    let newIndex = Math.floor(Math.random() * arr.length); //Random new index for the grid item 
    arr[i] = arr[newIndex];
    arr[newIndex] = gridItem;
  }
  return arr;
}

var firstClickedElement = null;
//Counter for the grid-items coloured black 
var blackCounter = 0;

var timeElapsed = 0;

function addClickListener() {
  // Function that changes background colour of the div to black
  $(".grid-item").on("click", function() {
    if ($(this)[0].style.backgroundColor === "black"){
    	return; //If the first of the two colours clicked is = black this is invalid input so isn't recognised 
    } else if (!firstClickedElement) {
        firstClickedElement = $(this)
        $("#header").text($(this)[0].style.backgroundColor.toUpperCase()); // because $(this).css("background-color") returns the rgb values
        $("#header").css("color", firstClickedElement.css("backgroundColor"));
    } else if (firstClickedElement.css("backgroundColor") === $(this).css("background-color") && ($(this).attr("id") !== firstClickedElement.attr("id"))) {
      $(this).css("background-color", "black");
      firstClickedElement.css("background-color", "black");
      $(firstClickedElement).css("background-color", "black");
      firstClickedElement = null;
      blackCounter += 2;
      if (blackCounter === 36){
        clearInterval(myTimer); //Once all 36 grid items have been coloured black stop the timer
        $("#header").text(`Game over. Time elapsed: ${timeElapsed} seconds.`)
        $("#header").css("color", "black");
      }
    }
  });
}

//function for starting the timer 
function startTimer() {
  return setInterval(function() {
    timeElapsed++;
    $("#timer").text(timeElapsed);
  }, 1000);
}

//Hides grid elements until click
function hideElements() {
  button.style.display = 'none';
}
