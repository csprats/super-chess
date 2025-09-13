import { Board } from "./board"


const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const board = new Board()

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const controler1 = window.open("controler/", 'controler1', "_blank")
const controler2 = window.open("controler/", 'controler2', "_blank")

let turnWhite = true
let turnBlack = false

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  board.drawTable(ctx, window.innerHeight / 8, window.innerWidth / 4)

  requestAnimationFrame(draw)
}

controler1.addEventListener('DOMContentLoaded', () => {
  controler1.document.title = 'Controler White'
  controler1.document.getElementById('up').addEventListener('click', () => {
    if (turnWhite) board.movePieces(0, -1, 0, 0)
    turnWhite = false
    turnBlack = true
  })
  controler1.document.getElementById('down').addEventListener('click', () => {
    if (turnWhite) board.movePieces(0, 1, 0, 0)
    turnWhite = false
    turnBlack = true
  })
  controler1.document.getElementById('left').addEventListener('click', () => {
    if (turnWhite) board.movePieces(-1, 0, 0, 0)
    turnWhite = false
    turnBlack = true
  })
  controler1.document.getElementById('right').addEventListener('click', () => {
    if (turnWhite) board.movePieces(1, 0, 0, 0)
    turnWhite = false
    turnBlack = true
  })
  controler1.document.getElementById('ray-h').addEventListener('click', () => {
    board.ray(1)
  })
})
controler2.addEventListener('DOMContentLoaded', () => {
  controler2.document.title = 'Controler Black'
  controler2.document.getElementById('up').addEventListener('click', () => {
    if (turnBlack) board.movePieces(0, 0, 0, -1)
    turnBlack = false
    turnWhite = true
  })
  controler2.document.getElementById('down').addEventListener('click', () => {
    if (turnBlack) board.movePieces(0, 0, 0, 1)
    turnBlack = false
    turnWhite = true
  })
  controler2.document.getElementById('left').addEventListener('click', () => {
    if (turnBlack) board.movePieces(0, 0, -1, 0)
    turnBlack = false
    turnWhite = true
  })
  controler2.document.getElementById('right').addEventListener('click', () => {
    if (turnBlack) board.movePieces(0, 0, 1, 0)
    turnBlack = false
    turnWhite = true
  })
})

draw()