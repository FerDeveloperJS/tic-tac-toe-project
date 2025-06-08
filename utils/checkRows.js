export function checkFirstRow(board) {
    let firstRow = board[0]
    let firstRowFullOfX = firstRow.every(pos => pos === "x")
    let firstRowFullOfO = firstRow.every(pos => pos === "o")

    if (firstRowFullOfX) {
        setTimeout(() => {
            alert("Jugador X ganó")
        }, 700)
        return true
        
    } else if (firstRowFullOfO) {
        setTimeout(() => {
            alert("Jugador O ganó")
        }, 700)
        return true
    }
}

export function checkSecondRow(board) {
    let secondRow = board[1]
    let secondRowFullOfX = secondRow.every(pos => pos === "x")
    let secondRowFullOfO = secondRow.every(pos => pos === "o")

    if (secondRowFullOfX) {
        setTimeout(() => {
            alert("Jugador X ganó")
        }, 700)
        return true
        
    } else if (secondRowFullOfO) {
        setTimeout(() => {
            alert("Jugador O ganó")
        }, 700)
        return true
    }
}

export function checkThirdRow(board) {
    let thirdRow = board[2]
    let thirdRowFullOfX = thirdRow.every(pos => pos === "x")
    let thirdRowFullOfO = thirdRow.every(pos => pos === "o")

    if (thirdRowFullOfX) {
        setTimeout(() => {
            alert("Jugador X ganó")
        }, 700)
        return true

    } else if (thirdRowFullOfO) {
        setTimeout(() => {
            alert("Jugador O ganó")
        }, 700)
        return true
    }
}

export function checkRows(board) {
    if (checkFirstRow(board)) return true
    else if (checkSecondRow(board)) return true
    else if (checkThirdRow(board)) return true
}