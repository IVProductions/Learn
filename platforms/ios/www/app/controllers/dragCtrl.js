function dragCtrl($scope, $location) {

    //jQuery.event.props.push('dataTransfer');

    $scope.redirect = function(path) {
        $location.path(path);
    };

    var elementBeingDragged=0;
    var parent;
    var dragWord;
    var sentence = "";
    var isDraggingGlobalWord = false;
    var dragCounter = 0;
    //var elementIndex;


    setDraggable();
    //setDroppable();
    //setSortable();

    function setDraggable() {
        $(".draggable").draggable({
            drag: function(even,ui) {
                dragCounter ++;
                elementBeingDragged = $(this);
                parent = $(this).parent();
                dragWord = $(this).html();
                isDraggingGlobalWord = true;
                if (dragCounter==1) {
                    jQuery('<span/>', {
                        class: 'draggable',
                        text: dragWord
                    }).click(function() {$scope.readWord($(this).html());}).appendTo(parent);
                    setDraggable();
                }
                console.log(elementBeingDragged.index("li"));

            }
        });
    }

/*
    function setDroppable() {
        $("#partialBody").droppable({
            drop: function(even, ui) {
                elementBeingDragged.remove();
                dragCounter = 0;
            }
        });
        $("#droppable").droppable({
            drop: function(even, ui) {
                sentence += " "+dragWord;
                elementBeingDragged.remove();
                if (isDraggingGlobalWord) {
                    jQuery('<li/>', {
                        class: 'sortableWordInSentence',
                        text: dragWord,
                        style: 'float: left; padding-right: 10px'
                    }).click(function() {$scope.readWord($(this).html());}).appendTo($("#sortableSentence"));
                    setDroppable();
                }
                isDraggingGlobalWord = false;
                dragCounter = 0;
            }
        });
    }

    function setSortable() {
        $("#sortableSentence").sortable({
            start: function (event, ui) {
                ui.item.toggleClass("highlight");
            },
            stop: function (event, ui) {
                ui.item.toggleClass("highlight");
            }
        });
        $("#sortableSentence").disableSelection();
    }
*/

    $scope.readWord = function(word) {
        TTSPlugin.speak(word,function(){
            //success, do something!
        }, function(){
            alert("Plugin call failed");
        });
    }

    $scope.readSentence = function() {
        var sentence = "";
        $("#items li").each(function(index, value) {
            TTSPlugin.speak($(value).html(),function(){
                //success, do something!
                $(value).css("color","red");
            }, function(){
                alert("Plugin call failed");
            });
            sentence += $(value).html()+" ";
        });
    }

    function getLengthOfSentence() {
        var length=0;
        $("#items li").each(function(index, value) {
            console.log(value.offsetWidth);
            length += value.offsetWidth;
        });
        console.log("current length: "+length);
        return length;
    }




    setSortable2();
    setDroppable2();


    function setSortable2() {
        $("#items").sortable({
            placeholder: "highlight",
            start: function (event, ui) {
                ui.item.toggleClass("highlight");
                console.log(elementBeingDragged);
            },
            stop: function (event, ui) {
                ui.item.toggleClass("highlight");
            }
        });
        $("#items").disableSelection();
    }

    function setDroppable2() {
        $("#droppable2").droppable({
            drop: function(even, ui) {
                console.log("dropped in container");
                sentence += " "+dragWord;
                if (elementBeingDragged!=0) {
                    elementBeingDragged.remove();
                }
                if (isDraggingGlobalWord) {
                    if ((getLengthOfSentence()+dragWord.length+50) < $("#droppable2").width()) {           //make sure div doesn't overflow
                        console.log("is creating new item");
                        jQuery('<li/>', {
                            class: 'list',
                            text: dragWord
                        }).click(function() {$scope.readWord($(this).html());}).appendTo($("#items"));
                        setDroppable2();
                    }
                }
                isDraggingGlobalWord = false;
                dragCounter = 0;
            }
        });
        $("#partialBody").droppable({
            drop: function(even, ui) {
                if (elementBeingDragged!=0) {
                    elementBeingDragged.remove();
                }
                isDraggingGlobalWord = false;
                dragCounter = 0;
                console.log("dropped in body");
            }
        });
    }

    $scope.removeWords = function() {
        $("#items li").each(function(index, value) {
            value.remove();
        });
    }


}