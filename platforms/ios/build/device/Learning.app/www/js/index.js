/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        angular.bootstrap(document, ["Learn"]);
    }
};

/*START -- logic for highlighting sentences being read by TTS*/

var lengthOfSentence = -1;
var indexOfSentence = 0;
var isReadingSentence = false;

function highlightWord() {
    if (isReadingSentence) {
        $("#items li").css({"color" : "black", "font-weight" : "normal"});
        $("#items").children("li").eq(indexOfSentence).css({"color" : "red", "font-weight" : "bold"});
        indexOfSentence++;
    }
}

function doneReadingWord() {
    if (indexOfSentence == lengthOfSentence) {
        $("#items li").css({"color" : "black", "font-weight" : "normal"});
        indexOfSentence = 0;
        lengthOfSentence = -1;
        isReadingSentence = false;
    }
}

/*END -- logic for highlighting sentences being read by TTS*/

