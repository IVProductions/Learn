function mainCtrl($scope, $location, stateService, learnFactory) {

    var scrollHeight = $('.listOfWords').scrollHeight;
    $('.backgroundWords').css("height",""+scrollHeight+"px");

    $scope.stateService=stateService;

    $scope.categories = learnFactory.categories;
    $scope.currentCategory = $scope.categories[0];

    $scope.changeCategory = function(id){
        $scope.currentCategory = $scope.categories[id];
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
        var sentence = "";
        $("#items li").each(function(index, value) {
            TTSPlugin.speak($(value).html(),function(){
                //success, do something!
                $("#items li").css("color","black");
                $(value).css("color","red");
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

    $scope.setDraggable = function() {
        $(".draggable").draggable({
            drag: function(even,ui) {
                console.log("Getting dragged");
                dragCounter ++;
                elementBeingDragged = $(this);
                parent = $(this).parent();
                dragWord = $(this).find("span").html();
                console.log(elementBeingDragged);
                isDraggingGlobalWord = true;
                if (dragCounter==1) {
                    newParent = jQuery('<div/>', {
                        class: 'draggable',
                        style: 'z-index: 1'
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
            drop: function(even, ui) {
                console.log("dropped in container");
                if (elementBeingDragged!=0) {
                    elementBeingDragged.remove();
                }
                if (isDraggingGlobalWord) {
                    if ((getLengthOfSentence()+dragWord.length+80) < $(".inputBox").width()) {           //make sure div doesn't overflow
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
            }
        });
        $("#partialBody").droppable({
            drop: function(even, ui) {
                if (elementBeingDragged!=0) {
                    elementBeingDragged.remove();
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


    function getLengthOfSentence() {
        var length=0;
        $("#items li").each(function(index, value) {
            console.log(value.offsetWidth);
            length += value.offsetWidth;
        });
        console.log("current length: "+length);
        return length;
    }


    $scope.removeSentence = function() {
        $("#items li").each(function(index, value) {
            value.remove();
        });
    }
}
