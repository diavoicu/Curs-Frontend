const chessboard = document.getElementById("chessboard");

function createChessboard() {
    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const square = document.createElement("div");
            square.className = (row + col) % 2 === 0 ? "square white" : "square black";
            chessboard.appendChild(square);
        }
    }
}

createChessboard();