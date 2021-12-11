import { GameObjects, Physics, Scene } from 'phaser';

class __name__ extends Physics.Arcade.Sprite {
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, '__name__(camelCase)');
  }
}

export function register(): void {
  GameObjects.GameObjectFactory.register(
    '__name__(camelCase)',
    function (
      this: GameObjects.GameObjectFactory,
      x: number,
      y: number
    ): __name__ {
      const star = new __name__(this.scene, x, y);

      this.displayList.add(star);

      this.scene.physics.world.enableBody(star, Physics.Arcade.DYNAMIC_BODY);

      return star;
    }
  );
}

console.log('adsf');
