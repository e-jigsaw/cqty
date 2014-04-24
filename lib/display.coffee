{exec} = require "child_process"

module.exports = ->
	today = new Date()
	yesterday = new Date today.getFullYear(), today.getMonth(), today.getDate()-1

	exec "git log --numstat --all --after=\"#{yesterday}\" --pretty=format:''", (err, stdout, stderr)->
		list = stdout.split("\n")
		plus = minus = 0
		for file in list
			match = file.match(/^(\d+)\t(\d+)/)
			if match isnt null
				plus += parseInt match[1]
				minus += parseInt match[2]
		console.log "#{plus} insertions(+), #{minus} deletions(-)"