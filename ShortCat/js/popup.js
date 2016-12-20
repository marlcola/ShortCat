/**
 *
 */

$(function () {

	var output_message = function (message) {
		var $debug_info = $('#debug_info');

		var html = '<spen class="debug_message">'
			+ message
			+ '</span><br />';
		$debug_info.append(html);
	}

	var flush_message = function () {
		var $debug_info = $('#debug_info');

		$debug_info.empty();
	}

	var reset_btn_color = function () {
		var $keys = $('.key');

		$keys.removeAttr('class');
		$keys.addClass('btn btn-default key');
	}

	var set_btn_color = function (keyId) {
		$('#' + keyId).removeClass('btn-default')
		.add('btn-primary');
	}

	document.onkeydown = function () {
		var keyId = 'key_' + event.keyCode;
		var message = '"' + event.key + '" : ' + keyId;
		flush_message();
		output_message(message);
		reset_btn_color();
		set_btn_color(keyId);
	}
});