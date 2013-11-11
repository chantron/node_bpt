Brown Paper Tickets API Node
============================

A simple library for interacting with the Brown Paper Tickets API.

[BPT API documentation](http://www.brownpapertickets.com/apidocs/index.html)

Data is returned as a json object.

** You must have Developer Tools added to your account **
To obtain your developer ID, you must first have developer tools added to your Brown Paper Tickets account. First log into BPT, then go to Account Functions. Click Developer Tools and then add. You'll see a new link in the BPT navigation titled "Developer". Click that and you'll see your developer ID listed at the top.

Note: This is my first attempt of creating something usuable in node, please excuse any crappy code to my node noobness.

Usage
-----

Pretty simple!

``` javascript
var bptAPI = require('bptAPI');

// You'll need to pass an options object. 

var bptOpts = {
	devID: 'Your Developer ID', // This is required for all calls.
	client: '', // The username of the BPT producer
	eventID: 123456, // If passed to .getEvents it will pull info for this event only
	dateID: 123456 // Pass to .getPrices to obtain all prices for this date (not yet implemented)
}

var eventList = bpt.getEvents(bptOptions, events(events) {
	
	console.log(events);

});

// console output:

[ { title: [ 'Event 1' ],
    link: [ 'http://www.brownpapertickets.com/event/123456' ],
    description: [ 'Event 1's short description.' ],
    event_id: [ '123456' ],
    live: [ 'y' ],
    e_address1: [ 'Address 1' ],
    e_address2: [ 'Address 2' ],
    e_city: [ 'Seattle' ],
    e_state: [ 'WA' ],
    e_country: [ 'United States' ],
    e_zip: [ '98122' ],
    e_phone: [ '1.800.838.3006' ],
    e_web: [ 'http://www.brownpapertickets.com' ],
    e_description: [ 'Event 1's full description. ],
    c_name: [ 'Brown Paper Tickets' ],
    c_phone: [ 'Contact Info's phone number.'],
    c_address1: [ 'Contact Info's Address 1' ],
    c_address2: [ 'Contact Info's Address 2' ],
    c_city: [ 'Contact Info's City' ],
    c_state: [ 'Contact Info's State' ],
    c_country: [ 'Contact Info's Country' ],
    c_zip: [ 'Contact Info's Zip' ],
    c_email: [ 'Contact Info's email' ] },
  { title: [ 'Test Event 2' ],
    link: [ 'http://www.brownpapertickets.com/event/123456' ],
    description: [ 'Event 2's short description.' ],
    event_id: [ '123456' ],
    live: [ 'y' ],
    e_address1: [ 'Address 1' ],
    e_address2: [ 'Address 2' ],
    e_city: [ 'Seattle' ],
    e_state: [ 'WA' ],
    e_country: [ 'United States' ],
    e_zip: [ '98122' ],
    e_phone: [ '1.800.838.3006' ],
    e_web: [ 'http://www.brownpapertickets.com' ],
    e_description: [ 'Event 2's full description. ],
    c_name: [ 'Brown Paper Tickets' ],
    c_phone: [ 'Contact Info's phone number.'],
    c_address1: [ 'Contact Info's Address 1' ],
    c_address2: [ 'Contact Info's Address 2' ],
    c_city: [ 'Contact Info's City' ],
    c_state: [ 'Contact Info's State' ],
    c_country: [ 'Contact Info's Country' ],
    c_zip: [ 'Contact Info's Zip' ],
    c_email: [ 'Contact Info's email' ] } ]
```

To Do
-----

Add getDates, getPrices.