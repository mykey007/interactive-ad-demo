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
    './media/bottle-glow.png',
   './media/bottle.png',
   './media/facebook.png',
   './media/final-words.png',	 			 		 		
   './media/pint.png',
   './media/press-here.png',
   './media/scene1.jpg',
   './media/scene2.jpg'
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
