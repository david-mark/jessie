/*global html,isHostMethod */
/*
Description:
Cutting edge.
*/

/*
Degrades:
IE8, IE7, IE6, IE5.5, IE5, IE4, IE3, Opera 7.6
*/

/*
Author:
David Mark
*/

var attachListener;

if(html && isHostMethod(html, 'addEventListener')) {
	attachListener = function(el, eventType, fn) {

		var listener = function(e) {
			fn.call(el, e);
		};

		el.addEventListener(eventType, listener, false);

		return listener;
	};
}