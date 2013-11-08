'use strict';

var xml2js = require('xml2js').parseString,
    util = require('util'),
    request = require('request');

var devID;
var client;
var eventID;
var dateID;
var priceID;

// set xml2js options

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
            //'User-Agent': 'Brown-Paper-Tickets-Node-API-' + devID,
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


// var getDates = function(devID, eventID) {

//     var list;

//     var options = {
//         url: 'https://www.brownpapertickets.com/api2/datelist?id=' + devID + 'event_id=' + eventID,
//         method: 'GET',
//         headers: {
//             'User-Agent': 'Brown Paper Tickets API Node - ' + devID
//         }
//     }

//     var dates = request(options, function( error, response, body ) {
//         if (error) {
//             throw error;
//         }

//         if (response.statusCode == 200 ) {

//         }

//     });

//     return dates;
// }

// var getPrices = function(devID, dateID) {

//     var options = {
//         url: 'https://www.brownpapertickets.com/api2/pricelist?id=' + devID + 'date_id=' + dateID,
//         method: 'GET',
//         headers: {
//             'User-Agent': 'Brown Paper Tickets API Node - ' + devID
//         }
//     }
//     var prices = request(options, function( error, response, body ) {
//             if (error) {
//                 throw error;
//             }

//             if (response.statusCode == 200 ) {

//             }

//         });

//         return prices;

//     /*
//     var prices = https.request(options, function(res) {
//         console.log('Got response: ' + res.statusCode);
//     })

//     prices.on('error', function(e) {
//         console.log('Got error: ' + e.message + '\nurl: ' + options.host + options.path );
//     });

//     prices.end();

//     return prices;
//     */
// }

module.exports = {

    getEvents: getEvents

    // getDates: getDates,

    // getPrices: getPrices

};

