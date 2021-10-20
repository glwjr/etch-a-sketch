const container = document.getElementById("container");

function createGrid(numCells) {
    container.style.gridTemplateColumns = `repeat(${numCells}, 1fr)`;
    for (let i = 0; i < numCells * numCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);

        cell.addEventListener("mouseover", () => handleHover(cell));
    }
}

function handleHover(cell) {
    cell.style.backgroundColor = "black";
}

createGrid(16);