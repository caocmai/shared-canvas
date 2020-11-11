import Sprite from './Sprite.js'

class Polygon extends Sprite {
  constructor(x, y, radius, sides, color) {
    super(x, y, radius * 2, radius * 2, color)
    this.radius = radius
    this.sides = sides
  }

  render(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.color

    ctx.moveTo(Math.cos(0) * this.radius + this.x, Math.sin(0) * 
    this.radius + this.y)

    const step = Math.PI * 2 / this.sides

    for (let i = 0; i < this.sides; i += 1) {
      const x = Math.cos(i * step) * this.radius + this.x
      const y = Math.sin(i * step) * this.radius + this.y
      ctx.lineTo(x, y)
    }
    ctx.fill()
  }
}

export default Polygon