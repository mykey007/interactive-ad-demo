$.preload = function(){
	var tmp = [], i = arguments.length;
	for( ; i-- ; ){
		tmp.push( $( '<img>' ).attr( 'src', arguments[ i ]).load( function(){
			if( i === 0 ){
				arguments[ arguments.length ]();
			}
		}));
	}
};

$.preload( 
 	'http://s3-ap-northeast-1.amazonaws.com/marketjs-lab/interactive-ad-template/media/bottle-glow.png',
	'http://s3-ap-northeast-1.amazonaws.com/marketjs-lab/interactive-ad-template/media/bottle.png',
	'http://s3-ap-northeast-1.amazonaws.com/marketjs-lab/interactive-ad-template/media/facebook.png',
	'http://s3-ap-northeast-1.amazonaws.com/marketjs-lab/interactive-ad-template/media/final-words.png',	 			 		 		
	'http://s3-ap-northeast-1.amazonaws.com/marketjs-lab/interactive-ad-template/media/pint.png',
	'http://s3-ap-northeast-1.amazonaws.com/marketjs-lab/interactive-ad-template/media/press-here.png',
	'http://s3-ap-northeast-1.amazonaws.com/marketjs-lab/interactive-ad-template/media/scene1.jpg',
	'http://s3-ap-northeast-1.amazonaws.com/marketjs-lab/interactive-ad-template/media/scene2.jpg'
);

function gotoScene2(){
	document.querySelector("#scene1").style.display = "none"
	document.querySelector("#scene2").style.display = "block"
	
	$('#tagline').addClass('animated bounceInLeft');
	$('#facebook').addClass('animated bounceInUp');
}

function createDiv(id) {
    var div = document.createElement("div");
    div.setAttribute("id", id);
    document.body.appendChild(div);
}

$( document ).ready(function() {
    createDiv('scene1');
	$('#scene1').wrapInner('<div id="press-here"></div><div id="bottle1-glow"></div><a onclick="gotoScene2();"><div id="bottle1"></div></a>');
			
	createDiv('scene2');
	$('#scene2').wrapInner('<div id="bottle2"></div><div id="tagline"></div><a href="https://www.facebook.com/CarlsbergHK"><div id="facebook"></div></a>')
});
