declare interface ICustom extends Phaser.Physics.Arcade.Sprite {}

declare namespace Phaser.GameObjects {
  interface GameObjectFactory {
    custom(x: number, y: number): ICustom;
  }
}
