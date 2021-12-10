import { Scene } from 'phaser';

class GameScene extends Scene {
  public preload(): void {
    this.load.image('star', '/images/star.png');
  }

  public create(): void {
    const { width, height } = this.sys.canvas;
    this.add
      .text(width / 2, height / 2, 'Phaser Starter Template', {
        color: 'white',
        fontSize: '32px',
      })
      .setOrigin(0.5);

    this.input.on('pointerdown', (event: MouseEvent) => {
      const { x, y } = event;
      this.add.custom(x, y);
    });

    fetch('/api/score')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }
}

export default GameScene;
