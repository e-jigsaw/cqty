{exec} = require "child_process"

today = new Date()
yesterday = new Date today.getTime() - (1000 * 3600 * 24)
dateFormat = "#{yesterday.getFullYear()}-#{yesterday.getMonth()+1}-#{yesterday.getDate()}"

exec "git log --numstat --after=#{dateFormat} --pretty=format:''", (err, stdout, stderr)->
	list = stdout.split("\n")
	plus = minus = 0
	for file in list
		match = file.match(/^(\d+)\t(\d+)/)
		if match isnt null
			plus += parseInt match[1]
			minus += parseInt match[2]
	console.log "#{plus} insertions(+), #{minus} deletions(-)"