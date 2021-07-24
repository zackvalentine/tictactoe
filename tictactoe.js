const add = thisBoxId => {
    const board = document.getElementById("board");
    let newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.id = thisBoxId;
    newBox.innerHTML = thisBoxId;
    board.appendChild(newBox);
};

const setUpBoard = () => {
    for(let i = 1; i <= 9; i++) {
        add(i);
    }
};

document.addEventListener("DOMContentLoaded", setUpBoard);
