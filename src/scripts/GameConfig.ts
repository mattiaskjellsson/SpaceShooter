import 'phaser';

import MainScene from './scenes/MainScene';
import PreloadScene from './scenes/PreloadScene';

export class Config {
  public static DEFAULT_WIDTH = 1280;
  public static DEFAULT_HEIGHT = 720;
  public static PLAYER_SPEED = 400;
  
  // @ts-ignore https://github.com/photonstorm/phaser/issues/4522
  // still not working in 3.18.1 :/
  static config: GameConfig = {
    backgroundColor: '#000000',
    scale: {
      parent: 'phaser-game',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: Config.DEFAULT_WIDTH,
      height: Config.DEFAULT_HEIGHT
    },
    scene: [PreloadScene, MainScene],
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    }
  }
}