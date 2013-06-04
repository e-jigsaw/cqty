module.exports = (grunt)->
	grunt.initConfig
		pkg: "<json:package.json>"
		coffee:
			cqty:
				files:
					"cqty.js": "cqty.coffee"
				options:
					bare: true
					sourceMap: true
		watch:
			files: ["*.coffee"]
			tasks: ["coffee"]

	grunt.loadNpmTasks "grunt-contrib-coffee"
	grunt.loadNpmTasks "grunt-contrib-watch"
