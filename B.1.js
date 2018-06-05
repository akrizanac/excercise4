/**
 * Created by Antoni on 02.06.2018.
 */

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    black = color(0);
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    f = color(r, g, b);
}


var black;
var r;
var g;
var b;
var f;
var x = 0;
var y = 0;
var clicked = true;
var xAxis;
var width = window.innerWidth;
var height = window.innerHeight;
var lastTimeColorChanged;
var times = new Array();
var r1 = 1;
var r2 = 1;
var r3 = 1;
var r4 = 1;
var r5 = 1;
var counter = 0;
var deltaTime;
var sizes = new Array();
var distances = new Array();
var xAxis2


function draw() {
    if (counter <= 50) {
        if (lastTimeColorChanged != null && clicked == true) {
            stopTest();
        }
        f = color(r, g, b);
        if (mouseOverRect()) {
            f = color(r - 50, g - 50, b - 50);
        }
        if (clicked == true) {
            counter++;

            background(255);
            lastTimeColorChanged = new Date().getTime();
            loop1: for (i = 0; i <= 10; i++) {
                var random = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
                xAxis = Math.random() * ((width-110) - 0 + 1) + 0;
                if(xAxis2 != null){
                    var distance = xAxis2-xAxis;
                    if(distance < 0){
                        distance = distance * (-1);
                    }
                    distances.push(Math.floor(distance));
                }
                xAxis2 = xAxis;

                if (random == 1 && r1 <= 10) {
                    sizes.push("20x10");
                    x = 20;
                    y = 10;
                    r1++;
                    break loop1;
                }
                else if (random == 2 && r2 <= 10) {
                    sizes.push("40x20");
                    x = 40;
                    y = 20;
                    r2++;
                    break loop1;
                }
                else if (random == 3 && r3 <= 10) {
                    sizes.push("60x30");
                    x = 60;
                    y = 30;
                    r3++;
                    break loop1;
                }
                else if (random == 4 && r4 <= 10) {
                    sizes.push("80x40");
                    x = 80;
                    y = 40;
                    r4++;
                    break loop1;
                }
                else if (random == 5 && r5 <= 10) {
                    sizes.push("100x50");
                    x = 100;
                    y = 50;
                    r5++;
                    break loop1;
                }
                else {
                    continue loop1;
                }


            }
            button1(f, (xAxis), window.innerHeight / 2, x, y);
            clicked = false;
        }
    } else {
        stopExperiment();
    }


}

function line() {
    var c = document.getElementById("line");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, window.innerHeight / 2);
    ctx.lineTo(400, 200);
    ctx.fill(black);
    ctx.stroke();
}

function button1(c, x, y, l, w) {
    fill(c);
    stroke(black);
    rect(x, y, l, w);
}

function mouseOverRect() {
    if (xAxis <= mouseX && mouseX <= (xAxis + x) && height / 2 <= mouseY && mouseY <= (height / 2 + y)) {
        return true;
    } else {
        return false;
    }
}


function mouseClicked() {
    var tmp = false;
    if (mouseOverRect()) {
        tmp = true;
    }
    else {
    }
    if (tmp) {
        r = round(random(10, 255));
        g = round(random(10, 255));
        b = round(random(10, 255));
        clicked = true;

    }


}

function stopTest() {
    var currTime = new Date().getTime();
    deltaTime = currTime - lastTimeColorChanged;
    times.push(deltaTime);
}

function stopExperiment() {
    clicked = false;
    document.getElementById("times").innerHTML = "[" + times + "]";
    document.getElementById("sizes").innerHTML = "[" + sizes + "]";
    document.getElementById("distances").innerHTML = "[" + distances + "]";
}