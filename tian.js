import ctx, { size } from './main.js';

const x = 4 * size;
const y = 4 * size;

ctx.beginPath();
ctx.rect(x, y, size, size);
ctx.fillStyle = '#6d29ff';
ctx.fill();

ctx.beginPath();
ctx.arc(x + size / 2, y + size / 2, 40, 0, Math.PI * 2);
ctx.fillStyle = '#ffdb3b';
ctx.fill();

ctx.beginPath();
ctx.arc(x + size / 2, y + size / 2, 38, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.arc(x + size / 2, y + size / 2, 36, 0, Math.PI * 2);
ctx.fillStyle = '#ffdb3b';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 43, y + 40, 9, 34);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 43, y + 40, -5, 4);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 43, y + 70, -5, 4);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 51, y + 40, 15, 4);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 51, y + 70, 15, 4);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 48, y + 73, 4, 9);
ctx.fillStyle = 'black';
ctx.fill();
ctx.beginPath();
ctx.rect(x + 48, y + 33, 4, 10);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 58, y + 73, 4, 9);
ctx.fillStyle = 'black';
ctx.fill();
ctx.beginPath();
ctx.rect(x + 58, y + 33, 4, 10);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 63, y + 40, 5, 34);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 65, y + 47, 7, 7);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 48, y + 56, 20, 4);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.rect(x + 65, y + 62, 7, 7);
ctx.fillStyle = 'black';
ctx.fill();
