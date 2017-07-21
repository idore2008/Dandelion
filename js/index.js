/**
 * 
 */

(function(){
	
	if (typeof window.utils == 'undefined' ) {
		window.utils = {};  
	} else {
		window.utils = utils;  
	}
	
	window.utils = {
			
		version : "1.0", 
		isEmpty : function(val) {
			if(val == '' || val == 'undefined' || val == null) {
				return false;
			}
		}
	};
}).call(this);
//})();