var canvas = document.getElementById( "playground" );
var bounceb = document.getElementById( "bouncestart" );
var stopb = document.getElementById( "bouncestop" );


var logo = function() {
  var balls = [];
  var createBall = function() {
    var c = document.createElementNS(
      "http://www.w3.org/2000/svg", "circle" );
    //circle initialization
    c.setAttribute( "cx", 50 );
    c.setAttribute( "cy", 50 );
    c.setAttribute( "r", 25 );
    c.setAttribute( "fill", "red" );
    c.setAttribute( "stroke", "black" );

    balls.push( c );
    console.log( balls );
    canvas.appendChild( c );

    var dx = 3;
    var dy = 2;

    var bounce = function() {
      //	    console.log("bounce running");

      var x = parseInt( c.getAttribute( 'cx' ) );
      var y = parseInt( c.getAttribute( 'cy' ) );
      x += dx;
      y += dy;

      //	    console.log(x);
      //	    console.log(y);

      c.setAttribute( "cx", x.toString() );
      c.setAttribute( "cy", y.toString() );
      if ( x < 25 || x >= 475 ) dx = -dx;
      if ( y < 25 || y >= 475 ) dy = -dy;
    };
    intervalID = window.setInterval( bounce, 16 );
    console.log( "bounce called" );
  };

  var stop = function() {
    window.clearInterval( intervalID );
  };

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
    stop: stop
  };
};

var kathy = logo();

bounceb.addEventListener( "click", kathy.createBall );
stopb.addEventListener( "click", kathy.stop );
