function mainCtrl($scope, $location, sentencesFactory, learnFactory) {
    var scrollHeight = $('.listOfWords').scrollHeight;
    $('.backgroundWords').css("height",""+scrollHeight+"px");

    $(".backgroundSentences").hide();

    //$scope.sentencesFactory=sentencesFactory;
    //window.localStorage.clear();
    $scope.sentences = sentencesFactory.sentences; //JSON.parse(window.localStorage.getItem("sentences"));
    $scope.categories = learnFactory.categories;
    $scope.currentCategory = $scope.categories[0];
    $scope.currentWord = $scope.categories[0].words[0];
    if (window.localStorage.getItem("sentences") != null) {
        $scope.sentences = window.localStorage.getItem("sentences");
        /*JSON.stringify($scope.sentences, function(key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val;
        })*/
    }
    console.log(window.localStorage.getItem("sentences"));
        $scope.changeCategory = function(id){
        if (id == 0) {
            $(".backgroundWords").hide();
            $(".backgroundSentences").show();
        }
        else {
            $(".backgroundWords").show();
            $(".backgroundSentences").hide();
            $scope.currentCategory = $scope.categories[id-1];
        }
        for (var i=0;i<$scope.categories.length;i++) {
            //$("#"+i).css("background-color", "white");
            $("#"+i).css("border-bottom", "4px solid lightgrey");
        }
        $("#"+(id-1)).css("border-bottom", "4px solid red");
        $("#"+id).css("border-bottom", "4px solid red");
    }

    $scope.seeSentence = function(sentence){
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
        $(".inputBox").css("background-color", "grey");
        console.log(isDraggingGlobalWord);
    }

    $scope.redirect = function(path) {
        $location.path(path);
    };


    /*DRAG N DROP FUNCTIONALITY  /  TTS FUNCTIONALITY*/

    $scope.readWord = function(word) {
        if (buttonDisabled==false) {
            var list = word.split("<br>");
            TTSPlugin.speak(list[0],function(){
            }, function(){
            });
        }
    }

    $scope.readWord2 = function(element) {
        if (buttonDisabled==false) {
            var list1 = element.split(">");
            var word = list1[1].split("<");
            console.log(word[0]);
            TTSPlugin.speak(word[0],function(){
            }, function(){
            });
        }
    }

    $scope.readSentence = function() {
        if (buttonDisabled==false) {
            lengthOfSentence = $("#items li").size();
            buttonDisabled = (lengthOfSentence>0) ? true: false;
            $("#items li").each(function(index, value) {
                var list = $(value).html().split("<br>");
                TTSPlugin.speak(list[0],function(){
                    //success callback function
                    isReadingSentence = true;
                }, function(){
                    //failure callback function
                });
            });
        }
    }

    var elementBeingDragged=0;
    var parent;
    var dragWord;
    var isDraggingGlobalWord = false;
    var dragCounter = 0;
    var newParent;
    var indexOfSortable = -1;

    $scope.setDraggable = function() {
        $(".draggable").draggable({
            scroll: false,
            containment: ".main",
            drag: function(even,ui) {
                console.log("Getting dragged");
                dragCounter ++;
                elementBeingDragged = $(this);
                elementBeingDragged.css("z-index", 2);
                parent = $(this).parent();
                $scope.currentWord = parent.index();
                console.log("Index of word being dragged: "+$scope.currentWord);
                dragWord = $(this).find("span").html();
                console.log(elementBeingDragged);
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
                    $scope.setDraggable();
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
                    $(this).css("background-color", "grey");
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
                        playAudio("audio/bop_success.mp3")
                    }
                    else {
                        playAudio("audio/bop_negative.mp3");
                    }
                }
                isDraggingGlobalWord = false;
                dragCounter = 0;
                indexOfSortable = -1;
                $(".inputBox").css("background-color", "grey");
                console.log(isDraggingGlobalWord);
            }
        });
        $("html").droppable({
            drop: function(even, ui) {          //user drags word from list of words and drops it before reaching sentence box
                if (elementBeingDragged!=0) {
                    elementBeingDragged.remove();
                }
                if (indexOfSortable != -1) {    //user drags word from sentence out of sentence box and drops it
                    $("#items li").eq(indexOfSortable).remove();
                    indexOfSortable = -1;
                    playAudio("audio/fast_zing.wav");
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
        return (length + 20);
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
        console.log($scope.sentences);
        //$scope.sentences.push({"words":listOfWords});
        window.localStorage.setItem("sentences", JSON.stringify($scope.sentences));
        //jsonStr = JSON.stringify(obj);
        //alert($scope.sentences);
    }

    $scope.removeSentence = function() {
        if (buttonDisabled==false) {
            $("#items li").each(function(index, value) {
                value.remove();
            });
            playAudio("audio/fast_zing.wav");
        }
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
        // Play audio
        audio.play({numberOfLoops: 1});
    }
}
