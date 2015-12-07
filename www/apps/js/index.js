/**
 * Created by Polona-PC on 16.5.2015.
 */

$(function() {

    /* OSCILOSKOP */
    $('.exp1_hard').click(function(e) {
        e.preventDefault();
        if ( $('#exp1_hard').is(':visible') ) {
            $("#exp1_hard").fadeOut().toggle(false);
            $("#exp1_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp1_hard").fadeIn().toggle(true);
            $("#exp1_medium").fadeOut().toggle(false);
            $("#exp1_easy").fadeOut().toggle(false);

            $("#exp1_hard_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp1_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp1_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp1_medium').click(function(e) {
        e.preventDefault();
        if ( $('#exp1_medium').is(':visible') ) {
            $("#exp1_medium").toggle(false);
            $("#exp1_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp1_medium").fadeIn().toggle(true);
            $("#exp1_easy").fadeOut().toggle(false);
            $("#exp1_hard").fadeOut().toggle(false);
            $("#exp1_medium_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp1_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp1_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });


    $('.exp1_easy').click(function(e) {
        e.preventDefault();
        if ( $('#exp1_easy').is(':visible') ) {
            $("#exp1_easy").fadeOut().toggle(false);
            $("#exp1_easy_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp1_easy").fadeIn().toggle(true);
            $("#exp1_medium").fadeOut().toggle(false);
            $("#exp1_hard").fadeOut().toggle(false);
            $("#exp1_easy_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp1_medium_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp1_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp1_plus').click(function(e) {
        e.preventDefault();
        $("#exp1_easy").fadeIn().toggle(true);
        $("#exp1_medium").fadeIn().toggle(true);
        $("#exp1_hard").fadeIn().toggle(true);
        $("#exp1_easy_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp1_medium_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp1_hard_op").removeClass('fa-plus').addClass('fa-minus');
    });

    $('.exp1_minus').click(function(e) {
        e.preventDefault();
        $("#exp1_easy").fadeOut().toggle(false);
        $("#exp1_medium").fadeOut().toggle(false);
        $("#exp1_hard").fadeOut().toggle(false);
        $("#exp1_easy_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp1_medium_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp1_hard_op").removeClass('fa-minus').addClass('fa-plus');
    });




    /* ŽARNICA */
    $('.exp2_hard').click(function(e) {
        e.preventDefault();
        if ( $('#exp2_hard').is(':visible') ) {
            $("#exp2_hard").fadeOut().toggle(false);
            $("#exp2_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp2_hard").fadeIn().toggle(true);
            $("#exp2_medium").fadeOut().toggle(false);
            $("#exp2_easy").fadeOut().toggle(false);

            $("#exp2_hard_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp2_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp2_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp2_medium').click(function(e) {
        e.preventDefault();
        if ( $('#exp2_medium').is(':visible') ) {
            $("#exp2_medium").toggle(false);
            $("#exp2_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp2_medium").fadeIn().toggle(true);
            $("#exp2_easy").fadeOut().toggle(false);
            $("#exp2_hard").fadeOut().toggle(false);
            $("#exp2_medium_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp2_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp2_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });


    $('.exp2_easy').click(function(e) {
        e.preventDefault();
        if ( $('#exp2_easy').is(':visible') ) {
            $("#exp2_easy").fadeOut().toggle(false);
            $("#exp2_easy_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp2_easy").fadeIn().toggle(true);
            $("#exp2_medium").fadeOut().toggle(false);
            $("#exp2_hard").fadeOut().toggle(false);
            $("#exp2_easy_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp2_medium_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp2_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp2_plus').click(function(e) {
        e.preventDefault();
        $("#exp2_easy").fadeIn().toggle(true);
        $("#exp2_medium").fadeIn().toggle(true);
        $("#exp2_hard").fadeIn().toggle(true);
        $("#exp2_easy_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp2_medium_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp2_hard_op").removeClass('fa-plus').addClass('fa-minus');
    });

    $('.exp2_minus').click(function(e) {
        e.preventDefault();
        $("#exp2_easy").fadeOut().toggle(false);
        $("#exp2_medium").fadeOut().toggle(false);
        $("#exp2_hard").fadeOut().toggle(false);
        $("#exp2_easy_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp2_medium_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp2_hard_op").removeClass('fa-minus').addClass('fa-plus');
    });








    /* SONČNA CELICA */
    $('.exp3_hard').click(function(e) {
        e.preventDefault();
        if ( $('#exp3_hard').is(':visible') ) {
            $("#exp3_hard").fadeOut().toggle(false);
            $("#exp3_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp3_hard").fadeIn().toggle(true);
            $("#exp3_medium").fadeOut().toggle(false);
            $("#exp3_easy").fadeOut().toggle(false);

            $("#exp3_hard_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp3_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp3_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp3_medium').click(function(e) {
        e.preventDefault();
        if ( $('#exp3_medium').is(':visible') ) {
            $("#exp3_medium").toggle(false);
            $("#exp3_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp3_medium").fadeIn().toggle(true);
            $("#exp3_easy").fadeOut().toggle(false);
            $("#exp3_hard").fadeOut().toggle(false);
            $("#exp3_medium_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp3_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp3_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });


    $('.exp3_easy').click(function(e) {
        e.preventDefault();
        if ( $('#exp3_easy').is(':visible') ) {
            $("#exp3_easy").fadeOut().toggle(false);
            $("#exp3_easy_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp3_easy").fadeIn().toggle(true);
            $("#exp3_medium").fadeOut().toggle(false);
            $("#exp3_hard").fadeOut().toggle(false);
            $("#exp3_easy_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp3_medium_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp3_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp3_plus').click(function(e) {
        e.preventDefault();
        $("#exp3_easy").fadeIn().toggle(true);
        $("#exp3_medium").fadeIn().toggle(true);
        $("#exp3_hard").fadeIn().toggle(true);
        $("#exp3_easy_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp3_medium_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp3_hard_op").removeClass('fa-plus').addClass('fa-minus');
    });

    $('.exp3_minus').click(function(e) {
        e.preventDefault();
        $("#exp3_easy").fadeOut().toggle(false);
        $("#exp3_medium").fadeOut().toggle(false);
        $("#exp3_hard").fadeOut().toggle(false);
        $("#exp3_easy_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp3_medium_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp3_hard_op").removeClass('fa-minus').addClass('fa-plus');
    });





    /* HITROST ZVOKA */
    $('.exp4_hard').click(function(e) {
        e.preventDefault();
        if ( $('#exp4_hard').is(':visible') ) {
            $("#exp4_hard").fadeOut().toggle(false);
            $("#exp4_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp4_hard").fadeIn().toggle(true);
            $("#exp4_medium").fadeOut().toggle(false);
            $("#exp4_easy").fadeOut().toggle(false);

            $("#exp4_hard_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp4_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp4_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp4_medium').click(function(e) {
        e.preventDefault();
        if ( $('#exp4_medium').is(':visible') ) {
            $("#exp4_medium").toggle(false);
            $("#exp4_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp4_medium").fadeIn().toggle(true);
            $("#exp4_easy").fadeOut().toggle(false);
            $("#exp4_hard").fadeOut().toggle(false);
            $("#exp4_medium_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp4_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp4_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });


    $('.exp4_easy').click(function(e) {
        e.preventDefault();
        if ( $('#exp4_easy').is(':visible') ) {
            $("#exp4_easy").fadeOut().toggle(false);
            $("#exp4_easy_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp4_easy").fadeIn().toggle(true);
            $("#exp4_medium").fadeOut().toggle(false);
            $("#exp4_hard").fadeOut().toggle(false);
            $("#exp4_easy_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp4_medium_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp4_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp4_plus').click(function(e) {
        e.preventDefault();
        $("#exp4_easy").fadeIn().toggle(true);
        $("#exp4_medium").fadeIn().toggle(true);
        $("#exp4_hard").fadeIn().toggle(true);
        $("#exp4_easy_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp4_medium_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp4_hard_op").removeClass('fa-plus').addClass('fa-minus');
    });

    $('.exp4_minus').click(function(e) {
        e.preventDefault();
        $("#exp4_easy").fadeOut().toggle(false);
        $("#exp4_medium").fadeOut().toggle(false);
        $("#exp4_hard").fadeOut().toggle(false);
        $("#exp4_easy_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp4_medium_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp4_hard_op").removeClass('fa-minus').addClass('fa-plus');
    });




    /* ZVOK INŠTRUMENTOV */
    $('.exp5_hard').click(function(e) {
        e.preventDefault();
        if ( $('#exp5_hard').is(':visible') ) {
            $("#exp5_hard").fadeOut().toggle(false);
            $("#exp5_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp5_hard").fadeIn().toggle(true);
            $("#exp5_medium").fadeOut().toggle(false);
            $("#exp5_easy").fadeOut().toggle(false);

            $("#exp5_hard_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp5_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp5_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp5_medium').click(function(e) {
        e.preventDefault();
        if ( $('#exp5_medium').is(':visible') ) {
            $("#exp5_medium").toggle(false);
            $("#exp5_medium_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp5_medium").fadeIn().toggle(true);
            $("#exp5_easy").fadeOut().toggle(false);
            $("#exp5_hard").fadeOut().toggle(false);
            $("#exp5_medium_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp5_easy_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp5_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });


    $('.exp5_easy').click(function(e) {
        e.preventDefault();
        if ( $('#exp5_easy').is(':visible') ) {
            $("#exp5_easy").fadeOut().toggle(false);
            $("#exp5_easy_op").removeClass('fa-minus').addClass('fa-plus');
        }
        else {
            $("#exp5_easy").fadeIn().toggle(true);
            $("#exp5_medium").fadeOut().toggle(false);
            $("#exp5_hard").fadeOut().toggle(false);
            $("#exp5_easy_op").removeClass('fa-plus').addClass('fa-minus');
            $("#exp5_medium_op").removeClass('fa-minus').addClass('fa-plus');
            $("#exp5_hard_op").removeClass('fa-minus').addClass('fa-plus');
        }
    });

    $('.exp5_plus').click(function(e) {
        e.preventDefault();
        $("#exp5_easy").fadeIn().toggle(true);
        $("#exp5_medium").fadeIn().toggle(true);
        $("#exp5_hard").fadeIn().toggle(true);
        $("#exp5_easy_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp5_medium_op").removeClass('fa-plus').addClass('fa-minus');
        $("#exp5_hard_op").removeClass('fa-plus').addClass('fa-minus');
    });

    $('.exp5_minus').click(function(e) {
        e.preventDefault();
        $("#exp5_easy").fadeOut().toggle(false);
        $("#exp5_medium").fadeOut().toggle(false);
        $("#exp5_hard").fadeOut().toggle(false);
        $("#exp5_easy_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp5_medium_op").removeClass('fa-minus').addClass('fa-plus');
        $("#exp5_hard_op").removeClass('fa-minus').addClass('fa-plus');
    });


});
