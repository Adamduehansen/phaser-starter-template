import { GameObjects, Physics, Scene } from 'phaser';

class Star extends Physics.Arcade.Sprite implements ICustom {
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'star');
  }
}

export function register(): void {
  GameObjects.GameObjectFactory.register(
    'custom',
    function (this: GameObjects.GameObjectFactory, x: number, y: number): Star {
      const star = new Star(this.scene, x, y);

      this.displayList.add(star);

      this.scene.physics.world.enableBody(star, Physics.Arcade.DYNAMIC_BODY);

      return star;
    }
  );
}

export default Star;
