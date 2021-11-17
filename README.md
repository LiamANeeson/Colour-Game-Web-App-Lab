# MSc-Web-App-Lab_2-
Code for Lab 2 of Web Applications Architecture Module. JavaScript, HTML and CSS.


Develop an interactive webpage for a children’s colour learning game. 
The game consists in having a grid with multiple colours and a panel where a colour name will be presented; 
the child will click a cell in the grid and that cell’s colour name will be presented in a panel above. 
Once a cell has been clicked, it will become black. When all cells are black, the game is over. 
The child will want to click all the cells in the shortest amount of time. 

1.	When the user enters the page, it will present a “Start” button. 

2.	User clicks ‘start’: 
  •	A grid of 6x6 cells is created
  •	The grid should be generated dynamically, using JavaScript/jQuery. Do not place it statically in the HTML 
  •	Each cell is assigned a random colour, between blue, red, green, orange, purple and gray. 
  •	A timer will start showing the elapsed time 
  •	The “Start” button is hidden. 

3.User clicks a cell, that colour’s name will be displayed in a panel above the grid, using that very same colour in the text’s style.

4.User clicks the same colour, both cells ‘a match’ will become black.

5.	The child will keep clicking the cells, and their colour names to be displayed above, until all cells have been clicked and are black.

6.	When the game is over, the colour name panel will display: “Game Over - 58 seconds” (The total time taken to complete the game)

