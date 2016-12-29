;(function (root, factory, NULL) {
    var BEHAVIOR_GLOBAL_NAME = 'CollisionHandler';

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

        // default settings
        options: {
            method: 'collide', // or 'overlap'
            targets: NULL,
            collideCallback: NULL,
            processCallback: NULL,
            callbackContext: NULL
        },

        update: function (object, opts) {
            var targets = opts.targets,
                method = opts.method;
            
            // multiple targets
            if (Array.isArray(targets) === true) {
                var max = opts.targets.length;
                for (var i = 0; i < max; ++i ) {
                    object.game.physics.arcade[method](object, targets[i], opts.collideCallback, opts.processCallback, opts.callbackContext);
                }
            // single target
            } else {
                object.game.physics.arcade[method](object, targets, opts.collideCallback, opts.processCallback, opts.callbackContext);
            }
        }
    };

    return Behavior;
}));
