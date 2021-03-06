$(function(){
    new fullpage('#fullpage', {
        navigation:true,
        anchors: ['index', 'about', 'vision', 'member', 'brand', 'img','story','collection','collection01','collection02','lookbook','lookbook01','lookbook02','website','contact'],
        parallax: true,
        onLeave: function(origin, destination, direction){
            console.log("Leaving section" + origin.index);
        },

        afterLoad: function(origin, destination, direction){
            $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
        },
    });

    $('.look_slide01').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:2000,
        slidesToShow:2,
        slidesToScroll:2,

        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
              }
            },
        ]
        
    });

    $('.section09 i.xi-angle-left-thin').on('click', function(){
        $('.section09 .look_slide01').slick('slickPrev');
    });
    $('.section09 i.xi-angle-right-thin').on('click', function(){
        $('.section09 .look_slide01').slick('slickNext');
    });

    $('.section10 i.xi-angle-left-thin').on('click', function(){
        $('.section10 .look_slide01').slick('slickPrev');
    });
    $('.section10 i.xi-angle-right-thin').on('click', function(){
        $('.section10 .look_slide01').slick('slickNext');
    });


	$(window).on('load resize', function() {
		if($(window).width() > 768) {
			Rsd.slick('unslick');
		}else{
			Rsd.not('.slick-initialized').slick(slickOptions);
		}
	});


    $(window).on('resize', function(){
        if($(window).width()>768)
            $('.menu').removeAttr("style");
        
       });

})