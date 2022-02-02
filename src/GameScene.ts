import { Scene } from 'phaser';

class GameScene extends Scene {
  create(): void {
    const { width, height } = this.sys.canvas;
    this.add
      .text(width / 2, height / 2, 'Phaser Starter Template', {
        color: 'white',
        fontSize: '32px',
      })
      .setOrigin(0.5);
  }
}

export default GameScene;
