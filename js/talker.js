//This is the talkBot He sounds really cool and smart

function talkBot(words, pitch) {
    return new Promise((res) => {
        var word = new SpeechSynthesisUtterance(words);
        word.pitch = pitch;
        word.rate = .7;
        speechSynthesis.speak(word);
        setTimeout(res, 100)
    });
}

//This is the first talkBot with onClick function


$('#talkBot').click(event => {
    let input = $("#mySelect").val();
    console.log(input);
    if (input === "1") {
        return talkBot('Wop', .6)
            .then(() => talkBot('ba ba', .9))
            .then(() => talkBot('Loo bop', .9))
            .then(() => talkBot('a wop', .9))
            .then(() => talkBot('bam boom', .1))
    }
    if (input === "2"){
        return talkBot('Enter Night', .6)
            .then(() => talkBot('Exit Light', .9))
            .then(() => talkBot('Take My Hand', .9))
            .then(() => talkBot("We're off to never never land", .9))
            .then(() => talkBot("That's right", .1))
    }
    if (input === "3"){
        return talkBot('Words like violence', .6)
            .then(() => talkBot('Break the silence', .9))
            .then(() => talkBot('Come crashing in', .9))
            .then(() => talkBot("Into my little world", .9))
    }
    else {
        return talkBot("I don't know that one", 1)
    }
});


// THIS IS THE SUPER FUN "Ps and Qs" THE GAME!!!


$("#submit1").click(event => {
    let input = $("#userInput1").val();
    console.log(event.keyCode);
    if (input === "q") {
        return talkBot("You're a a a lefty", .6)
    }
    if (input === "p") {
        return talkBot("You're A Righty", .6)
    } else {
        return talkBot("No, You Must Press P or Q", 1)
    }
});


// This will tell you if you entered an odd or even number

$("#submit2").click(function (event) {
    let a = $("#userInput2").val();
    event.preventDefault();
    console.log(a);
    if (a === '' || isNaN(parseInt(a))) {
        return talkBot('Enter a number', 1)
    }
    if (a % 2 === 0) {
        return talkBot("even", .8)
    } else {
        return talkBot('Odd', .5)
    }

});


// make talkbot say any thing!!!

$("#submit3").click(function (event) {
    let a = $("#userInput3").val().toString();
    event.preventDefault();
    return talkBot(a, 1);
});




// Unused MIDI music functions, to be used for future notation coding

var context = null;
var oscillator = null;

function getOrCreateContext() {
    if (!context) {
        context = new AudioContext();
        oscillator = context.createOscillator();
        oscillator.connect(context.destination);
    }
    return context;

}

const list = document.getElementById('midi-list');
const debugEl = document.getElementById('debug');

let isStarted = false;

function changeType(type) {
    oscillator.type = type;
}

const length = 2;
const eps = 0.01;

// Below is keyboard emulation for C4-C5 q-i keys
var emulatedKeys = {
    q: 60,
    w: 62,
    e: 64,
    r: 65,
    t: 67,
    y: 69,
    u: 71,

    i: 72,
};

document.addEventListener('keydown', function (e) {
    console.log(e);
    if (emulatedKeys.hasOwnProperty(e.key)) {
        noteOn(emulatedKeys[e.key]);
    }
});

document.addEventListener('keyup', function (e) {
    if (emulatedKeys.hasOwnProperty(e.key)) {
        noteOff();
    }
});

// This is a tetris theme transposed from https://musescore.com/user/16693/scores/38133
// const tetris = [
//     [76, 4], [71, 8], [72, 8], [74, 4], [72, 8], [71, 8], [69, 4], [69, 8], [72, 8], [76, 4], [74, 8], [72, 8], [71, 4], [71, 8], [72, 8], [74, 4], [76, 4], [72, 4], [69, 4], [69, 4], [0, 4], [74, 3], [77, 8], [81, 4], [79, 8], [77, 8], [76, 3], [72, 8], [76, 4], [74, 8], [72, 8], [71, 4], [71, 8], [72, 8], [74, 4], [76, 4], [72, 4], [69, 4], [69, 4], [0, 4],
// ];
//
// function playTetris() {
//     getOrCreateContext();
//     oscillator.start(0);
//     var time = context.currentTime + eps;
//     tetris.forEach(note => {
//         const freq = Math.pow(2, (note[0] - 69) / 12) * 440;
//         console.log(time);
//         oscillator.frequency.setTargetAtTime(0, time - eps, 0.001);
//         oscillator.frequency.setTargetAtTime(freq, time, 0.001);
//         time += length / note[1];
//     });
// }
//
// document.getElementById('typesine').addEventListener('click', changeType.bind(null, 'sine'));
// document.getElementById('typesquare').addEventListener('click', changeType.bind(null, 'square'));
// document.getElementById('typesaw').addEventListener('click', changeType.bind(null, 'sawtooth'));
// document.getElementById('typetriangle').addEventListener('click', changeType.bind(null, 'triangle'));
//
// document.getElementById('tetris').addEventListener('click', playTetris);
//
// function noteOn(midiNote) {
//     getOrCreateContext();
//     const freq = Math.pow(2, (midiNote - 69) / 12) * 440;
//     oscillator.frequency.setTargetAtTime(freq, context.currentTime, 0);
//     if (!isStarted) {
//         oscillator.start(0);
//         isStarted = true;
//     } else {
//         context.resume();
//     }
// }
//
// function noteOff() {
//     context.suspend();
// }
//
// function connectToDevice(device) {
//     console.log('Connecting to device', device);
//     device.onmidimessage = function (m) {
//         const [command, key, velocity] = m.data;
//         if (command === 145) {
//             debugEl.innerText = 'KEY UP: ' + key;
//             noteOn(key);
//         } else if (command === 129) {
//             debugEl.innerText = 'KEY DOWN';
//             noteOff();
//         }
//     }
// }
//
// function replaceElements(inputs) {
//     while (list.firstChild) {
//         list.removeChild(list.firstChild)
//     }
//     const elements = inputs.map(e => {
//         console.log(e);
//         const el = document.createElement('li');
//         el.innerText = `${e.name} (${e.manufacturer})`;
//         el.addEventListener('click', connectToDevice.bind(null, e));
//         return el;
//     });
//
//     elements.forEach(e => list.appendChild(e));
// }
//
// navigator.requestMIDIAccess()
//     .then(function (access) {
//         console.log('access', access);
//         replaceElements(Array.from(access.inputs.values()));
//         access.onstatechange = function (e) {
//             replaceElements(Array.from(this.inputs.values()));
//         }
//
//     });