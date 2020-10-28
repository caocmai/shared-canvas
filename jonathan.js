import ctx, { size } from './main.js'

//restore context
ctx.restore()

//my position
const jwx = 1 * size
const jwy = 0 * size

// background square
drawRect(ctx, jwx, jwy, size, size, "#222222")

// stem
drawRect(ctx, jwx + (113 / 2) - 5, jwy + 15, 10, 25, "#FFFDD0")

// pumpkin
drawEllipse(ctx, jwx + (113 / 2), jwy + (113 / 2) + 10, 50, 40, "#FF7518")

// eyes black
drawCircle(ctx, jwx + (113 / 2) - 25, jwy + (113 / 2) - 5, 10, "#000000")
drawCircle(ctx, jwx + (113 / 2) + 15, jwy + (113 / 2) - 5, 10, "#000000")

// eyes white
drawCircle(ctx, jwx + (113 / 2) - 25, jwy + (113 / 2) - 5, 5, "#ffffff")
drawCircle(ctx, jwx + (113 / 2) + 15, jwy + (113 / 2) - 5, 5, "#ffffff")

// mouth
drawRect(ctx, jwx + (113 / 2) - 10, jwy + (113 / 2) + 15, 20, 10, "#000000")
drawRect(ctx, jwx + (113 / 2) - 5, jwy + (113 / 2) + 15, 10, 5, "#ffffff")

//signature
drawText(ctx, "Spooky", jwx, jwy, 7, "#fff")

// draw a rectangle
function drawRect(ctx, x, y, width, height, color) {
    ctx.beginPath()
    ctx.rect(x, y, width, height)
    ctx.fillStyle = color
    ctx.fill()
}

// draw a circle
function drawCircle(ctx, x, y, size, color) {
    ctx.beginPath()
    ctx.arc(x + size / 2, y + size / 2, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawText(ctx, text, x, y, size, color) {
    ctx.beginPath()
    ctx.font = size + 'px Helvetica'
    ctx.fillStyle = color
    ctx.fillText(text, x + 70, y + 10)
}

// draw an ellipse
// taken from:
//https://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
function drawEllipse(ctx, cx, cy, rx, ry, color) {
    ctx.save(); // save state
    ctx.beginPath();

    ctx.translate(cx - rx, cy - ry);
    ctx.scale(rx, ry);
    ctx.arc(1, 1, 1, 0, 2 * Math.PI, false);

    ctx.restore(); // restore to original state
    ctx.fillStyle = color
    ctx.fill();
}
