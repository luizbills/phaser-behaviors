;(function (root, factory, NULL) {
    var BEHAVIOR_GLOBAL_NAME = 'Bullet';

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        var Phaser = root.Phaser;
        if (Phaser === NULL) {
            root[BEHAVIOR_GLOBAL_NAME] = factory();
        } else {
            Phaser.Behavior = Phaser.Behavior || {};
            Phaser.Behavior[BEHAVIOR_GLOBAL_NAME] = factory();
        }
    }
}(this, function (NULL) {

    var Behavior = {

        // defaults settings
        options: {
            angle: 0,
            speed: 100,
            rotate: true
        },

        create: function(object, opts) {
            if (opts.rotate) {
                object.rotation = opts.angle
            }
        },

        preUpdate: function(object, opts) {
            var game = object.game
            object.x += Math.cos(opts.angle) * opts.speed * game.time.physicsElapsed
            object.y += Math.sin(opts.angle) * opts.speed * game.time.physicsElapsed
        }
    };

    return Behavior;
}));
