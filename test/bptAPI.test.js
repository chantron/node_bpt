'user strict';

var assert = require('assert'),
	http = require('http'),
	bpt = require('../lib/bptAPI'),
	util = require('util');


suite('bpt', function() {

	this.timeout(0);

	var devID = 'bnp74TYgNW';
	var client = 'chandler';
	var eventID = 153529;
	var dateID = 741572;

	test('Pull all Events', function(done) {

		var eventsList = bpt.getEvents(devID, client, function(events) {

				console.log(events);
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