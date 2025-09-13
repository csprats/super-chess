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

  if (board.kings.white.lives === 0) { 
    alert('Black win! Giving Une more live...')
    board.kings.white.lives++
    controler1.document.getElementById('lives').textContent = `Lives: ${board.kings.white.lives}`
  }
  if (board.kings.black.lives === 0) {
    alert('White win! Giving Une more live...')
    board.kings.black.lives++
    controler2.document.getElementById('lives').textContent = `Lives: ${board.kings.black.lives}`
  }

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
    if (turnWhite) board.rayH(2)
    turnWhite = false
    turnBlack = true
    controler2.document.getElementById('lives').textContent = `Lives: ${board.kings.black.lives}`
  })
  controler1.document.getElementById('ray-v').addEventListener('click', () => {
    if (turnWhite) board.rayV(2)
    turnWhite = false
    turnBlack = true
    controler2.document.getElementById('lives').textContent = `Lives: ${board.kings.black.lives}`
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
  controler2.document.getElementById('ray-h').addEventListener('click', () => {
    if (turnBlack) board.rayH(1)
    turnBlack = false
    turnWhite = true
    controler1.document.getElementById('lives').textContent = `Lives: ${board.kings.white.lives}`
  })
  controler2.document.getElementById('ray-v').addEventListener('click', () => {
    if (turnBlack) board.rayV(1)
    turnBlack = false
    turnWhite = true
    controler1.document.getElementById('lives').textContent = `Lives: ${board.kings.white.lives}`
  })
})

draw()