;(function (root, factory, NULL) {
    var BEHAVIOR_GLOBAL_NAME = 'Platformer';

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
    'use strict';

    function addKeys(game, keyCodes) {
        if (!Array.isArray(keyCodes)) {
            keyCodes = [keyCodes];
        }
        return keyCodes.map(function(keyCode) {
            return game.input.keyboard.addKey(keyCode);
        });
    }

    function isDown(keys) {
        for (let key of keys) {
            if (key.isDown) {
                return true;
            }
        }
        return false;
    }

    var Behavior = {

        // default settings
        options: {
            gravity: 600,
            velocity: 200,
            jumpStrength: 250,
            controls: {
                left: [Phaser.KeyCode.LEFT],
                right: [Phaser.KeyCode.RIGHT],
                jump: [Phaser.KeyCode.UP]
            }
        },

        create: function(object, options) {
            var gravity = options.gravity;
            var controls = options.controls;

            if (gravity > 0) {
                object.body.gravity.y = gravity;
            }

            options._control_keys = {
                left: addKeys(object.game, controls.left),
                right: addKeys(object.game, controls.right),
                jump: addKeys(object.game, controls.jump)
            };
        },

        preUpdate: function(object, options) {
            var controlKeys = options._control_keys;
            var velocity = options.velocity;

            if (isDown(controlKeys.left)) {
                object.body.velocity.x = -velocity;
            } else if (isDown(controlKeys.right)) {
                object.body.velocity.x = velocity;
            } else {
                object.body.velocity.x = 0;
            }

            if (isDown(controlKeys.jump) && (object.body.touching.down || object.body.blocked.down)) {
                object.body.velocity.y = -options.jumpStrength;
            }
        }
    };

    return Behavior;
}));
