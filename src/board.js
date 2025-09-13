export class Board {
    constructor () {
        this.kings = {
            white: {
                x: 0,
                y: 4,
                lives: 3,
                turn: true
            },
            black: {
                x: 7,
                y: 3,
                lives: 3,
                turn: false
            }
        }
        this.pieces = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1],
            [2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
    }
    drawTable(ctx, scale, offset) {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 === 0) {
                ctx.fillStyle = '#dad9b5';
                } else {
                ctx.fillStyle = '#964d22';
                }
                ctx.fillRect(col * scale + offset, row * scale, scale, scale);
            }
        }
        this.pieces.forEach((row, y) => {
            row.forEach((number, x) => {
                ctx.beginPath()
                switch(number) {
                    case 0: 
                        return
                    case 1: 
                        ctx.fillStyle = 'black'
                    break
                    case 2:
                        ctx.fillStyle = 'white'
                    break
                }
                ctx.arc(x * scale + offset + scale / 2, y * scale + scale / 2, scale / 2.5, 0, 2 * Math.PI)
                ctx.fill()
                ctx.closePath()
            })
        })
    }
    movePieces(wx, wy, bx, by) {
        if (this.kings.white.x + wx <= 7  && this.kings.white.y + wy <= 7 && 
            this.kings.black.x + bx <= 7 && this.kings.black.y + by <= 7 &&
            this.kings.white.x + wx >= 0  && this.kings.white.y + wy >= 0 && 
            this.kings.black.x + bx >= 0 && this.kings.black.y + by >= 0
        ) {
            this.pieces[this.kings.white.y][this.kings.white.x] = 0
            this.pieces[this.kings.white.y + wy][this.kings.white.x + wx] = 2
            this.kings.white.x = this.kings.white.x + wx
            this.kings.white.y = this.kings.white.y + wy

            this.pieces[this.kings.black.y][this.kings.black.x] = 0
            this.pieces[this.kings.black.y + by][this.kings.black.x + bx] = 1
            this.kings.black.x = this.kings.black.x + bx
            this.kings.black.y = this.kings.black.y + by
        }
    }
    rayH(n) {
        for(let x = 0; x < 8; x++) {
            if (this.pieces[this.kings.white.y][x] === 1 && n === 2) {
                this.kings.black.lives--
            } else if (this.pieces[this.kings.black.y][x] === 2 && n === 1) {
                this.kings.white.lives--
            }
        }
    }
    rayV(n) {
        for(let y = 0; y < 8; y++) {
            if (this.pieces[y][this.kings.white.x] === 1 && n === 2) {
                this.kings.black.lives--
            } else if (this.pieces[y][this.kings.black.x] === 2 && n === 1) {
                this.kings.white.lives--
            }
        }
    }
}