let turnCounter = 0;
let player1 = [];
let player2 = [];

const add = thisBoxId => {
    const board = document.getElementById("board");
    let newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.id = thisBoxId;
    newBox.onclick = () => {
        turnCounter++;
        if(turnCounter % 2 == 1) {
            newBox.innerHTML = "X";
            player1.push(thisBoxId);
        } else {
            newBox.innerHTML = "O";
            player2.push(thisBoxId);
        }
    }
    board.appendChild(newBox);
};

const setUpBoard = () => {
    for(let i = 1; i <= 9; i++) {
        add(i);
    }
};

const showWinner = () => {
    const board = document.getElementById('board');
    let isPlayer1Winner = checkForWinner(player1);
    let isPlayer2Winner = checkForWinner(player2);
    if(isPlayer1Winner) {
        board.innerHTML = "Player 1 Wins!"
    } else if(isPlayer2Winner) {
        board.innerHTML = "Player 2 Wins!"
    } else {
        board.innerHTML = "No Winner"
    }
}

const checkForWinner = player => {
    return isWinnerHorizontal(player)
        || isWinnerVertical(player)
        || isWinnerDiagonal(player);
}

const isWinnerHorizontal = player => {
    for(let i = 1; i <= 7; i += 3) {
        if (player.includes(i)
        && player.includes(i + 1)
        && player.includes(i + 2)) {
            return true;
        }
    }
    return false;
}

const isWinnerVertical = player => {
    for(let i = 1; i <= 3; i++) {
        if (player.includes(i)
        && player.includes(i + 3)
        && player.includes(i + 6)) {
            return true;
        }
    }
    return false;
}

const isWinnerDiagonal = player => {
    if(player.includes(1)
    && player.includes(5)
    && player.includes(9)) {
        return true;
    }
    if(player.includes(3)
    && player.includes(5)
    && player.includes(7)) {
        return true;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", setUpBoard);
