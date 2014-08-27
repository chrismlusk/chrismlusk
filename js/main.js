// ( function( $ ) {

// 	function enableSkrollr(){
// 		console.log('on desktop');

// 		// enable skrollr for non-touch devices
// 		if(!Modernizr.touch){
// 			var s = skrollr.init({
// 				forceHeight: false
// 			});
// 		}
// 	}

// 	function disableSkrollr(){
// 		console.log('on mobile');

// 		// destroy skrollr
// 		var s = skrollr.init();
// 		s.destroy();
// 	}

// 	enquire.register("screen and (min-width: 768px)", {
// 	    match : function() {
// 	        enableSkrollr();
// 	    },  
// 	    unmatch : function() {
// 	        disableSkrollr();
// 	    }
// 	});

// } )( jQuery );