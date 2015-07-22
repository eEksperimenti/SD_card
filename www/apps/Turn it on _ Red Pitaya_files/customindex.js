jQuery(document).ready(function($) {
    // Code that uses jQuery's $ can follow here.
	$(function () {
		var twitterdiv  = $('#panel-60-2-3-1');
	    var facebookdiv = $('#facebook');
	    var googleplusdiv = $('.googleplusbox');
	    $('#panel-60-2-3-1').hide();

	    $('.facebook').click(function () {
	        twitterdiv.hide(500);
	        facebookdiv.show(1000);
	        googleplusdiv.hide(500);
	    });
	    $('.twitter').click(function () {
	        twitterdiv.show(1000);
	        facebookdiv.hide(500);
	        googleplusdiv.hide(500);
	    });
		$('.googleplus').click(function () {
			twitterdiv.hide(500);
			facebookdiv.hide(500);
			googleplusdiv.show(1000);

			    });
		//$( ".navbar-ex1-collapse" ).append("<ul class='nav navbar-nav navbar-right'><li id='' class='menu-item menu-item-type-custom menu-item-object-custom menu-item-42'><a title='Become a distributor' href='http://redpitaya.com/services/'><span class='glyphicon custom_buy_img'></span>&nbsp;Become a distributor<img style='width: 66px; display: inline-block; margin: -10px -10px -10px 15px;' alt='elektor logo' src='/wp-content/uploads/2015/03/elektor-logo.png'><img style='display: inline-block; margin: -10px -10px -10px 15px;' alt='RS logo' src='/wp-content/uploads/2014/12/ec_logo-1d752414c59907af45e992ef615e194f-e1420482592864.png'><img style='display: inline-block; margin: -10px -10px -10px 15px;' alt='RS logo' src='/wp-content/uploads/2015/01/Rs-Components-e1420482668915.png'><img style='display: inline-block; margin: -10px -10px -10px 15px;' alt='RS logo' src='/wp-content/uploads/2014/12/aa_logo-e1420482610867.jpg'></a></li></ul>" );
		
		
		//$("#menu-item-10567").on("click", function(e){
		$("#menu-item-10912").on("click", function(e){
			downloadOpen(null);
			return false;
		});


		$( "#Connectbutton" ).click(function() {
  			var userinput = $("#mac").val();
  			var mac = userinput.replace(/:/g, "%3A");
  			var link = "http://discovery.redpitaya.com/discover?utf8=✓&mac="+mac+"&commit=Connect"
  			window.open(link);
});



	});
	window.onresize=function(){
		$("#headingTwo").height($("#headingThree").height());
		$("#headingOne").height($("#headingThree").height());

		$("#collum1para2").height($("#collum3para2").height());
		$("#collum2para2").height($("#collum3para2").height());

		var x = $("#refpanel").height();
		var y = $("#adjustpanel").height();
		z = x +  "px";
		$("#adjustpanel").css("height", z);

	};
	window.onload = function() {
		$("#headingTwo").height($("#headingThree").height());
		$("#headingOne").height($("#headingThree").height());

		$("#collum1para2").height($("#collum3para2").height());
		$("#collum2para2").height($("#collum3para2").height());


		var x = $("#refpanel").height();
		var y = $("#adjustpanel").height();
		z = x +  "px";
		$("#adjustpanel").css("height", z);
};

});
