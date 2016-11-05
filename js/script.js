function selectplaceholder(argument) {
	if( $(window).width() < 765 )  {
		
		if($('select option:nth-child(1)').text() !="" ){
			$('select').prepend('<option value="" selected></option>');
		}
	}else{
		if($('select option:nth-child(1)').text() =="" ){
			$('select option:nth-child(1)').remove()
		}
	}
}
$(function() {
	$('#tabs').tabs({
		activate: function(){
				jcf.destroyAll();
				jcf.replaceAll();
			}		
		}).addClass('ui-tabs-vertical ui-helper-clearfix');
	
	
	$('.content-contact > a').click(function(){
		$(this).parent().children().not($(this)).removeClass('active');
		$(this).addClass('active');
		return false;
	}); 

	selectplaceholder() ////
	$(window).resize(function() {
		selectplaceholder() ////
	})

	$('#c .add-dons .btns-form .retour').click(function(){ 
		$('#c .add-dons').fadeOut("");
		setTimeout(function () {
			$('#c .liste-dons').fadeIn("");
		},500) 
		return false;

	})
	$('#c .add-don').click(function(){ 
		$('#c .liste-dons').fadeOut("");
		setTimeout(function () { 
			$('#c .add-dons').fadeIn("");
		},500) 
		return false;
	})
	
$('#d .btn-valid').click(function(){ 
		$('#d .liste-dons').fadeOut("");
		setTimeout(function () { 
			$('#d .add-dons').fadeIn("");
		},500) 
		return false;
	})
});