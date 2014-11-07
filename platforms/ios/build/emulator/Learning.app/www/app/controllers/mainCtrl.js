function mainCtrl($scope, $location, sentencesFactory, learnFactory) {
    var scrollHeight = $('.listOfWords').scrollHeight;
    $('.backgroundWords').css("height",""+scrollHeight+"px");

    $(".backgroundSentences").hide();

    $scope.canDelete = false;

    //$scope.sentencesFactory=sentencesFactory;
    //window.localStorage.clear();
    //$scope.sentences = sentencesFactory.sentences; //JSON.parse(window.localStorage.getItem("sentences"));
    $scope.categories = learnFactory.categories;
    $scope.currentCategory = $scope.categories[0];
    $scope.currentWord = $scope.categories[0].words[0];

    $scope.sentences = [];

    if (window.localStorage.getItem("sentences") != null) {
        $scope.sentences = JSON.parse(window.localStorage.getItem("sentences"));
        for (var i = 0; i<$scope.sentences.length; i++){
            delete $scope.sentences[i]["$$hashKey"];
        }
    }
    console.log(window.localStorage.getItem("sentences"));
        $scope.changeCategory = function(id){
        if (id == 0) {
            $(".categoryTitle").html("Favoritter");
            $(".backgroundWords").hide();
            $(".backgroundSentences").show();
        }
        else {
            $(".backgroundWords").show();
            $(".backgroundSentences").hide();
            $scope.currentCategory = $scope.categories[id-1];
            $(".categoryTitle").html($scope.currentCategory.name);
        }
        for (var i=0;i<$scope.categories.length;i++) {
            //$("#"+i).css("background-color", "white");
            $("#"+i).css("border-bottom", "4px solid lightblue");
        }
        $("#"+(id-1)).css("border-bottom", "4px solid red");
        $("#"+id).css("border-bottom", "4px solid red");
    }

    $scope.letsDelete = function (){
        if($scope.canDelete){
            $scope.canDelete = false;
        }
        else {
            $scope.canDelete = true;
        }
    }
    $scope.seeSentence = function(sentence){
        if (buttonDisabled==false) {
            $("#items li").each(function(index, value) {
                value.remove();
            });
            for (var i = 0; i <sentence.words.length; i++){
                var sortableWord = jQuery('<li/>', {
                    class: 'list',
                    text: sentence.words[i].name
                }).click(function() {$scope.readWord($(this).html());}).appendTo($("#items"));
                sortableWord.append('<br/>');
                var sortableWordImg = jQuery('<img/>', {
                    src: sentence.words[i].imageURL,
                    width: "55px",
                    height: "55px"
                }).appendTo(sortableWord);
                sortableWordImg.css({borderBottomLeftRadius: 13, borderBottomRightRadius: 13});
            }
            playAudio("audio/bop_success.mp3")
            $scope.setDroppable();
            isDraggingGlobalWord = false;
            dragCounter = 0;
            indexOfSortable = -1;
            $(".inputBox").css("background-color", "cornflowerblue");
        }
    }

    $scope.redirect = function(path) {
        $location.path(path);
    };


    /*DRAG N DROP FUNCTIONALITY  /  TTS FUNCTIONALITY*/

    $scope.readWord = function(word) {
        if (buttonDisabled==false && isReadingWord==false) {
            var list = word.split("<br>");
            TTSPlugin.speak(list[0],function(){
                isReadingWord = true;
            }, function(){
            });
            isReadingWord = false;
        }
    }

    $scope.readWord2 = function(element) {
        if (buttonDisabled==false && isReadingWord==false) {
            var list1 = element.split(">");
            var word = list1[1].split("<");
            console.log(word[0]);
            TTSPlugin.speak(word[0],function(){
                isReadingWord = true;
            }, function(){
            });
        }
    }

    $scope.readSentence = function() {
        lengthOfSentence = $("#items li").size();
        if (buttonDisabled==false && lengthOfSentence>0) {
            var speechString = "";
            buttonDisabled = (lengthOfSentence>0) ? true: false;
            $("#items li").each(function(index, value) {
                var list = $(value).html().split("<br>");
                speechString += list[0]+";";
            });
            speechString = speechString.substring(0, speechString.length - 1);
            TTSPlugin.speak(speechString,function(){
                //success callback function
                isReadingSentence = true;
            }, function(){
                //failure callback function
            });
        }
    }

    var elementBeingDragged=0;
    var parent;
    var dragWord;
    var isDraggingGlobalWord = false;
    var dragCounter = 0;
    var newParent = $("#partialBody");
    var indexOfSortable = -1;

    $scope.setDraggable = function() {
        $(".draggable").draggable({
            scroll: false,          //disables scrolling while dragging a word
            containment: ".main",   //makes sure you can only drag word around within the bounds of .main container
            drag: function(even,ui) {
                dragCounter ++;
                elementBeingDragged = $(this);
                elementBeingDragged.css("z-index", 2);
                parent = $(this).parent();
                $scope.currentWord = parent.index();
                dragWord = $(this).find("span").html();
                isDraggingGlobalWord = true;
                if (dragCounter==1) {
                    newParent = jQuery('<div/>', {
                        class: 'draggable',
                        style: 'position: absolute; z-index: 1'
                    }).click(function(){$scope.readWord2($(this).html());}).appendTo(parent).hide();
                    jQuery('<span/>', {
                        class: 'wordName',
                        text: dragWord
                    }).appendTo(newParent);
                    $scope.setDraggable();  //recursively call setDraggable() to set newly created jquery elements draggable
                }
            }
        });
    }



    $scope.setDroppable = function() {
        $(".inputBox").droppable({
            over: function(even, ui) {
                if (isDraggingGlobalWord == true) {
                    $(this).css("background-color", "lightgreen");
                }
            },
            out: function(even, ui) {
                if (isDraggingGlobalWord == true) {
                    $(this).css("background-color", "cornflowerblue");
                }
            },
            drop: function(even, ui) {
                console.log("dropped in container");
                if (elementBeingDragged!=0) {
                    elementBeingDragged.remove();
                }
                if (isDraggingGlobalWord) {
                    if(getNewLengthOfSentence(dragWord) < ($(".inputBox").width()-23)) {
                    //if (getNewLengthOfSentence(dragWord) < (($(".inputBox").width() - 23) * 2)) {
                    //if ((getLengthOfSentence()+dragWord.length+250) < (($(".inputBox").width() - 23) * 2)) {
                        console.log("is creating new item");
                        var sortableWord = jQuery('<li/>', {
                            class: 'list',
                            text: dragWord
                        }).click(function() {$scope.readWord($(this).html());}).appendTo($("#items"));
                        sortableWord.append('<br/>');
                        var sortableWordImg = jQuery('<img/>', {
                            src: $scope.currentCategory.words[$scope.currentWord].imageURL,
                            width: "55px",
                            height: "55px"
                        }).appendTo(sortableWord);
                        sortableWordImg.css({borderBottomLeftRadius: 13, borderBottomRightRadius: 13});
                        newParent.show();
                        $scope.setDroppable();
                        $(".inputBox").css("background-color", "cornflowerblue");
                        playAudio("audio/bop_success.mp3")
                    }
                    else {
                        $(".inputBox").css("background", "red")
                        setTimeout(function () {
                            $(".inputBox").css("background", "cornflowerblue");
                        }, 700);
                        playAudio("audio/bop_negative.mp3");
                    }
                }
                isDraggingGlobalWord = false;
                dragCounter = 0;
                indexOfSortable = -1;
                console.log(isDraggingGlobalWord);
            }
        });
        $("html").droppable({
            drop: function(even, ui) {
                if (elementBeingDragged!=0) {   //user drags word from list of words and drops it before reaching sentence box
                    elementBeingDragged.remove();
                }
                if (indexOfSortable != -1) {    //user drags word from sentence out of sentence box and drops it
                    $("#items li").eq(indexOfSortable).remove();
                    indexOfSortable = -1;
                    playAudio("audio/deleted_sentence.wav");
                }
                newParent.show();
                isDraggingGlobalWord = false;
                dragCounter = 0;
                console.log("dropped in body");
            }
        });
    }

    function getNewLengthOfSentence(newWord) {
        var newEl = jQuery('<li/>', {
            class: 'list',
            text: dragWord
        }).click(function() {$scope.readWord($(this).html());}).appendTo($("#items"));

        var length = 0;
        //var length += (value.offsetWidth + 5);

        $("#items li").each(function(index, value) {
            length += (value.offsetWidth + 5);
            console.log("Length of element: "+value.offsetWidth);
        });
        newEl.remove();
        console.log("New Length will be: "+length);
        console.log("Length of input box: "+$(".inputBox").width());
        //return (length + 170);
        return (length + 30);
    }

    $scope.setSortable = function() {
        $("#items").sortable({
            scroll: false,
            placeholder: "highlight",
            start: function (event, ui) {
                //sortableBeingDragged = $(this);
                ui.item.toggleClass("highlight");
                indexOfSortable = ui.item.index();
            },
            stop: function (event, ui) {
                //sortableBeingDragged = 0;
                ui.item.toggleClass("highlight");
            }
        });
        $("#items").disableSelection();
    }

/*
    function getLengthOfSentence() {
        console.log("Length of input box: "+$(".inputBox").width());
        var length=0;
        $("#items li").each(function(index, value) {
            length += (value.offsetWidth + 5);
            console.log("Length of element: "+value.offsetWidth);
        });
        return length;
    }
*/
    $scope.setAsFavorite = function() {
            if ($("#items li").size() != 0) {
                var duplicate = false;
                var newSentence = "";
                $("#items li").each(function(index, value) {
                    var list = $(value).html().split("<br>");
                    newSentence += list[0];
                });
                var oldSentence = "";
                for(var i = 0; i<$scope.sentences.length; i++){   //for every sentence
                    for(var j = 0; j<$scope.sentences[i].words.length; j++){  //for every word in sentence
                        oldSentence += $scope.sentences[i].words[j].name;
                    }
                    console.log("Favorite sentence "+newSentence);
                    console.log("Existing sentence "+oldSentence);
                    if(newSentence == oldSentence){
                        duplicate = true;
                        break;
                    }
                    oldSentence = "";
                }
                if(!duplicate){
                    playAudio("audio/added_to_favorite.wav");
                    var str = '{"words": [';
                    //var listOfWords = [];
                    $("#items li").each(function(index, value) {
                        var list = $(value).html().split("<br>");
                        var word = list[0];
                        var imageURL = list[1].split('"')[1];
                        str += '{"name": "'+word+'", "imageURL": "'+imageURL+'"},'
                    });
                    str = str.substring(0, str.length-1);
                    str += ']}';
                    var object = JSON.parse(str);
                    $scope.sentences.push(object);
                    //console.log($scope.sentences);
                    //$scope.sentences.push({"words":listOfWords});
                    window.localStorage.setItem("sentences", JSON.stringify($scope.sentences));
                    var r = Math.random().toString().substring(3,7);
                    var $starAnim = $("<img>", {src: "img/star.png", class: "starAnim"+r+" star", height: "10", width: "10"});
                    $starAnim.css('position', 'absolute');
                    $starAnim.css('top', '300px');
                    $starAnim.css('left', '500px');
                    $(".main").append($starAnim);
                    //$('.critAnim'+r).animate({percent: 200}, 500, function () {
                    //	$('.critAnim'+r).remove();
                    //});
                    $('.starAnim'+r).effect("scale", {percent:5000, origin:['middle','center']}, 300, function () {
                        $('.starAnim'+r).remove();
                        $(".star").remove();
                    });
                }
            }
    }

    $scope.removeSentence = function() {
        if (buttonDisabled==false) {
            $("#items li").each(function(index, value) {
                value.remove();
            });
            playAudio("audio/deleted_sentence.wav");
        }
    }

    $scope.deleteFavorite = function(index) {
        $scope.sentences = JSON.parse(window.localStorage.getItem("sentences"));
        $scope.sentences.splice(index, 1);
        window.localStorage.setItem("sentences", JSON.stringify($scope.sentences));
        playAudio("audio/deleted_sentence.wav");
    }

    function playAudio(audioPath) {
        // Play the audio file at audioPath
        var audio = new Media(audioPath,
            // success callback
            function () {
                console.log("playAudio():Audio Success");
            },
            // error callback
            function (err) {
                console.log("playAudio():Audio Error: " + err);
            }
        );
        // Play audio one time
        audio.play({numberOfLoops: 1});
    }
}
