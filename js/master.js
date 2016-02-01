var url_base = "http://miw3.com/peru/blogsaga/navidad2015";

function remove_accent(str){
    var charMap = {
        Á:'A',É:'E',Í:'I',Ó:'O',Ú:'U',Ñ:'N',
        á:'a',é:'e',í:'i',ó:'o',ú:'u',ñ:'n',
    };

    var str_array = str.split('');

    for( var i = 0, len = str_array.length; i < len; i++ ) {
        str_array[ i ] = charMap[ str_array[ i ] ] || str_array[ i ];
    };

    return str_array.join('');
}

function moveSmooth(element, frame, find){
	if(!frame) frame = 0.15;

	$(window).scroll(function() {
		var photos = $(element),
			windowH = $(window).height(),
			scroll = $(window).scrollTop();

		var i, e, r, n, s, o;

		for (e = 0; e < photos.length; e++) {
			var offTop = $(photos[e]).offset().top; 

			if( scroll > offTop - (offTop/6) ){
				o = Math.round( (scroll - (offTop - (offTop/6) )) / 2 ) * frame;

				$(photos[e]).attr('data-offset',offTop);

				if(find){
					if(o > -20) $(photos[e]).find(find).css({'transform':'translate3d(0px, ' + o + 'px, 0px'});
				}else{
					if(o > -20) $(photos[e]).css({'transform':'translate3d(0px, ' + o + 'px, 0px'});
				}
			}
		}
	});
}

function drawLine(container, line){      
        var pathLength = line.getTotalLength(),
            maxScrollTop = container.height() - $(window).height(),
            percentDone = ($(window).scrollTop()-380) / maxScrollTop,
            length = percentDone * pathLength;
            // console.log($(window).scrollTop());
        line.style.strokeDasharray = [ length ,pathLength].join(' ');
      }

