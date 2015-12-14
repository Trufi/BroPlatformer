import PIXI from 'pixi.js';
import p2 from 'p2';

export default class Plate {
    constructor(options = {}) {
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xffd900);
        graphics.drawRect(0, 0, options.width, options.height);
        graphics.endFill();

        const texture = graphics.generateTexture();

        this.sprite = new PIXI.Sprite(texture);
        this.sprite.width = options.width;
        this.sprite.height = options.height;
        this.sprite.anchor.set(0.5, 0.5);
        
        this.body = new p2.Body({
            position: [options.x, options.y]
        });

        const shape = new p2.Box({
            width: options.width,
            height: options.height
        });

        this.body.addShape(shape);
    }

    update() {
        this.sprite.x = this.body.position[0];
        this.sprite.y = -this.body.position[1];
    }
};
