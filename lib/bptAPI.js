'use strict';

var xml2js = require('xml2js').parseString,
	util = require('util'),
	request = require('request');

var devID;
var client;
var eventID;
var dateID;
var priceID;

var getEvents = function( devID, client, callback ) {


	var options = {
		url: "https://www.brownpapertickets.com/api2/eventlist",
		qs: {
			id: devID,
			client: client
		},
		method: 'GET',
		headers: {
			"User-Agent": "Brown-Paper-Tickets-Node-API- " + devID,
			"Content-Type": "application/xml"
		}
	}


	var events = function( eventList ) {

		var eventList;

		eventList = "Set just before the request call."

		request(options, function( error, response, body ) {

			// console.log("URL: " + url.href );
			// console.log("\n" + response.statusCode);

			if ( !error && response.statusCode == 200 ) {
				console.log("Good!")

				eventList = "Set inside the request call.";


			}

			else {

				console.log("Error! " + error );
				eventList = "Set because ERROR!!"

			}

			eventList = "THIS IS SOMETHING ELSE!";

			return eventList;	


		});
		


		console.log("COMING AT YOU LIVE FROM INSIDE THE EVENT FUNCTION! " + eventList);
		return eventList;
	}

	callback( events );

}

var getDates = function(devID, eventID) {

	var list;

	var options = {
		url: "https://www.brownpapertickets.com/api2/datelist?id=" + devID + "event_id=" + eventID,
		method: 'GET',
		headers: {
			"User-Agent": "Brown Paper Tickets API Node - " + devID
		}
	}

	var dates = request(options, function( error, response, body ) {
		if (error) {
			throw error;
		}

		if (response.statusCode == 200 ) {
			
		}

	});

	return dates;
}

var getPrices = function(devID, dateID) {

	var options = {
		url: "https://www.brownpapertickets.com/api2/pricelist?id=" + devID + "date_id=" + dateID,
		method: 'GET',
		headers: {
			"User-Agent": "Brown Paper Tickets API Node - " + devID
		}
	}
	var prices = request(options, function( error, response, body ) {
			if (error) {
				throw error;
			}

			if (response.statusCode == 200 ) {
				
			}

		});

		return prices;

	/*
	var prices = https.request(options, function(res) {
		console.log("Got response: " + res.statusCode);
	})

	prices.on('error', function(e) {
		console.log("Got error: " + e.message + "\nurl: " + options.host + options.path );
	});

	prices.end();

	return prices;
	*/
}

module.exports = {

	getEvents: getEvents,

	getDates: getDates,

	getPrices: getPrices

}

