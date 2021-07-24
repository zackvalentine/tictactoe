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