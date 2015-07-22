/**
 * Created by Polona-PC on 23.5.2015.
 */
function breadcrumb() {
    this.clearAll  = function() {
        $('#breadcrumb').empty();
    };

    this.addLi = function(text, url) {
        if (url == null) {
            $('#breadcrumb').append('<li>' + text + '</li>');
        }
        else {
            $('#breadcrumb').append('<li><a href="' + url + '">' + text + '</a></li>');
        }
    };
}


