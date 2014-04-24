{exec} = require "child_process"

display = (since_date, until_date) ->
	exec "git log --numstat --all --since=\"#{since_date}\" --until=\"#{until_date}\" --pretty=format:''", (err, stdout, stderr)->
		list = stdout.split("\n")
		plus = minus = 0
		for file in list
			match = file.match(/^(\d+)\t(\d+)/)
			if match isnt null
				plus += parseInt match[1]
				minus += parseInt match[2]
		console.log "#{plus} insertions(+), #{minus} deletions(-)"


module.exports = 
	today: ()->
		until_date = new Date()
		since_date = new Date until_date.getFullYear(), until_date.getMonth(), until_date.getDate()
		display since_date, until_date

	yesterday: ()->
		today = new Date()
		until_date = new Date today.getFullYear(), today.getMonth(), today.getDate()
		since_date = new Date today.getFullYear(), today.getMonth(), today.getDate()-1
		display since_date, until_date
		
