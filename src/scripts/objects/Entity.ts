export class Entity extends Phaser.Physics.Arcade.Sprite { 
  constructor(scene: Phaser.Scene, x: number, y: number, label: string, type: string) {
    super(scene, x, y, label);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.scene.physics.add.existing(this);
    this.setData("type", type);
    this.setData("isDead", false);
    this.setName(label);
  }
}