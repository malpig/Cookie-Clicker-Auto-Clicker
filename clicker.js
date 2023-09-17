function clickId(id) {
  var element = document.getElementById(id);
	if(element !== undefined) {
		doEvent(element, "click");
	}
	window.setTimeout(clickId, 1, id);
}

function doEvent(element, type) {
    trigger = document.createEvent('HTMLEvents');
    trigger.initEvent(type, true, true);
    element.dispatchEvent(trigger);
}

window.setTimeout(clickId, 25, "bigCookie");
window.setTimeout(clickId, 25, "goldenCookie");
