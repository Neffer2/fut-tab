export class GameOver extends Phaser.Scene {
    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        let width = this.game.config.width;
        let height = this.game.config.height;
        this.add.image(width / 2, height / 2, 'gover-back')
            .setDisplaySize(width, height)
            .setOrigin(0.5);


        this.add.image(width / 2, height / 2, 'game-over-title').setOrigin(0.5);

        this.input.once('pointerdown', () => {
            setTimeout(() => {
                this.scene.start('Menu');
            }, 500);
        });
    }
}
