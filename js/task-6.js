function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//const heading = document.createElement("h1");
//heading.textContent = "heading"; 
//boxes.append(heading);

const input = document.querySelector(".input");

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");




function createBoxes(amount) {
  const boxesDiv = document.querySelector("#boxes");
  boxesDiv.innerHTML = "";

  const boxes = [];
  for (let i = 0; i < amount; i++) {
   const box = document.createElement("div") 
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginRight = "44px";
    boxes.push(box);
  }
  
  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  const boxesDiv = document.querySelector("#boxes");
  boxesDiv.innerHTML = "";
}

buttonCreate.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  //console.log(amount);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    console.log("Please enter a number between 1 and 100")
  }
})

buttonDestroy.addEventListener("click", destroyBoxes);