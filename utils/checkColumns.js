export function checkFirstColumn(board) {
    let firstColumn = []

    for (let i = 0; i < board.length; i++) {
        firstColumn.push(board[i][0])
    }

    let firstColumnFullOfX = firstColumn.every(pos => pos === "x")
    let firstColumnFullOfO = firstColumn.every(pos => pos === "o")

    if (firstColumnFullOfX) {
        setTimeout(() => {
            alert("Jugador X ganó")
        }, 700)
        return true

    } else if (firstColumnFullOfO) {
        setTimeout(() => {
            alert("Jugador O ganó")
        }, 700)
        return true
    }
}

export function checkSecondColumn(board) {
    let secondColumn = []

    for (let i = 0; i < board.length; i++) {
        secondColumn.push(board[i][1])
    }

    let secondColumnFullOfX = secondColumn.every(pos => pos === "x")
    let secondColumnFullOfO = secondColumn.every(pos => pos === "o")

    if (secondColumnFullOfX) {
        setTimeout(() => {
            alert("Jugador X ganó")
        }, 700)
        return true

    } else if (secondColumnFullOfO) {
        setTimeout(() => {
            alert("Jugador O ganó")
        }, 700)
        return true
    }
}

export function checkThirdColumn(board) {
    let thirdColumn = []

    for (let i = 0; i < board.length; i++) {
        thirdColumn.push(board[i][2])
    }

    let thirdColumnFullOfX = thirdColumn.every(pos => pos === "x")
    let thirdColumnFullOfO = thirdColumn.every(pos => pos === "o")

    if (thirdColumnFullOfX) {
        setTimeout(() => {
            alert("Jugador X ganó")
        }, 700)
        return true
        
    } else if (thirdColumnFullOfO) {
        setTimeout(() => {
            alert("Jugador O ganó")
        }, 700)
        return true
    }
}

export function checkColumns(board) {
    if (checkFirstColumn(board)) return true
    if (checkSecondColumn(board)) return true
    if (checkThirdColumn(board)) return true
}