export function checkFirstDiagonal(board) {
    let firstDiagonal = []

    for (let i = 0; i < board.length; i++) {
        firstDiagonal.push(board[i][i])
    }

    let firstDiagonalFullOfX = firstDiagonal.every(pos => pos === "x")
    let firstDiagonalFullOfO = firstDiagonal.every(pos => pos === "o")

    if (firstDiagonalFullOfX) {
        setTimeout(() => {
            alert("Jugador X ganó")
        }, 700)
        return true

    } else if (firstDiagonalFullOfO) {
        setTimeout(() => {
            alert("Jugador O ganó")
        }, 700)
        return true
    }
}

export function checkSecondDiagonal(board) {
    let secondDiagonal = []
    let j = board.length - 1

    for (let i = 0; i < board.length; i++) {
        secondDiagonal.push(board[i][j])
        j--
    }

    let secondDiagonalFullOfX = secondDiagonal.every(pos => pos === "x")
    let secondDiagonalFullOfO = secondDiagonal.every(pos => pos === "o")

    if (secondDiagonalFullOfX) {
        setTimeout(() => {
            alert("Jugador X ganó")
        }, 700)
        return true
        
    } else if (secondDiagonalFullOfO) {
        setTimeout(() => {
            alert("Jugador O ganó")
        }, 700)
        return true
    }
}

export function checkDiagonals(board) {
    if (checkFirstDiagonal(board)) return true
    if (checkSecondDiagonal(board)) return true
}