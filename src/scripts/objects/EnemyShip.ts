import { EnemyLaser } from './EnemyLaser';
import { Entity } from './Entity';

export class EnemyShip​​ extends Entity {
  private shootTimer;
  private xTimer;
  public get velocity(): Phaser.Math.Vector2 { return this.body.velocity; }
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "enemyShip", 'enemy ship');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    
    this.xTimer = this.scene.time.addEvent({
      delay: 100,
      callback: () =>
      {
        var v: number = 1/100;
        this.body.velocity.x = 100*Math.cos(2*Math.PI*v*this.scene.time.now);
      },
      callbackScope: this,
      loop: true
    });

    this.shootTimer = this.scene.time.addEvent({
      delay: Phaser.Math.Between(1000,2000),
      callback: () => {
        var laser = new EnemyLaser(
          scene,
          this.body.position.x + this.body.width/2,
          this.body.position.y + this.body.height
        );
      },
      callbackScope: this,
      loop: true
    });
    
  }
}