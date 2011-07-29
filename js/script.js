$(function() {
	use(window);
	window.bind("key", function(event) {
		// event is a first-class jQuery.Event, with all the requisite properties.
		alert(event.type);
	});
});






















