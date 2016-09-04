var Bullet = {

  // defaults settings
  options: {
    angle: 0,
    speed: 100,
    rotate: true
  },

  create: function(entity, opts) {
    if (opts.rotate) {
      entity.rotation = opts.angle
    }
  },

  update: function(entity, opts) {
    var game = entity.game
    entity.x += Math.cos(opts.angle) * opts.speed * game.time.physicsElapsed
    entity.y += Math.sin(opts.angle) * opts.speed * game.time.physicsElapsed
  }
}

if (window.Phaser) {
  Phaser.Behavior = Phaser.Behavior || {}
  Phaser.Behavior.Bullet = Bullet
}
