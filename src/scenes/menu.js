export class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    create() {
        const width = this.game.config.width;
        const height = this.game.config.height;

        this.add.image(width / 2, height / 2, 'menu-back')
            .setDisplaySize(width, height)
            .setOrigin(0.5);

        // Title
        this.add.image(width / 2, height / 2 - 225, 'title').setOrigin(0.5);

        // Single Player Button
        const singleBtn = this.add.image(width / 2, height / 2 + 70, 'single-player')
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        // Two Players Button
        const twoBtn = this.add.image(width / 2, height / 2 + 260, 'two-players')
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        singleBtn.on('pointerover', () => singleBtn.setScale(1.03));
        singleBtn.on('pointerout', () => singleBtn.setScale(1));
        twoBtn.on('pointerover', () => twoBtn.setScale(1.03));
        twoBtn.on('pointerout', () => twoBtn.setScale(1));

        singleBtn.on('pointerdown', () => {
            this.registry.set('mode', 'single');
            this.scene.start('Game');
        });

        twoBtn.on('pointerdown', () => {
            this.registry.set('mode', 'two');
            this.scene.start('Game');
        });
    }
}
