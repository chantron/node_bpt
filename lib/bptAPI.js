'use strict';

var xml2js = require('xml2js').parseString,
    util = require('util'),
    request = require('request');

var devID;
var client;
var eventID;
var dateID;
var priceID;


var urlRoot = 'http://www.brownpapertickets.com/api2/';


var getEvents = function (bptOpts, cb) {

	if (bptOpts.devID === undefined) throw "Developer ID is not set.";

	var devID = bptOpts.devID;
	var client = bptOpts.client || undefined;
	var eventID = bptOpts.eventID || undefined; 

	var options = {
        url: urlRoot + 'eventlist',
        qs: {
            id: devID,
        },
        headers: {
            'User-Agent': 'Brown-Paper-Tickets-Node-API-' + devID,
            'Content-Type': 'application/xml'
        }
    }
    
    // add the optional options to the request options literal

    if (eventID !== undefined) options.qs.event_id = eventID;

    if (client !== undefined) options.qs.client = client;

    var eventList;

    request( options, function (error, response, body) {

        if (error) {

            console.log('Error! ' + error);

        } else if (response.statusCode === 200) {

            xml2js(body, function(err, results) {
            	
            	eventList = JSON.stringify(results);

            });

        } else {

        }

        return cb(eventList);
    });
};


module.exports = {

    getEvents: getEvents

    // getDates: getDates,

    // getPrices: getPrices

};

