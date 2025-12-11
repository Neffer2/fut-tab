export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        let width = this.game.config.width;
        let height = this.game.config.height;
        this.add.rectangle(width / 2, height / 2, 468, 32).setStrokeStyle(1, 0xffffff);
        const bar = this.add.rectangle((width / 2) - 230, height / 2, 4, 28, 0xffffff);
        this.load.on('progress', (progress) => {
            bar.width = 4 + (460 * progress);
        });

        // The logo is loaded in preload() and added once available
    }

    preload ()
    {
        this.load.setPath('public/assets');
        this.load.image('logo', 'iglu.png');
        this.load.image('ball', 'ball.png');
        this.load.image('field', 'field.jpg');
        this.load.image('fullScreen-on', 'fullscreen-on.png');
        this.load.image('fullScreen-off', 'fullscreen-off.png');
        this.load.image('blue-pad', 'col.png');
        this.load.image('red-pad', 'por.png');
        this.load.image('back', 'fondo.png');    
        this.load.audio('bounce', 'sounds/bounce.mp3');
        this.load.audio('goal', 'sounds/goal.mp3');
        this.load.audio('background-music', 'sounds/background.wav');
        this.load.spritesheet('collide', 'CrashSpriteSheet.png', { frameWidth: 625, frameHeight: 468.75 });
        this.load.spritesheet('red-goal', 'red-goal-compressedx2.png', { frameWidth: 552.25, frameHeight: 552.25 });
        this.load.spritesheet('blue-goal', 'blue-goal-compressedx2.png', { frameWidth: 552.25, frameHeight: 552.25 });
        this.load.spritesheet('disk-reset', 'disk-reset.png', { frameWidth: 406.25, frameHeight: 406.33 });

        this.load.on('filecomplete-image-logo', () => {
            const width = this.game.config.width;
            const height = this.game.config.height;
            this.add.image((width / 2), height / 2 - 200, 'logo').setScale(0.5).setOrigin(0.5);
        });
    }

    create ()
    {
        // After assets are loaded, go to Menu
        this.scene.start('Menu');
    }
}
