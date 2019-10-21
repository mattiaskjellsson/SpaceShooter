import { Entity } from './Entity';

export class PlayerLaser extends Entity {
  public get velocity(): number { return 400; }
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "laserGreen", 'player laser');
    this.body.velocity.y = -this.velocity;
    // scene.playerLasers.add(this);
  }
}
