(function($){

	// Defining our jQuery plugin

	$.fn.modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "250",
			width : "500",
			title:"JQuery Modal Box Demo",
			description: "Example of how to create a modal box.",
			url:"",
			element:"",
			background: "rgba(0,0,0,0.6)",
			carrousel: {
                active: false,
                element: '',
                sync: ''
            },
            data: {
                active: true,
                element: '',
            }
		},prop);

		var getID;
		var dataElement;
				
		return this.click(function(e){
			e.preventDefault();

			if(options.data.active == true){
				dataElement = $(this).data(options.data.element);
			}

			if($(this).data('id')){
				getID = $(this).data('id');
			}

			if(options.carrousel.active == true){
				getID = $(this).data('id');
			}

			add_block_page();
			add_popup_box();
			add_styles();
			
			$('.modal_box').center(true);
			$('.modal_box').fadeIn();

			var width = 0;
	        $(options.element + '.modal .data').each(function() {
	        	$(this).children('div').each(function () {
	        		width += $(this).outerWidth( true );
				});

	            $(this).css({'width': width + 15});
	            width = 0;
	        });
		});
		
		function add_styles(){			
			$('.modal_box').css({ 
				'position':'absolute',
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'z-index':'50',
			});
			$('.modal_close').css({
				'position':'absolute',
				'top':'-20px',
				'right':'-20px',
				'height':'41px',
				'width':'41px',
				'background': 'url('+url_base+'/images/close34x34.png) no-repeat',
				'z-index': '99'
			});
                        /*Block page overlay*/
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();

			$('.block_page').css({
				'position':'fixed',
				'top':'0',
				'left':'0',
				'background-color': options.background,
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'10',
				'margin':'0'
			});
			$('.inner_modal_box').css({
				'background-color':'#fff',
				'height':(options.height) + 'px',
				'width':(options.width) + 'px',
				'box-sizing':'border-box'
			});
		}
		
		 function add_block_page(){
			var block_page = $('<div class="block_page"></div>');
						
			$(block_page).appendTo('body');
			$('body').addClass('modal-open');
		}
		 		
		 function add_popup_box(){
		 	if(options.url != ""){
		 		var pop_up = $('<div class="modal_box"><a href="#" class="modal_close"></a><div class="inner_modal_box"></div></div>');
		 		$(pop_up).appendTo('.block_page');
		 		$('.inner_modal_box').load(options.url, function() {
				  	if(options.carrousel.active == true){ 			
  			 			$(options.carrousel.element).carouFredSel({
  			 			    items : {
  			 			        visible: 1,
  			 			    },
  			 			    scroll : {
  			 			        items: 1
  			 			    },
  			 			    auto            : false,
  			 			    circular        : true,
  			 			    next : {
  			 			        button: function() {
  			 			            return $(this).parent().siblings(".next-item");
  			 			        },
  			 			        key         : 'right',
  			 			    },
  			 			    prev : {
  			 			        button: function() {
  			 			            return $(this).parent().siblings(".prev-item");
  			 			        },
  			 			        key         : 'left',
  			 			    },
  			 			});

 			 			$("a.fb, .sharebox a.fb").live('click', function(e){
 				            e.preventDefault();

 				            elem = $(this);
 				            postToFeed(elem.data('title'), elem.data('desc'), elem.data('url'), elem.data('image'));
 				        });

 				        $("a.tw, .sharebox a.tw").live('click', function(e){
 				            e.preventDefault();

 				            var loc = $(this).attr('href');
 				            var title  = escape( remove_accent($(this).data('title')).toUpperCase() );
 				            window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
 				        });

 				        $("a.pt, .share-box a.pt, .share-menu a.pt").live('click', function(e){
 				            e.preventDefault();

 				            var loc = $(this).attr('href');
 				            window.open(loc, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
 				            return false;
 				        });
  			 		}
				});
		 		
		 	}
		 	else if(options.element != ""){
		 		var pop_up = $('<div class="modal_box"><a href="#" class="modal_close"></a><div class="inner_modal_box"></div></div>');
		 		$(pop_up).appendTo('.block_page');

		 		var element = $(options.element);
		 		var cloneDiv = $(element).clone().addClass('modal');

		 		if(cloneDiv){
			 		cloneDiv.show().appendTo('.inner_modal_box');

			 		setTimeout(function(){
					  	if(options.carrousel.active == true){ 	
					  		var num = parseInt(getID) - 1;
				 			$(options.element + '.modal ' + options.carrousel.element).carouFredSel({
				 			    items : {
				 			        visible: 1,
				 			        start: num,
				 			    },
				 			    scroll : {
				 			        items: 1
				 			    },
				 			    auto            : false,
				 			    circular        : true,
				 			    next : {
				 			        button: function() {
				 			            return $(this).parent().siblings(".next-item");
				 			        },
				 			        key         : 'right',
				 			    },
				 			    prev : {
				 			        button: function() {
				 			            return $(this).parent().siblings(".prev-item");
				 			        },
				 			        key         : 'left',
				 			    },
				 			});

	 			 			$("a.fb, .sharebox a.fb").live('click', function(e){
	 				            e.preventDefault();

	 				            elem = $(this);
	 				            postToFeed(elem.data('title'), elem.data('desc'), elem.data('url'), elem.data('image'));
	 				        });

	 				        $("a.tw, .sharebox a.tw").live('click', function(e){
	 				            e.preventDefault();

	 				            var loc = $(this).attr('href');
	 				            var title  = escape( remove_accent($(this).data('title')).toUpperCase() );
	 				            window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	 				        });

	 				        $("a.pt, .share-box a.pt, .share-menu a.pt").live('click', function(e){
	 				            e.preventDefault();

	 				            var loc = $(this).attr('href');
	 				            window.open(loc, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
	 				            return false;
	 				        });
				 		}
				 		else{
				 			if(getID){
								$('div[data-id="'+getID+'"]').addClass('show');

					 			$("a.fb, .sharebox a.fb").live('click', function(e){
						            e.preventDefault();

						            elem = $(this);
						            postToFeed(elem.data('title'), elem.data('desc'), elem.data('url'), elem.data('image'));
						        });

						        $("a.tw, .sharebox a.tw").live('click', function(e){
						            e.preventDefault();

						            var loc = $(this).attr('href');
						            var title  = escape( remove_accent($(this).data('title')).toUpperCase() );
						            window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
						        });

						        $("a.pt, .share-box a.pt, .share-menu a.pt").live('click', function(e){
						            e.preventDefault();

						            var loc = $(this).attr('href');
						            window.open(loc, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
						            return false;
						        });
							}
				 		}
				 	}, 10);
				}
		 	}
		 	else if(options.data.active == true){
		 		var pop_up = $('<div class="modal_box"><a href="#" class="modal_close"></a><div class="inner_modal_box"></div></div>');
		 		$(pop_up).appendTo('.block_page');

		 		var cloneDiv = $('.'+dataElement).clone().addClass('modal');

		 		if(cloneDiv){
			 		cloneDiv.show().appendTo('.inner_modal_box');

			 		setTimeout(function(){
					  	if(options.carrousel.active == true){ 	

					  		var num = parseInt(getID) - 1;

					  		if(options.carrousel.sync != ''){ 	
					 			$('.'+ dataElement + '.modal ' + options.carrousel.element).carouFredSel({
					  				synchronise: ['.' + dataElement + '.modal ' + options.carrousel.sync, false],
					 			    items : {
					 			        visible: 1,
					 			        start: num,
					 			    },
					 			    scroll : {
					 			        items: 1
					 			    },
					 			    auto            : false,
					 			    circular        : true,
					 			    next : {
					 			        button: function() {
					 			            return $(this).parent().siblings(".next-item");
					 			        },
					 			        key         : 'right',
					 			        onBefore: function (data) {
					 			        	var slide = data.items.visible.eq(0).data('slide');
					 			        	var total = data.items.visible.prevObject.length;

					 			        	if(options.carrousel.last == true) { 	
						 			            if(slide == 1){
						 			            	$('.inner-final').show();

						 			            	var last = parseInt(total) - 1;
						 			            	$('.prev-item.last-scene').click(function(argument) {
						 			            		$('.'+ dataElement + '.modal ' + options.carrousel.element).trigger('slideTo', [last, true] );
						 			            		$('.inner-final').hide();
						 			            	})
						 			            }
					 			            }
					 			        }
					 			    },
					 			    prev : {
					 			        button: function() {
					 			            return $(this).parent().siblings(".prev-item");
					 			        },
					 			        key         : 'left',
					 			        onBefore: function (data) {
					 			            var slide = data.items.visible.eq(0).data('slide');
					 			        	var total = data.items.visible.prevObject.length;

					 			        	if(options.carrousel.last == true) { 	
						 			            if(slide == total){
						 			            	
						 			            }
					 			            }
					 			        }
					 			    },
					 			});

					 			$('.' + dataElement + '.modal ' + options.carrousel.sync).carouFredSel({
					 			    auto            : false,
					 			    scroll : {
					 			        items       : 1,
					 			        fx          : "fade"
					 			    },
					 			});
				 			}else{
				 				$('.'+ dataElement + '.modal ' + options.carrousel.element).carouFredSel({
					 			    items : {
					 			        visible: 1,
					 			        start: num,
					 			    },
					 			    scroll : {
					 			        items: 1
					 			    },
					 			    auto            : false,
					 			    circular        : true,
					 			    next : {
					 			        button: function() {
					 			            return $(this).parent().siblings(".next-item");
					 			        },
					 			        key         : 'right',
					 			    },
					 			    prev : {
					 			        button: function() {
					 			            return $(this).parent().siblings(".prev-item");
					 			        },
					 			        key         : 'left',
					 			    },
					 			});
				 			}

	 			 			$("a.fb, .sharebox a.fb").live('click', function(e){
	 				            e.preventDefault();

	 				            elem = $(this);
	 				            postToFeed(elem.data('title'), elem.data('desc'), elem.data('url'), elem.data('image'));
	 				        });

	 				        $("a.tw, .sharebox a.tw").live('click', function(e){
	 				            e.preventDefault();

	 				            var loc = $(this).attr('href');
	 				            var title  = escape( remove_accent($(this).data('title')).toUpperCase() );
	 				            window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	 				        });

	 				        $("a.pt, .share-box a.pt, .share-menu a.pt").live('click', function(e){
	 				            e.preventDefault();

	 				            var loc = $(this).attr('href');
	 				            window.open(loc, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
	 				            return false;
	 				        });
				 		}
				 		else{
				 			if(getID){
								$('div[data-id="'+getID+'"]').addClass('show');

					 			$("a.fb, .sharebox a.fb").live('click', function(e){
						            e.preventDefault();

						            elem = $(this);
						            postToFeed(elem.data('title'), elem.data('desc'), elem.data('url'), elem.data('image'));
						        });

						        $("a.tw, .sharebox a.tw").live('click', function(e){
						            e.preventDefault();

						            var loc = $(this).attr('href');
						            var title  = escape( remove_accent($(this).data('title')).toUpperCase() );
						            window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
						        });

						        $("a.pt, .share-box a.pt, .share-menu a.pt").live('click', function(e){
						            e.preventDefault();

						            var loc = $(this).attr('href');
						            window.open(loc, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
						            return false;
						        });
							}
				 		}
				 	}, 10);
				}
		 	}
		 	else {
		 		var pop_up = $('<div class="modal_box"><a href="#" class="modal_close"></a><div class="inner_modal_box">' + options.description + '</div></div>');
		 		$(pop_up).appendTo('.block_page');
		 	}
					 
			$('.modal_close').click(function(e){
				e.preventDefault();
				$(this).parent().fadeOut().remove();
				$('.block_page').fadeOut().remove();
				$('body').removeClass('modal-open');	

				if(options.video == true){
					var myPlayer = $('.video-modal');
					myPlayer.stopVideo();
				}
				if(options.element != ""){
					$(options.element).hide();
				}

				$('div[data-id="'+getID+'"]').removeClass('show');	
			});

			$(document).keyup(function(e) {
		        if (e.keyCode == 27) {
					$(this).parent().fadeOut().remove();
					$('.block_page').fadeOut().remove();
					$('body').removeClass('modal-open');	

					if(options.video == true){
						var myPlayer = $('.video-modal');
						myPlayer.stopVideo();
					}

					if(options.element != ""){
						$(options.element).hide();
					}

					$('div[data-id="'+getID+'"]').removeClass('show');	
				}
			});


		}

		return this;
	};

	$.fn.center = function () {
	    this.css("position","absolute");
	    this.css("top", Math.max(0, ( ($(window).height() - $(this).outerHeight()) / 2)) );
	    this.css("left", Math.max(0, ( ($(window).width() - $(this).outerWidth()) / 2)) );
	    return this;
	}
	
})(jQuery);