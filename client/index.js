import PIXI from 'pixi.js';
import p2 from 'p2';

import Game from './Game';
import Plate from './Plate';
import Man from './Man';

const viewPort = [window.innerWidth, window.innerHeight];

const renderer = PIXI.autoDetectRenderer(viewPort[0], viewPort[1], {
    backgroundColor: 0x999999
});
document.body.appendChild(renderer.view);

const game = new Game();

const plate = new Plate({
    x: 0,
    y: 0,
    width: 100,
    height: 15
});
game.addObject(plate);

const man = new Man({
    x: 0,
    y: 100
});
game.addObject(man);

let lastTimeUpdate = Date.now();

function render() {
    requestAnimationFrame(render);

    const now = Date.now();
    const delta = now - lastTimeUpdate;

    game.update(now, delta);

    renderer.render(game.stage);

    lastTimeUpdate = now;
}

render();

window.addEventListener('keydown', ev => {
    switch (ev.which) {
        case 38:
        case 32:
            jump();
            break;
        case 39:
            right();
            break;
        case 37:
            left();
            break;
    }
});

function jump() {
    man.body.velocity[1] = 50;
}

function right() {
    man.body.velocity[0] = 25;
}

function left() {
    man.body.velocity[0] = -25;
}
