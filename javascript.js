const container = document.getElementById('container');


let x = 16;
const button = document.querySelector('button');
button.addEventListener('click', (x) => {
    const userInput = prompt('Please write a number');
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    else if (userInput !== null) {
        x = parseInt(userInput);
    }
    createGrid(x);
});

function createGrid(x) {
    container.innerHTML = '';
    for (i = 0; i < x; i++) {
        for (j = 0; j < x; j++) {
            const grid = document.createElement('div');
            grid.id = ('grid');
            grid.textContent = 'a';
            container.appendChild(grid);

            grid.addEventListener("mouseenter", function () {
                grid.style.background = "green";
            });
            grid.addEventListener("mouseleave", function () {
                grid.style.background = "white";
            })
        }
    }
}
createGrid(x);

// document.getElementById("grid").addEventListener("mouseenter", mouseEnter);
// document.getElementById("grid").addEventListener("mouseleave", mouseLeave);

// function mouseEnter() {
//     document.getElementById("grid").style.backgroundcolor = "red";
// }

// function mouseLeave() {
//     document.getElementById("grid").style.color = "green";
// }