$(document).ready(function(){
     [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
                var menuItems = menu.querySelectorAll('.menu__link'),
                    setCurrent = function(ev) {
                        

                        var item = ev.target.parentNode; // li

                        // return if already current
                        if (classie.has(item, 'menu__item--current')) {
                            return false;
                        }
                        // remove current
                        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                        // set current
                        classie.add(item, 'menu__item--current');
                    };

                [].slice.call(menuItems).forEach(function(el) {
                    el.addEventListener('click', setCurrent);
                });
            });

            [].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
                link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
                new Clipboard(link);
                link.addEventListener('click', function() {
                    classie.add(link, 'link-copy--animate');
                    setTimeout(function() {
                        classie.remove(link, 'link-copy--animate');
                    }, 300);
                });
            });
    // if ( $("#route").length > 0 ) {
    //     $(window).scroll(function() {
    //     drawLine( $('#route'),
    //           document.getElementById('path') );
    //   });  
    //   // init the line length
    //     drawLine( $('#route'),
    //               document.getElementById('path') );
    // };

	$('.arrow-scrolldown').click(function(){
		$.scrollTo('.anchor-link', 1000, { offset: 0 } );
	})

	$('.scrollToTop').click(function(){
        $.scrollTo('.FAPE_tendencias2016_container', 1000, { offset: 0 } );        
    })

    $('.scrollToTop_activewear').click(function(){
        $.scrollTo('.FAPE_tendencias2016_container', 1000, { offset: 0 } ); 
    })

    $(".FAPE_tendencias2016_header").sticky({topSpacing:0});

    // var show = $(this).data('show');
    // $('.button_intro_romantic[data-show="'+show+'"]').addClass('active_romantic_intro');
    // // $('.button_intro_romantic[data-show="'+show+'"]').removeClass('active_romantic_intro'); 
              

    $('.button_intro_romantic').click(function(e) {
            e.preventDefault();

            var show = $(this).data('show');

           
            //   $('.button_intro_romantic[data-show="'+show+'"]').removeClass('active_romantic_intro');  
            // $('.button_intro_romantic[data-show="'+show+'"]').addClass('active_romantic_intro');
            
           


            $(this).parent().find('.button_intro_romantic').siblings().removeClass('active_romantic_intro');
            $(this).addClass('active_romantic_intro');
            
                // if( $(this).hasClass('active_romantic_intro') ) {
                //     $(this).removeClass('active_romantic_intro');
                // }else{
                //     $(this).addClass('active_romantic_intro');
                // }

            $('.colection_ground').css({
                'background-image' : "url('../sybilla/images/collection/grunge/banner_grunge.png')"
            });
            $('.colection_ground[data-content="'+show+'"]').css({
                'background-image' : "url('../sybilla/images/collection/cabecera.jpg')"
            });    

            $('.item-one, .item-two, .content_info_romantic, .content_info_grunge, .FAPE_tendencias2016_colection_grunge').css({
                'display' : 'none',
                'zIndex' : -9
            });

            $('.item-one[data-content="'+show+'"], .item-two[data-content="'+show+'"], .content_info_romantic[data-content="'+show+'"], .content_info_grunge[data-content="'+show+'"], .FAPE_tendencias2016_colection_grunge[data-content="'+show+'"]').css({
                'display' : 'block',
                'zIndex' : 1
            });


            return false;
            
    })

   
     var jash = window.location.hash;

        var kash = jash.substring(1);
                    
                if ( kash ) {

                            $('.button_content_howuse[data-button="'+kash+'"]').addClass('active_howuse').parent().siblings().find('.button_content_howuse').removeClass('active_howuse');

                            $('.jeans_block, .dress_block, .skirt_block').css({
                                'display' : 'none',
                                'zIndex' : -9
                            });

                            $('.jeans_block[data-item="'+kash+'"], .dress_block[data-item="'+kash+'"], .skirt_block[data-item="'+kash+'"]').css({
                                'display' : 'block',
                                'zIndex' : 1
                            });
                            
                            
                      
                }

    $('.button_content_howuse').click(function(e) {
            e.preventDefault();        

            var button = $(this).data('button');

            $(this).addClass('active_howuse').parent().siblings().find('.button_content_howuse').removeClass('active_howuse');

            $('.jeans_block, .dress_block, .skirt_block').css({
                'display' : 'none',
                'zIndex' : -9
            });

            $('.jeans_block[data-item="'+button+'"], .dress_block[data-item="'+button+'"], .skirt_block[data-item="'+button+'"]').css({
                'display' : 'block',
                'zIndex' : 1
            });

          
    })

	$(".FAPE_navidad2015_header").sticky({topSpacing:0});

	$('.menu-toogle').click(function(argument) {
		if( $(this).hasClass('open') ) {
			$(this).removeClass('open');
			$('.menu-inner').animate({'top':'0px'}, 'fast');
		} else {
			$(this).addClass('open');
			$('.menu-inner').animate({'top':'51px'}, 'fast');
		}
	});

	$('.item_btn').modal_box({
        height: '583',
        width: '906',
        background: 'rgba(0,0,0,0.7)',
        data: {
            active: true,
            element: 'box',
        },
        carrousel: {
            active: true,
            element: '.sBs-carrusel .wrapper',
            sync: '.sBs-carruselsync .wrapper'
        },
    });

    $('.btn-modal').modal_box({
        height: '583',
        width: '906',
        background: 'rgba(0,0,0,0.7)',
        data: {
            active: true,
            element: 'box',
        },
        carrousel: {
            active: true,
            element: '.sBs-carrusel .wrapper',
            sync: '.sBs-carruselsync .wrapper',
            last: true,
        },
    });

    $(".share-itembox a.fb").live('click', function(e){
        e.preventDefault();

        elem = $(this);
        postToFeed(elem.data('title'), elem.data('desc'), elem.data('url'), elem.data('image'));
    });

    $(".share-itembox a.tw").live('click', function(e){
        e.preventDefault();

        var url = $(this).data('url');
        var user = $(this).data('user');
        var title  = escape( remove_accent($(this).data('title')) + ' ' + user );
        window.open('http://twitter.com/share?url=' + url + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+ ($(window).height()/2 - 225) +', left='+ ($(window).width()/2 - 225) +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    });

    $(".share-itembox a.pt").live('click', function(e){
        e.preventDefault();

        var url = $(this).data('url');
        var image = $(this).data('image');
        var title = $(this).data('title');
        var desc = $(this).data('desc');
        window.open('http://pinterest.com/pin/create/bookmarklet/?media='+image+'&amp;url='+url+'&amp;is_video=false&amp;description='+title, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600,top='+ ($(window).height()/2 - 225) +', left='+ ($(window).width()/2 - 300) +'');
        return false;
    });

});