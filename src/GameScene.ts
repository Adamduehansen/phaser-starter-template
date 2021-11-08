import { Scene } from 'phaser';

class GameScene extends Scene {
  public create(): void {
    const { width, height } = this.sys.canvas;

    this.add.text(width / 2, height, 'Phaser Starter Template');
  }
}

export default GameScene;
