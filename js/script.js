var targetElement = $("#target-element").get(0);
use(targetElement);
targetElement.bind("mouse", function(event) {
	alert(typeof event); // should be jQuery.Event
	alert(event.type);
});






















