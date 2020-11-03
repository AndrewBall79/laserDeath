var cGrad = document.getElementById("canvas");
var ctxGrad = cGrad.getContext("2d");

cGrad.width = innerWidth - 500;
cGrad.height = 500;
var posH = -600;
var posV = 200;

var id = setInterval(frame, .5);
function frame() {
        if (posH == innerWidth + 500) {
            posH = -600;
        } else {
            posH += .5;
        }
        var grd = ctxGrad.createRadialGradient(posH, posV, 50, posH, posV, 500);
        grd.addColorStop(0, "rgba(255,220,220,1)");
        grd.addColorStop(1, "rgba(50,100,200,.5)");
// Fill with gradient
        ctxGrad.fillStyle = grd;
        ctxGrad.fillRect(200, 0, innerWidth, 500);
}
frame();

var c = document.getElementById("canvas");

var ctx = c.getContext('2d');

c.width = innerWidth;
c.height = 500;
document.body.appendChild(c);

var perm = [];
let val;
while (perm.length < 255) {
    while (perm.includes(val = Math.floor(Math.random() * 255))) ;
    perm.push(val);
}

var lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
var noise = x => {
    x = x * 0.01 % 255;
    return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
};

var t = 0;

function loop() {
    t += 2;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.beginPath();
    ctx.moveTo(0, c.height);
    for (let i = 0; i < c.width; i++) {
        ctx.lineTo(i, c.height - noise(t + i) * .3 + -250);

    }
    ctx.lineTo(c.width, c.height);
    ctx.fill();
    requestAnimationFrame(loop);
}

loop();


var c2 = document.getElementById("canvas");
var ctx2 = c2.getContext('2d');

c2.width = innerWidth;
c2.height = 500;

document.body.appendChild(c2);

var perm2 = [];
let val2;
while (perm2.length < 255) {
    while (perm2.includes(val2 = Math.floor(Math.random() * 255))) ;
    perm2.push(val2);
}

var lerp2 = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
var noise2 = x => {
    x = x * 0.01 % 255;
    return lerp2(perm2[Math.floor(x)], perm2[Math.ceil(x)], x - Math.floor(x));
};

var t2 = 0;

function loop2() {
    t2 += 3;
    ctx2.fillStyle = "rgb(225,225,225)";
    ctx2.beginPath();
    ctx2.moveTo(0, c2.height);
    for (let i = 0; i < c2.width; i++)
        ctx2.lineTo(i, c2.height - noise2(t2 + i) * 0.2 + -230);
    ctx2.lineTo(c2.width, c2.height);
    ctx2.fill();
    requestAnimationFrame(loop2);
}

loop2();

var c3 = document.getElementById("canvas");
var ctx3 = c3.getContext('2d');

c3.width = innerWidth;
c3.height = 500;

document.body.appendChild(c3);

var perm3 = [];
let val3;
while (perm3.length < 255) {
    while (perm3.includes(val3 = Math.floor(Math.random() * 255))) ;
    perm3.push(val3);
}
var lerp3 = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
var noise3 = x => {
    x = x * 0.02 % 200;
    return lerp3(perm2[Math.floor(x)], perm2[Math.ceil(x)], x - Math.floor(x));
};

var t3 = 0;

function loop3() {
    t3 += 4;
    ctx3.fillStyle = "rgb(200,200,200)";
    ctx3.beginPath();
    ctx3.moveTo(0, c3.height);
    for (let i = 0; i < c3.width; i++)
        ctx3.lineTo(i, c3.height - noise3(t3 + i) * 0.2 + -210);
    ctx3.lineTo(c3.width, c3.height);
    ctx3.fill();
    requestAnimationFrame(loop3);
}

loop3();

var c4 = document.getElementById("canvas");
var ctx4 = c4.getContext('2d');

c4.width = innerWidth;
c4.height = 500;

document.body.appendChild(c4);

var perm4 = [];
let val4;
while (perm4.length < 255) {
    while (perm4.includes(val4 = Math.floor(Math.random() * 255))) ;
    perm4.push(val4);
}
var lerp4 = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
var noise4 = x => {
    x = x * 0.01 % 200;
    return lerp4(perm4[Math.floor(x)], perm4[Math.ceil(x)], x - Math.floor(x));
};

var t4 = 0;

function loop4() {
    t4 += 5;
    ctx4.fillStyle = "rgb(180,180,180)";
    ctx4.beginPath();
    ctx4.moveTo(0, c4.height);
    for (let i = 0; i < c4.width; i++)
        ctx4.lineTo(i, c4.height - noise4(t4 + i) * 0.2 + -190);

    ctx4.lineTo(c4.width, c4.height);
    ctx4.fill();
    requestAnimationFrame(loop4);
}

loop4();

var c5 = document.getElementById("canvas");
var ctx5 = c5.getContext('2d');

c5.width = innerWidth;
c5.height = 500;

document.body.appendChild(c5);

var perm5 = [];
let val5;
while (perm5.length < 255) {
    while (perm5.includes(val5 = Math.floor(Math.random() * 255))) ;
    perm5.push(val5);
}
var lerp5 = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
var noise5 = x => {
    x = x * 0.01 % 200;
    return lerp5(perm5[Math.floor(x)], perm5[Math.ceil(x)], x - Math.floor(x));
};

var t5 = 0;

function loop5() {
    t5 += 6;
    ctx5.fillStyle = "rgba(0,0,0,.01)";
    ctx5.fillRect(0, 0, c5.width, c5.height);
    ctx5.fillStyle = "rgb(160,160,160)";
    ctx5.beginPath();
    ctx5.moveTo(0, c5.height);
    for (let i = 0; i < c5.width; i++)
        ctx5.lineTo(i, c5.height - noise5(t5 + i) * 0.2 + -160);
    ctx5.lineTo(c5.width, c5.height);
    ctx5.fill();
    requestAnimationFrame(loop5);
}

loop5();

