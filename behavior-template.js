;(function (root, factory, NULL) {
    var BEHAVIOR_GLOBAL_NAME = 'ChangeThis';

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

    var Behavior = {

        // default settings
        options: {
            // just examples
            opt1: 'value',
            opt2: 0,
            opt3: [true, 23, 'foo']
        },

        create: function(object, opts) {
            // called when the behavior is ADDED to a game object
        },

        destroy: function(object, opts) {
            // called when the behavior is REMOVED from a game object
        },

        preUpdate: function(object, opts, game, physicsElapsed) {
            // called at the very start of the update cycle,
            // before any other subsystems have been updated (including Physics)
        },

        update: function(object, opts, game, physicsElapsed) {
            // called after all the core subsystems (Input, Tweens, Sound, etc)
            // and the State have updated, but before the render
        },

        postUpdate: function(object, opts, game, physicsElapsed) {
            // called right after the Behavior.update
        },

        preRender: function(object, opts, game) {
            // called right after the Game Renderer completes, but before the State.render
        },

        render: function(object, opts, game) {
            // called right after the Behavior.preRender
        },

        postRender: function(object, opts, game) {
            // called after the Game Renderer and State.render have run
        }

    };
    
    return Behavior;
}));
