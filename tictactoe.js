let boxId = 0;

function add() {
    boxId++;
    let thisBoxId = boxId;
    const board = document.getElementById("board");
    let newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.id = thisBoxId;
    newBox.innerHTML = thisBoxId;
    board.appendChild(newBox);
}

function remove() {
    const board = document.getElementById("board");
    let children = document.querySelectorAll('.box');
    board.removeChild(children[children.length - 1]);
    boxId--;
}