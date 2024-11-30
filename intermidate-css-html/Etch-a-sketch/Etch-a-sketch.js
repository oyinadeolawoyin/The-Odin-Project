let columns = document.querySelector("#columns");

for (i = 0; i < 16; i++) {
  let column_div = document.createElement("div");
  column_div.classList.add("class_column");
  columns.appendChild(column_div);

  for (j = 0; j < 16; j++) {
    let rows = document.createElement("div");
    rows.classList.add("class_rows");
    column_div.appendChild(rows);
  }
}

hoverColour();

function hoverColour() {
  // Get all elements with the class "class_rows"
  let rowsHover = document.querySelectorAll(".class_rows");

  // Add event listener to each "class_rows" div
  rowsHover.forEach(function (row) {
    row.addEventListener("mouseup", function () {
      row.style.backgroundColor = "black";
    });
  });

  return rowsHover;
}

function creatGridSize(num) {
  const userGrid = document.querySelector("#columns");
  const totalWidth = userGrid.offsetWidth;
  const totalHeight = userGrid.offsetHeight;

  // Calculate the size of each square
  const squareWidth = totalWidth / num;
  console.log(squareWidth);

  const squareHeight = totalHeight / num;
  console.log(squareHeight);
  userGrid.innerHTML = "";
  for (i = 0; i < num; i++) {
    let my_div = document.createElement("div");
    my_div.classList.add("class_column");
    userGrid.appendChild(my_div);

    for (j = 0; j < num; j++) {
      let my_rows = document.createElement("div");
      my_rows.classList.add("class_rows");
      my_rows.style.width = squareWidth + "px";
      my_rows.style.height = squareHeight + "px";
      my_div.appendChild(my_rows);
    }
  }

  hoverColour();

  return userGrid;
}

let squares = document.querySelector("#squares");
squares.addEventListener("mouseup", () => {
  squares.style.backgroundColor = "2px solid black";
  let myQuestion = prompt("Grid number per side:");
  let userGrid = parseInt(myQuestion);
  if (userGrid > 100) {
    alert("Enter number less than 100.");
  } else if (!isNaN(userGrid)) {
    creatGridSize(userGrid);
  } else {
    alert("Enter a valid number");
  }
});

let eraser = document.querySelector("#eraser");
eraser.addEventListener("mouseup", () => {
  let rowsHover = document.querySelectorAll(".class_rows");
  rowsHover.forEach(function (row) {
    row.addEventListener("mouseover", function () {
      row.style.backgroundColor = "whiteSmoke";
    });
  });
});

let clear = document.querySelector("#clear");
clear.addEventListener("mouseup", () => {
  let changeColor = document.querySelectorAll(".class_rows");
  changeColor.forEach(function (row) {
    row.style.backgroundColor = "whiteSmoke";
  });
});

let crayon = document.querySelector("#crayon");
crayon.addEventListener("mouseup", () => {
  let color = prompt("Your Crayon. Enter colour:");
  let button = document.createElement("button");
  button.style.background = color;
  crayon.appendChild(button);
  let crayonHover = document.querySelectorAll(".class_rows");
  // Add event listener to each "class_rows" div
  crayonHover.forEach(function (row) {
    row.addEventListener("mouseup", function () {
      row.style.backgroundColor = color;
    });
  });
});
