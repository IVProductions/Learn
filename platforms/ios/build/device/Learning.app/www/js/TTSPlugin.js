var TTSPlugin = {
    speak: function(message, success, failure){
        cordova.exec(success, failure, "TTSPlugin", "speakStuff", [message]);
    }
};