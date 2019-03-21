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
