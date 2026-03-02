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
        const bar = this.add.rectangle((width / 2) - 230, height / 2, 4, 28, 0x389bd6);
        this.load.on('progress', (progress) => {
            bar.width = 4 + (460 * progress);
        });
    }

    preload ()
    {
        this.load.setPath('public/assets');
        this.load.image('loading.png', 'loading.png');
        this.load.image('ball', 'ball.png');        
        this.load.image('field', 'field.jpeg');        
        this.load.image('fullScreen-on', 'fullscreen-on.png');
        this.load.image('fullScreen-off', 'fullscreen-off.png');
        this.load.image('blue-pad', 'col.png');
        this.load.image('red-pad', 'por.png');
        this.load.image('title', 'title.png');
        this.load.image('game-over-title', 'game-over-title.png');
        
        this.load.image('single-player', 'single.png');    
        this.load.image('two-players', 'two.png');    
        this.load.image('menu-back', 'menu-back.jpeg');    
        this.load.image('gover-back', 'gover-back.jpeg');    
        this.load.audio('bounce', 'sounds/bounce.mp3');
        this.load.audio('goal', 'sounds/goal.mp3');        
        this.load.audio('background-music', 'sounds/background.wav');
        
        this.load.spritesheet('collide', 'CrashSpriteSheet.png', { frameWidth: 625, frameHeight: 468.75 });
        this.load.spritesheet('red-goal', 'red-goal-compressedx2.png', { frameWidth: 552.25, frameHeight: 552.25 });
        this.load.spritesheet('blue-goal', 'blue-goal-compressedx2.png', { frameWidth: 552.25, frameHeight: 552.25 });
        this.load.spritesheet('disk-reset', 'disk-reset.png', { frameWidth: 406.25, frameHeight: 406.33 });
    }

    create ()
    {
        // After assets are loaded, go to Menu
        this.scene.start('Menu');
    }
}
