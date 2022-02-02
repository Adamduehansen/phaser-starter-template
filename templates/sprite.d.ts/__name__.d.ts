declare interface I__name__ extends Phaser.Physics.Arcade.Sprite {}

declare namespace Phaser.GameObjects {
  interface GameObjectFactory {
    __name__(camelCase)(x: number, y: number): I__name__;
  }
}
