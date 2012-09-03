/*global window,isHostMethod */

/*
Description:
Relies on `window.addEventListener`. No frames.
*/

/*
Degrades:
IE8, Opera 7.6
*/

var attachWindowListener;

if(window && isHostMethod(window, 'addEventListener')) {
	attachWindowListener = function(eventType, fn) {
		
		/*SCAFFOLDING:Start*/
		if (!(/^(load|scroll|resize|orientationchange|unload|beforeunload)$/.test(eventType))) {
			throw new Error('Use attachListener with an element.');
		}
		/*SCAFFOLDING:End*/
		
		var listener = function(e) {
			fn.call(window, e);
		};

		window.addEventListener(eventType, listener, false);

		return listener;
	};
}