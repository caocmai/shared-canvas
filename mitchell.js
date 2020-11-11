import ctx, { size } from './main.js'
import Sprite from './Sprite.js'

ctx.restore() 

const x = 4 * size
const y = 3 * size

function drawFace() {
	// draw a square
	ctx.beginPath()
	ctx.rect(x, y, size, size)
	ctx.fillStyle = '#f0f'
	ctx.fill()

	// draw a circle 
	ctx.beginPath()
	// draw a complete circle
	ctx.arc(x + size / 2, y + size / 2, 40, 0, Math.PI * 2)
	ctx.fillStyle = '#333'
	ctx.fill()

	// Stroke a path
	ctx.beginPath()
	// draw half a circle
	ctx.arc(x + size / 2, y + size / 2, 30, 0, Math.PI)
	ctx.lineWidth = 3
	ctx.strokeStyle = '#ffeeee'
	ctx.stroke()

	// Draw some text
	ctx.beginPath()
	ctx.font = '18px Helvetica'
	ctx.fillStyle = '#fff'
	ctx.fillText('Hello', x + 8, y + 20)

	ctx.beginPath()
	ctx.arc(x + size / 2, y + 45, 18, 0, Math.PI * 2)
	ctx.fillStyle = '#fff'
	ctx.fill()

	ctx.beginPath()
	ctx.arc(x + size / 2, y + 48, 10, 0, Math.PI * 2)
	ctx.fillStyle = '#333'
	ctx.fill()
}

// Use the docs to figure out how to draw other things
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

const sprites = []

for (let i = 0; i < 50; i += 1) {
  const x1 = Math.random() * size + x
	const y1 = Math.random() * -size + 10
	
	console.log(x1, y1)

  const s = Math.random() * 30 + 10
  const hue = Math.random() * 360
  const color = `hsla(${hue}, 100%, 50%, 0.5)`
  const sprite = new Sprite(x1, y1, s, s, color)
	sprite.dy = Math.random() * 1 + 1
	sprite.dr = Math.random() * 4 - 2
  sprites.push(sprite)
}

function update() {
	ctx.save()
	ctx.clearRect(x, y, size, size)
	ctx.beginPath()
	ctx.rect(x, y, size, size)
	ctx.clip()
	drawFace()
  sprites.forEach((sprite) => {
    if (sprite.y > y + size + 40) {
			sprite.y = Math.random() * -6 + 10
			sprite.x = Math.random() * size + x
    }
    sprite.rotate += sprite.dr
    sprite.move().render(ctx)
  })
	ctx.restore()
  requestAnimationFrame(update)
}

update()