function add(thisBoxId) {
    const board = document.getElementById("board");
    let newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.id = thisBoxId;
    newBox.innerHTML = thisBoxId;
    board.appendChild(newBox);
}

function setUpBoard() {
    for(let i = 1; i <= 9; i++) {
        add(i);
    }
}