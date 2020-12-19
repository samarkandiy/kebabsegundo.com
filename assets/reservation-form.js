(function($) {
    "use strict";

	var pickerOt = {
		closeText: "close",
		currentText: "current",
		nextText: "next",
		prevText: "preview",
		monthNames: ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"],
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
		"Aug", "Sep", "Oct", "Nov", "Dec"],
		dayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
		"Saturday", "Sunday"],
		dayNamesShort: ["Su","Mo", "Tu", "We", "Th", "Fr", "Sa"],
		dayNamesMin: ["Su","Mo", "Tu", "We", "Th", "Fr", "Sa"],
		dateFormat: "mm-dd-yy",
		firstDay: 1,
		isRTL: false,
		showButtonPanel: false
	};
	
	   $('.datepicker-ot').datepicker(pickerOt);
	
	})(jQuery);