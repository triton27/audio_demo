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
