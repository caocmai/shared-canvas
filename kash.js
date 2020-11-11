import ctx from './main.js';
import kash, { size } from './main.js'

const x = 1 * size;
const y = 3 * size;

ctx.save()

kash.beginPath();
kash.lineWidth = '5';
kash.strokeStyle = 'green';
kash.rect(x, y, size, size);
kash.stroke();
kash.shadowBlur = 22;
kash.shadowColor = 'blue';
kash.fill();

kash.beginPath();
kash.lineWidth = '26';
kash.strokeStyle = 'yellow';
kash.arc(x + size / 2, y + size / 2 + 3, 30, 0, Math.PI * 2);
kash.stroke();
kash.shadowBlur = 22;
kash.shadowColor = 'blue';
kash.fill();

ctx.restore()