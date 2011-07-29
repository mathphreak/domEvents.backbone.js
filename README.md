domEvents.backbone.js
=====================

Wraps events on DOM objects with Backbone.Events, using jQuery to detect them.

Example
-------
	var targetElement = $("#target-element").get(0); // returns a real DOM element
	use(targetElement);
	targetElement.bind("mouse", function(event) {
		alert(typeof event); // should be jQuery.Event
		alert(event.type);
	});

Live Demo
--------
Check out the live demo [here](http://mathphreak.github.com/domEvents.backbone.js).

Detailed Documentation
----------------------
### Dependencies
underscore.js, backbone.js, and jQuery.
### `use(...)`
Takes in several DOM objects (please don't feed it jQuery objects; it wraps the arguments itself) and adds
Backbone.Events and all the proper jQuery bindings.
### `<domElement>.bind("namespace[:event]", callback)`
Namespaces and events are listed below.  You can also bind on the namespace and catch all the events in
that namespace.  `callback` gets one argument, and it's a
[jQuery event object](http://api.jquery.com/category/events/event-object/).

Event List
----------
 * `key:down`/`press`/`up`
 * `focus:in`/`out`
 * `browser:error`/`resize`/`scroll`
 * `status:load`/`ready`/`unload`
 * `form:blur`/`change`/`focus`/`select`/`submit`
 * `mouse:click`/`dblclick`/`down`/`enter`/`leave`/`move`/`out`/`over`/`up`
