import { Entity } from './Entity';

export class EnemyLaser extends Entity {
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "laserRed", "enemy laser");
    this.body.velocity.y = 200;
    scene.add.existing(this);
  }
}