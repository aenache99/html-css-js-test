(function(window) {
    const speakWord = "Hello";
    window.helloSpeaker = function (name) {
        console.log(speakWord + " " + name);
    };

})(window);