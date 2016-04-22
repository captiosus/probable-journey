/**
 * @file    Bouncy Balls!
 * @author  Kathy Wang (kwangaroo), Roy Xu(captiosus)
 */

/* 
   problems rn: buttonspam makes the balls freak out, also makes clear not work
 */

var canvas = document.getElementById( "playground" );
var bounceb = document.getElementById( "bouncestart" );
var stopb = document.getElementById( "bouncestop" );
var clear = document.getElementById( "clearb" );

/**
 *	Wrapper function for BOUNCY BALLS!
 */
var logo = function() {
  var balls = [];
  var stops = [];
  /**
   * Creates a ball!!
   */
  var createBall = function() {
    var c = document.createElementNS(
      "http://www.w3.org/2000/svg", "circle" );
    //circle initialization
    c.setAttribute( "cx", 25);
    c.setAttribute( "cy", 25 );
    c.setAttribute( "r", 25 );
    c.setAttribute( "fill", "red" );
    c.setAttribute( "stroke", "black" );

    balls.push( c );
    canvas.appendChild( c );

    var dx = 3;
    var dy = 2;

    var hypotenuse = function( x, y ) {
      return x * x + y * y;
    };

    var bounce = function() {
      var x = parseInt( c.getAttribute( 'cx' ) );
      var y = parseInt( c.getAttribute( 'cy' ) );
      x += dx;
      y += dy;

      if ( x < 25 || x >= 475 ) {
        dx = -dx;
        x += dx;
      }
      if ( y < 25 || y >= 475 ) {
        dy = -dy;
        y += dy;
      }
	for ( var a = 0; a < balls.length; a++ ) {
            hypot = hypotenuse( x - parseInt( balls[ a ].getAttribute( 'cx' ) ), y - parseInt( balls[ a ].getAttribute( 'cy' ) ) );
            if ( hypot > hypotenuse( dx, dy ) && hypot <= 2500 ){
		dx = -dx;
		dy = -dy;
		x += dx;
		y += dy;
            }
	};
	    
      c.setAttribute( "cx", x );
      c.setAttribute( "cy", y );
    };
      stops.push( window.setInterval(bounce, 16 ) );
  };

  

  /**
   * Stops 1 ball!!! For now...
   */
  var stop = function() {
    for ( var i = 0; i < stops.length; i++ ) {
      clearInterval( stops[ i ] );
    }
  };

    //clears canvas!! 
    var clearBalls = function(){ 
	for(var a = 0; a < balls.length; a++){
	    console.log(a);
	    console.log(balls[a]);
	    canvas.removeChild(balls[a]);
	}
	balls = [];
	console.log("clear ran");
	console.log(balls);
    };

  /**
   * The dictionary for accessing class elements
   */
  return {
    attr: function( a, b ) {
      c.setAttribute( a, b );
    },
    setdx: function( n ) {
      dx = n;
    },
    setdy: function( n ) {
      dy = n;
    },
    balls: balls,
    createBall: createBall,
    stop: stop,
    clear: clearBalls
  };
};

var kathy = logo();

bounceb.addEventListener( "click", kathy.createBall );
stopb.addEventListener( "click", kathy.stop );
clear.addEventListener( "click", kathy.clear );
