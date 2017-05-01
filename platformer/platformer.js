var Platformer = {

    // defaults settings
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

    create: function (object, options) {
        var gravity = options.gravity;
        var controls = options.controls;

        if (gravity > 0) {
            object.body.gravity.y = gravity;
        }

        options._control_keys = {
            left: this._addKeys(object.game, controls.left),
            right: this._addKeys(object.game, controls.right),
            jump: this._addKeys(object.game, controls.jump)
        };
    },

    preUpdate: function (object, options) {
        var controlKeys = options._control_keys;
        var velocity = options.velocity;

        if (this._isDown(controlKeys.left)) {
            object.body.velocity.x = -velocity;
        } else if (this._isDown(controlKeys.right)) {
            object.body.velocity.x = velocity;
        } else {
            object.body.velocity.x = 0;
        }

        if (this._isDown(controlKeys.jump) && (object.body.touching.down || object.body.blocked.down)) {
            object.body.velocity.y = -options.jumpStrength;
        }
    },

    _addKeys: function(game, keyCodes) {
        if (!Array.isArray(keyCodes)) {
            keyCodes = [keyCodes];
        }
        return keyCodes.map(function(keyCode) {
            return game.input.keyboard.addKey(keyCode);
        });
    },

    _isDown: function(keys) {
        for (let key of keys) {
            if (key.isDown) {
                return true;
            }
        }
        return false;
    }
};

if (window.Phaser) {
  Phaser.Behavior = Phaser.Behavior || {};
  Phaser.Behavior.Platformer = Platformer;
}
