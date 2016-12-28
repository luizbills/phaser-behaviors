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
    entity.body.velocity.x += Math.cos(opts.angle) * opts.speed
    entity.body.velocity.y += Math.sin(opts.angle) * opts.speed
  }
}

if (window.Phaser) {
  Phaser.Behavior = Phaser.Behavior || {}
  Phaser.Behavior.Bullet = Bullet
}
