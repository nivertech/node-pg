
EventEmitter = require('events').EventEmitter

class Test extends EventEmitter

	run_tests: () ->
		@emit 'someEvent', 'argument1'
		@emit 'someEvent', 'argument2'
		@emit 'someEvent', 'argument3'
		@emit 'error', {}

test = new Test
test.on 'someEvent', (arg) ->
	console.log "on someEvent #{arg}"
test.on 'error', (e) ->
	console.log "on error #{e}"
test.run_tests()
