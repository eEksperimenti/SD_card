(function($) {
    $.fn.emc = function(options) {

        var defaults = {
                container : null,
                key: [],
                scoring: "normal",
                progress: true
            },
            settings = $.extend(defaults,options),
            $quizItems = $("#"+settings.container+' [data-quiz-item]'),
            $choices = $("#"+settings.container+' [data-choices]'),
            itemCount = $quizItems.length,
            chosen = [],
            $option = null,
            $label = null;

        emcInit();


        if (settings.progress) {
            var $bar = $('#emc-progress'),
                $inner = $('<div id="emc-progress_inner"></div>'),
                $perc = $('<span id="emc-progress_ind">0/'+itemCount+'</span>');
            $bar.append($inner).prepend($perc);
        }


        function emcInit() {
            $quizItems.each(function(index,value) {
                var $this = $(this),
                    $choiceEl = $this.find('.choices'),
                    choices = $choiceEl.data('choices');
                for (var i = 0; i<choices.length; i++) {
                    $option = $('<input name="'+settings.container+"_"+index+'" id="'+settings.container+"_"+index+'_'+i+'" type="radio">');
                    $label = $('<label for="'+settings.container+"_"+index+'_'+i+'">'+choices[i]+'</label>');
                    $choiceEl.append($option).append($label);

                    $option.on( 'change', function() {
                        return getChosen();
                    });
                }
            });
        }


        function getChosen() {
            chosen = [];
            $choices.each(function() {
                var $inputs = $(this).find('input[type="radio"]');
                $inputs.each(function(index, value) {
                    if($(this).is(':checked')) {
                        chosen.push(index + 1);
                    }
                });
            });
            getProgress();
        }


        function getProgress() {
            var prog = (chosen.length / itemCount) * 100 + " %";
            var $submit = $("#"+settings.container+' .emc-submit');
            if (settings.progress) {
                $perc.text(chosen.length+'/'+itemCount);
                $inner.css({height: prog});
            }
            if (chosen.length === itemCount) {
                $submit.addClass('ready-show');
                $submit.click( function(){
                    return scoreNormal();
                });
            }
        }


        function scoreNormal() {
            var wrong = [],
                score = null,
                $scoreEl = $("#"+settings.container+' .emc-score');
            for (var i = 0; i < itemCount; i++) {
                if (chosen[i] != settings.key[i]) {
                    wrong.push(i);
                }
            }
            $quizItems.each(function(index) {
                var $this = $(this);
                if ($.inArray(index, wrong) !== -1) {
                    $this.removeClass('item-correct').addClass('item-incorrect');
                    setCorrectLabel(index, settings.key[index]-1);
                } else {
                    $this.removeClass('item-incorrect').addClass('item-correct');
                }
            });

            score = ((itemCount - wrong.length) / itemCount).toFixed(2) * 100 + " %";
            var correct = (itemCount - wrong.length) + "/" + itemCount;

            $scoreEl.text("Pravilno si odgovoril/a na " + correct + " vprašanj (" + score + ").").addClass('new-score');
            //$('html,body').animate({scrollTop: 0}, 50);
        }

        function setCorrectLabel(index1, index2){
            $quizItems.find('label').each(function(){
                var _for = $(this).attr("for");
                var _for_str = settings.container+"_"+index1+"_"+index2;
                if(_for == _for_str){
                    $(this).addClass("correct");
                }
            });
        }
    }
}(jQuery));