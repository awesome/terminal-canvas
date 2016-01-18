"use strict";

const Cursor = require('../lib/Cursor').default;
const cursor = new Cursor().resetTTY().flush();
const radius = 10;
const colors = ['RED', 'YELLOW', 'GREEN', 'DARK_CYAN', 'BLUE', 'MAGENTA'];

let points = [];
let theta = 0;

setInterval(function () {
  const x = 2 + (radius + Math.cos(theta) * radius) * 2;
  const y = 2 + radius + Math.sin(theta) * radius;

  points.unshift([x, y]);
  points.forEach((p, i) => {
    cursor.moveTo(p[0], p[1]);
    cursor.background(colors[Math.floor(i / 12)]).write(' ').flush();
  });

  points = points.slice(0, 12 * colors.length - 1);

  theta += Math.PI / 40;
}, 50);
