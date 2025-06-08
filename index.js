import { checkRows } from "./utils/checkRows.js";
import { checkColumns } from "./utils/checkColumns.js";
import { checkDiagonals } from "./utils/checkDiagonals.js";

let turn = "x"

let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]


function checkVictory(board) {
    if (checkRows(board)) return true
    if (checkColumns(board)) return true
    if (checkDiagonals(board)) return true
}

const firstRowDiv = document.querySelector(".first-row")
const secondRowDiv = document.querySelector(".second-row")
const thirdRowDiv = document.querySelector(".third-row")

const firstRowCells = firstRowDiv.querySelectorAll("div")
firstRowCells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (turn === "x") {
            
            if (cell.id === "fr-pos1") {
                board[0][0] = "x"
            } else if (cell.id === "fr-pos2") {
                board[0][1] = "x"
            } else if (cell.id === "fr-pos3") {
                board[0][2] = "x"
            }
            cell.innerText = "X"
            turn = "o"

        } else {

            if (cell.id === "fr-pos1") {
                board[0][0] = "o"
            } else if (cell.id === "fr-pos2") {
                board[0][1] = "o"
            } else if (cell.id === "fr-pos3") {
                board[0][2] = "o"
            }
            cell.innerText = "O"
            turn = "x"
        }

        if (checkVictory(board)) {
            firstRowCells.forEach(cell => cell.classList.add("div-disabled"))
            secondRowCells.forEach(cell => cell.classList.add("div-disabled"))
            thirdRowCells.forEach(cell => cell.classList.add("div-disabled"))
        }

        cell.classList.add("div-disabled")
    })
})

const secondRowCells = secondRowDiv.querySelectorAll("div")
secondRowCells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (turn === "x") {

            if (cell.id === "sr-pos1") {
                board[1][0] = "x"
            } else if (cell.id === "sr-pos2") {
                board[1][1] = "x"
            } else if (cell.id === "sr-pos3") {
                board[1][2] = "x"
            }
            cell.innerText = "X"
            turn = "o"

        } else {
            
            if (cell.id === "sr-pos1") {
                board[1][0] = "o"
            } else if (cell.id === "sr-pos2") {
                board[1][1] = "o"
            } else if (cell.id === "sr-pos3") {
                board[1][2] = "o"
            }
            cell.innerText = "O"
            turn = "x"
        }

        if (checkVictory(board)) {
            firstRowCells.forEach(cell => cell.classList.add("div-disabled"))
            secondRowCells.forEach(cell => cell.classList.add("div-disabled"))
            thirdRowCells.forEach(cell => cell.classList.add("div-disabled"))
        }

        cell.classList.add("div-disabled")
    })
})

const thirdRowCells = thirdRowDiv.querySelectorAll("div")
thirdRowCells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (turn === "x") {

            if (cell.id === "tr-pos1") {
                board[2][0] = "x"
            } else if (cell.id === "tr-pos2") {
                board[2][1] = "x"
            } else if (cell.id === "tr-pos3") {
                board[2][2] = "x"
            }
            cell.innerText = "X"
            turn = "o"

        } else {

            if (cell.id === "tr-pos1") {
                board[2][0] = "o"
            } else if (cell.id === "tr-pos2") {
                board[2][1] = "o"
            } else if (cell.id === "tr-pos3") {
                board[2][2] = "o"
            }
            cell.innerText = "O"
            turn = "x"
        }

        if (checkVictory(board)) {
            firstRowCells.forEach(cell => cell.classList.add("div-disabled"))
            secondRowCells.forEach(cell => cell.classList.add("div-disabled"))
            thirdRowCells.forEach(cell => cell.classList.add("div-disabled"))
        }

        cell.classList.add("div-disabled")
    })
})




