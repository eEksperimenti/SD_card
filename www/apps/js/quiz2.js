function start_quiz_1a() {
    $.fn.quiz_1a = function(options) {
        var defaults = {
                key: [],
                scoring: "normal",
                progress: true
            },
            settings = $.extend(defaults,options),
            $quizItems = $('[data-quiz-item]'),
            $choices = $('[data-choices]'),
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
                    $option = $('<input name="'+index+'" id="'+index+'_'+i+'" type="radio">');
                    $label = $('<label for="'+index+'_'+i+'">'+choices[i]+'</label>');
                    $choiceEl.append($option).append($label);

                    $option.on('change', function() {
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
            var prog = (chosen.length / itemCount) * 100 + " %", $submit = $('#el-naboj1a-submit');

            if (settings.progress) {
                $perc.text(chosen.length+'/'+itemCount);
                $inner.css({height: prog});
            }
            if (chosen.length === itemCount) {
                $('#el-naboj1a-submit').show();
                $submit.addClass('ready-show');
                $submit.click(function(){
                    return scoreNormal();
                });
            }
        }

        function scoreNormal() {
            var wrong = [],
                score = null,
                $scoreEl = $('#el-naboj1a-score');
            for (var i = 0; i < itemCount; i++) {
                if (chosen[i] != settings.key[i]) {
                    wrong.push(i);
                }
            }
            $quizItems.each(function(index) {
                var $this = $(this);
                if ($.inArray(index, wrong) !== -1) {
                    $this.removeClass('item-correct').addClass('item-incorrect');
                } else {
                    $this.removeClass('item-incorrect').addClass('item-correct');
                }
            });

            score = ((itemCount - wrong.length) / itemCount).toFixed(2) * 100 + " %";
            var correct = (itemCount - wrong.length) + "/" + itemCount;

            $scoreEl.text("Pravilno si odgovoril/a na " + correct + " vprašanj (" + score + ").").addClass('new-score');
            $('html,body').animate({scrollTop: 0}, 50);
        }
    }
};

/*QUIZ Električni naboj in električni viri (1A)*/
$('#quiz-el-naboj1a').quiz_1a({
    key: ["2","1","1","2"]
});

$('#el-naboj1a-submit').click(function() {
    $('.quiz-answer').show();
});
