import PIXI from 'pixi.js';
import p2 from 'p2';

export default class Game {
    constructor() {
        const viewPort = [window.innerWidth, window.innerHeight];

        this.stage = new PIXI.Container();
        this.stage.x = viewPort[0] / 2;
        this.stage.y = viewPort[1] / 2;

        this.world = new p2.World();
        this.objects = [];
    }

    addObject(obj) {
        this.stage.addChild(obj.sprite);
        this.world.addBody(obj.body);
        this.objects.push(obj);
    }

    update(now, delta) {
        this.world.step(delta / 1000);
        this.objects.forEach(el => el.update());
    }
};
