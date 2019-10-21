export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('background', 'assets/spaceArt/background/starBackground.png');
    this.load.image('bigMetior', 'assets/spaceArt/meteorBig.png');
    this.load.image('smallMetior', 'assets/spaceArt/meteorSmall.png');
    this.load.image('player', 'assets/spaceArt/player.png');
    this.load.image('enemyShip', 'assets/spaceArt/enemyShip.png');
    this.load.image('enemyUfo', 'assets/spaceArt/enemyUfo.png');
    this.load.image('laserGreen', 'assets/spaceArt/laserRed.png');
    this.load.image('laserRed', 'assets/spaceArt/laserGreen.png');
  }

  create() {
    this.scene.start('MainScene')

    /**
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
