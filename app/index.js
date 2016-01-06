(function () {
    'use strict';

    var path = require('path'),
        generators = require('yeoman-generator');

    module.exports = generators.Base.extend({
        constructor: function () {
            generators.Base.apply(this, arguments);

            this.sourceRoot(path.join(path.dirname(this.resolved), 'templates/app-starter-kit'));
        },

        app: function () {
            this.fs.copy([
                    this.templatePath() + '/**',
                    this.templatePath() + '/**/.*',
                    '!**/.git/**'],
                this.destinationPath()
            );
        }
    });

}());
