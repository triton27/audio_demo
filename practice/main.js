// 音声を管理する役割を持つ AudioContext を作成する
var context;
window.addEventListener('load','init', false);
function init() {
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        const ac = new AudioContext();
    }
    catch (e) { // exception_var の 'e'
        alert('Web Audio API is not supported in this browser.');
    }
}

// 音声サンプルをロードする
var dogBarkingBuffer = null;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function loadDogSound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function () {
        context.decodeAudioData(request.response, function (buffer) {
            dogBarkingBuffer = buffer;
        }, onError);
    };
    request.send();
}

// 音を再生する
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function playSound(buffer) {
    const source = context.createBufferSource(); // create a sound source
    source.buffer = buffer; // tell the source which sound to play
    source.connect(context.destination); // connect the source now
    source.start(0); // play the source now
    // note: on older systems, may have to use deprecated noteOn(time);
}

window.onload = init;
var context;
var bufferLoader;

function init() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    constext = new AudioContext();

    bufferLoader = new BufferLoader(
        context,
        [
            '../sounds/hyper-reality/br-jam-loop.wav',
            '../sounds/hyper-reality/laughter.wav'
        ],
        finishedLoading
    );
    bufferLoader.load();
}

function finishedLoading(bufferList) {
    var source1 = context.createBufferSource();
    var source2 = context.createBufferSource();
    source1.buffer = bufferList[0];
    source2.buffer = bufferList[1];

    source1.connect(context.destination);
    source2.connect(context.destination);
    source1.start(0);
    source2.start(0);
}
