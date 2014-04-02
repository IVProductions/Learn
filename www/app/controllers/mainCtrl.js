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

    var lockScroll = function () {
        var scrollPosition = [
                self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        var html = jQuery('.listOfWords'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

    }

    var unlockScroll = function() {
        var html = jQuery('listOfWords');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
    }

    $scope.setDraggable = function() {
        $(".draggable").draggable({
            drag: function(even,ui) {
                console.log("Getting dragged");
                dragCounter ++;
                elementBeingDragged = $(this);
                $(this).css("z-index",4);
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
                    //if ((getLengthOfSentence()+dragWord.length+80) < $(".inputBox").width()) {           //make sure div doesn't overflow
                    if ((getLengthOfSentence()+dragWord.length+250) < ($(".inputBox").width() * 2)) {
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
