import { GameObjects } from 'phaser';

import { Config } from '../GameConfig';
import { EnemyShip } from '../objects/EnemyShip';
import { Player } from '../objects/Player';

export default class MainScene extends Phaser.Scene {
  private background: Phaser.GameObjects.TileSprite;
  private enemies: Phaser.GameObjects.Group;
  public enemyLasers: Phaser.GameObjects.Group;
  public playerLasers: Phaser.GameObjects.Group;
  private player: Player;

  private fire: Phaser.Input.Keyboard.Key;
  private left: Phaser.Input.Keyboard.Key;
  private right: Phaser.Input.Keyboard.Key;
  private up: Phaser.Input.Keyboard.Key;
  private down: Phaser.Input.Keyboard.Key;

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.background = this.add.tileSprite(0, 0, Config.DEFAULT_WIDTH, Config.DEFAULT_HEIGHT, 'background');
    this.background.setOrigin(0, 0);
    this.player = new Player(this, Config.DEFAULT_WIDTH/2, Config.DEFAULT_HEIGHT-100); 

    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.fire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: Phaser.Math.Between(1000, 2000),
      callback: () => { 
        let enemy = new EnemyShip(this, Phaser.Math.Between(0, Config.DEFAULT_WIDTH), 0);
        this.enemies.add(enemy); 
      },
      callbackScope: this,
      loop: true
    });
  }
  
  update() {
    this.background.tilePositionY -= 0.5;
    this.player.update();
    
    if (this.up.isDown) {
      this.player.moveUp();
    }
    else if (this.down.isDown) {
      this.player.moveDown();
    }
    
    if (this.left.isDown) {
      this.player.moveLeft();
    }
    else if (this.right.isDown) {
      this.player.moveRight();
    }

    if (this.fire.isDown) {
      this.player.setData("isShooting", true);
    }
    else {
      this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
      this.player.setData("isShooting", false);
    }

    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      enemy.update();
    }

    this.tidyUp();
  }

  private tidyUp() {
    console.log(this.playerLasers.children.entries.length);
    // this.playerLasers.forEach(x => {
    //   x.destroy()
    // });
  }
}
//
