function setup() {
    createCanvas( 720, 400 );
    state = 0;
    black = color( 0 );
    r = random(0, 255);
    g = random( 0, 255 );
    b = random( 0, 255 );
    f = color( r, g, b );
}

var state;
var black;
var r;
var g;
var b;
var f;

function draw() {
    background( 255 );
    f = color( r, g, b );
    if (state == 0) {
        if (mouseOverRect()) {
            f = color( r - 50, g - 50, b - 50 );
        }
        button1( f, 200, 200, 100, 100);
    } else if ( state == 1 ) {
        if ( mouseOverTri() )
        {
            f = color( r - 50, g - 50, b - 50 );
        }
        button2( f, 250, 200, 200, 300, 300, 300);
    } else if ( state == 2 ) {
        if ( mouseOverCirc() )
        {
            f = color( r - 50, g - 50, b - 50 );
        }
        button3( f, 250, 250, 100 );
    } else {
        fill(black);
        text("duh", 100, 100);
    }
}

function button1(c, x, y, l, w) {
    fill( c );
    stroke( black );
    rect(x, y, l, w);
}

function button2(c, x1, y1, x2, y2, x3, y3) {
    fill( c );
    stroke( black );
    triangle( x1, y1, x2, y2, x3, y3 );
}

function button3(c, x, y, d) {
    fill( c );
    stroke( black );
    ellipse(x, y, d, d);
}

function mouseOverRect() {
    if (  200 <= mouseX && mouseX <= 300  &&  200 <= mouseY && mouseY <= 300  ) {
        return true;
    } else
    {
        return false;
    }
}

function mouseOverTri() {
    if ( mouseY <= 300 && mouseX >= 200 && mouseX <= 300 && mouseY >= 300 - ( ( mouseX - 200 ) / ( 50 ) ) * 100 && mouseY >= 300 + ( ( mouseX - 300 ) / ( 50 ) ) * 100 )
    {
        return true;
    } else
    {
        return false;
    }
}

function mouseOverCirc() {
    if (sqrt( pow(mouseX - 250, 2) + pow(mouseY - 250, 2)) <= 50) {
        return true;
    } else {
        return false;
    }
}

function mouseClicked() {
    var tmp = false;

    if ( state == 0 ) {
        if ( mouseOverRect() ) {
            tmp = true;
        }
    } else if ( state == 1 ) {
        if ( mouseOverTri() )
        {
            tmp = true;
        }
    } else if ( state == 2 ) {
        if ( mouseOverCirc() ) {
            tmp = true;
        }
    } else {

    }
    if ( tmp )
    {
        state = round(random( 0, 2 ));
        r = round(random( 10, 255 ));
        g = round( random( 10, 255 ) );
        b = round( random( 10, 255 ) );
    }
}