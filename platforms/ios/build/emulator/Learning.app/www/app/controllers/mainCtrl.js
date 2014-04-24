function mainCtrl($scope, $location, stateService, learnFactory) {
    var scrollHeight = $('.listOfWords').scrollHeight;
    $('.backgroundWords').css("height",""+scrollHeight+"px");

    $scope.stateService=stateService;

    $scope.categories = learnFactory.categories;
    $scope.currentCategory = $scope.categories[0];

    $scope.changeCategory = function(id){
        $scope.currentCategory = $scope.categories[id];
    /*
    var scrollHeight = 0;
    for (var i = 0; $scope.currentCategory.words.length; i+=5) {
        scrollHeight++;
    };

    $('.backgroundWords').css("height",""+(scrollHeight*200)+"px");

    console.log(scrollHeight);
    */
    }
    $scope.redirect = function(path) {
        $location.path(path);
    };


    /*DRAG N DROP FUNCTIONALITY*/

    $scope.readWord = function(word) {
        console.log(word);
        TTSPlugin.speak(word,function(){
            //success, do something!
        }, function(){
            alert("Plugin call failed");
        });
    }

    $scope.readWord2 = function(element) {
        console.log(element);
        var list1 = element.split(">");
        var word = list1[1].split("<");
        console.log(word[0]);
        TTSPlugin.speak(word[0],function(){
            //success, do something!
        }, function(){
            alert("Plugin call failed");
        });
    }

    $scope.readSentence = function() {
        lengthOfSentence = $("#items li").size();
        var sentence = "";
        $("#items li").each(function(index, value) {
            TTSPlugin.speak($(value).html(),function(){
                isReadingSentence = true;
                //success, do something!
            }, function(){
                alert("Plugin call failed");
            });
            sentence += $(value).html()+" ";
        });
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
                    //if ((getLengthOfSentence()+dragWord.length+80) < $(".inputBox").width()) {           //make sure div doesn't overflow
                    if ((getLengthOfSentence()+dragWord.length+290) < ($(".inputBox").width() * 2)) {
                        console.log("is creating new item");
                        jQuery('<li/>', {
                            class: 'list',
                            text: dragWord
                        }).click(function() {$scope.readWord($(this).html());}).appendTo($("#items"));
                        newParent.show();
                        $scope.setDroppable();
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
            drop: function(even, ui) {
                if (elementBeingDragged!=0) {
                    elementBeingDragged.remove();
                }
                if (indexOfSortable != -1) {
                    $("#items li").eq(indexOfSortable).remove();
                    indexOfSortable = -1;
                }
                newParent.show();
                isDraggingGlobalWord = false;
                dragCounter = 0;
                console.log("dropped in body");
            }
        });
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


    function getLengthOfSentence() {
        var length=0;
        $("#items li").each(function(index, value) {
            length += value.offsetWidth;
        });
        return length;
    }


    $scope.removeSentence = function() {
        $("#items li").each(function(index, value) {
            value.remove();
        });
    }
}
