import PIXI from 'pixi.js';
import p2 from 'p2';

export default class Man {
    constructor(options = {}) {
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0x000000);
        graphics.drawRect(0, 0, 10, 25);
        graphics.endFill();

        const texture = graphics.generateTexture();

        this.sprite = new PIXI.Sprite(texture);
        this.sprite.width = 10;
        this.sprite.height = 25;
        this.sprite.anchor.set(0.5, 0.5);

        this.sprite.x = options.x;
        this.sprite.y = -options.y;

        this.body = new p2.Body({
            mass: 50,
            position: [options.x, options.y]
        });

        const shape = new p2.Box({
            width: 10,
            height: 25
        });

        this.body.addShape(shape);
    }

    update() {
        this.sprite.x = this.body.position[0];
        this.sprite.y = -this.body.position[1];
    }
};
