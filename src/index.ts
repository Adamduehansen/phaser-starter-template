import { AUTO, Game } from 'phaser';
import GameScene from './GameScene';
import { register as registerCustom } from './gameobjects/Custom';

registerCustom();

new Game({
  type: AUTO,
  width: 1024,
  height: 768,
  backgroundColor: 'white',
  scene: [GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: process.env.PHASER_DEBUG,
      gravity: {
        y: 0,
      },
    },
  },
});
