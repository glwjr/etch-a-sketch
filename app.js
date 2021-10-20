const container = document.getElementById("container");

function createGrid(numCells) {
    container.style.gridTemplateColumns = `repeat(${numCells}, 1fr)`;
    for (let i = 0; i < numCells * numCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);

        cell.addEventListener("mouseover", () => handleHover(cell));

        const clearButton = document.getElementById("clear-button");
        clearButton.addEventListener("click", () => clearGrid(cell));
    }
}

function handleHover(cell) {
    cell.style.backgroundColor = "black";
}

function clearGrid(cell) {
    cell.style.backgroundColor = "white";
}

const resizeButton = document.getElementById("resize-button");
resizeButton.addEventListener("click", () => resize());

function resize() {
    let size = prompt("Please enter a number between 1-64.")

    if (parseInt(size) > 64) {
        alert("Please enter a number less than 65.")
        return
    } else {
        container.innerHTML = "";
        createGrid(size);
    }
}

createGrid(16);