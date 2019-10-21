import { Config } from '../GameConfig';
import { Entity } from './Entity';
import { PlayerLaser } from './PlayerLaser';

export class Player extends Entity { 
  public get velocity(): number { return Config.PLAYER_SPEED; }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player', 'player');
    this.setCollideWorldBounds(true);

    this.setData("isShooting", false);
    this.setData("timerShootDelay", 10);
    this.setData("timerShootTick", this.getData("timerShootDelay") - 1);
  }

  public update() {
    this.setVelocity(0, 0);

    if (this.getData("isShooting")) {
      if (this.getData("timerShootTick") < this.getData("timerShootDelay")) {
        this.setData("timerShootTick", this.getData("timerShootTick") + 1); // every game update, increase timerShootTick by one until we reach the value of timerShootDelay
      }
      else { // when the "manual timer" is triggered:
        var laser = new PlayerLaser(this.scene, this.x, this.y);
        this.scene.add.existing(laser);
        this.setData("timerShootTick", 0);
      }
    }
  }

  public moveDown() { this.setVelocityY(this.velocity); }
  public moveUp() { this.setVelocityY(-this.velocity); }
  public moveLeft() { this.setVelocityX(-this.velocity); }
  public moveRight() { this.setVelocityX(this.velocity); }
}