module.exports = (grunt)->
	grunt.initConfig
		pkg: "<json:package.json>"
		coffee:
			lib:
				files:
					"lib/index.js": "lib/index.coffee"
					"lib/argv.js": "lib/argv.coffee"
					"lib/display.js": "lib/display.coffee"
				options:
					bare: true
					sourceMap: true
		watch:
			files: ["*.coffee", "./**/*.coffee"]
			tasks: ["coffee"]

	grunt.loadNpmTasks "grunt-contrib-coffee"
	grunt.loadNpmTasks "grunt-contrib-watch"
