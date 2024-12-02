const RenJSConfig = {
  name: "Quickstart",
  w: 800,
  h: 600,
  renderer: Phaser.AUTO, // become renderer
  scaleMode: Phaser.ScaleManager.SHOW_ALL,
  loadingScreen: {
    background: "../../resource/img/background/bg-front.jpg",
    loadingBar: {
      asset: "../../resource/assets/gui/loaderloading-bar.png",
      position: {
        x: 109,
        y: 458
      },
      size: {
        w: 578,
        h: 82
      }
    }
  },
  guiConfig: "../../resource/story/Gui.yaml",
  storyConfig: "../../resource/story/Config.yaml",
  storySetup: "../../resource/story/Setup.yaml",
  storyText: ["../../resource/story/chapter/Chapter1.yaml"],
  logChoices: true
};

const RenJSGame = new RenJS.game(RenJSConfig);
RenJSGame.launch();
