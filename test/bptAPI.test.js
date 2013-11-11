'user strict';

var assert = require('assert'),
	bpt = require('../lib/bptAPI'),
	util = require('util');

require('longjohn')

suite('bpt', function() {

	this.timeout(0);

	var bptOpts = {
		devID: 'Developer ID', // This is required for all calls.
		client: 'chandler',
		// eventID: 153529,
		dateID: 741572
	}


	test('Pull all Events', function(done) {

		var eventList = bpt.getEvents(bptOpts, function(events) {

				events = JSON.parse(events);

				var events = events['document']['event'];

				console.log("\nTotal events: " + events.length);
				console.log("--------------");
				for ( var i = 0; i < events.length; i++ ) {
					console.log(String(events[i]['title']));
					console.log(String(events[i]['description']));
					console.log("--------------");
				}


				return events;

				done();

		});


	});

	// test('Pull all Dates', function(done) {

	// 	var dates = bpt.getDates(devID, eventID);
	// 	console.log("Dates: " + dates.list);
	// 	done();

	// });

	// test('Pull all Prices', function(done) {

	// 	var prices = bpt.getPrices(devID, dateID);
	// 	console.log("Prices: " + prices.list);
	// 	done();

	// });


});