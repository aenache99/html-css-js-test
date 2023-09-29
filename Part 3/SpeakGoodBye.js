(function(window) {
    const speakWord = "Good Bye";
    window.byeSpeaker = function (name) {
        console.log(speakWord + " " + name);
    };

})(window);