$(function (){
//----------------------------------------

new fullpage('#fullpage', {
    anchors: ['MAIN', 'LOOKBOOK', 'NEW', 'COLLABORATION', 'BEST&BUYING', 'GROVE'],
    verticalCenterd: true,
    keyboardScrolling: true,
    responsiveWidth:769,
  });


$('#visual .main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});


$('#content01 #lookbook_list').slick({
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('.number span').text(1);
$('.list_imgS01 figure').on('click', function(){
    var idx= $(this).index();
    //console.log(idx);
    $('#lookbook_imgL figure').eq(idx).addClass('on').siblings().removeClass('on');
    $('.number span').text(idx+1);
});

$('.list_imgS02 figure').on('click', function(){
    var idx= $(this).index();
    //console.log(idx);
    $('#lookbook_imgL figure').eq(idx + 6).addClass('on').siblings().removeClass('on');
    $('.number span').text(idx+7);
});

$('#content01 i.xi-angle-left-thin').on('click', function(){
    $('#content01 #lookbook_list').slick('slickPrev');
});
$('#content01 i.xi-angle-right-thin').on('click', function(){
    $('#content01 #lookbook_list').slick('slickNext');
});



$('#content03 .collabo_slider').slick({
    arrows:false,
    autoplay:true,
    fade:true,
    pauseOnHover:true,
    pauseOnFocus:false,
});


$('#content03 .btn_left').on('click', function(){
    $('#content03 .collabo_slider').slick('slickPrev');
});
$('#content03 .btn_right').on('click', function(){
    $('#content03 .collabo_slider').slick('slickNext');
});


$('.nav strong').on('click', function(){
    $('.nav').toggleClass('on');
});


//----------------------------------------
})