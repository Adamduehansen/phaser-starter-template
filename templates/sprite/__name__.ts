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
      const __name__(camelCase) = new __name__(this.scene, x, y);

      this.displayList.add(__name__(camelCase));
      this.updateList.add(__name__(camelCase));

      this.scene.physics.world.enableBody(__name__(camelCase), Physics.Arcade.DYNAMIC_BODY);

      return __name__(camelCase);
    }
  );
}
