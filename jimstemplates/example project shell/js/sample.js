$(document).ready(function(){
	
	console.log("Bump....");
	
	$("#confirm").dialog({
		title: "Submit application?",
		autoOpen: false,
		buttons: [
			{
			  text: "I agree",
			  icon: "ui-icon-check",
			  click: function() {
				$( this ).dialog( "close" );
			  }
			},
			{
			  text: "Cancel",
			  icon: "ui-icon-cancel",
			  click: function() {
				$(this).dialog( "close" );
			  }
			}
		]
	});
	
	
	$("#testForm0").validate();
	$("#testForm1").validate();
	$("#testForm2").validate();
	$("#testForm3").validate();
	$("#testForm4").validate();
	
	$("#tabs").tabs({
		
		disabled: [ 1, 2, 3, 4 ],
		active: 0,
		heightStyle: "fill"
		
	});
	
	$("#tab0submit").button();
	$("#tab0submit").click(function(){
		
		if( $("#testForm0").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 2, 3, 4 ],
				active: 1
			});
		}
		
	});
	
	$("#tab1submit").button();
	$("#tab1submit").click(function(){
		
		if( $("#testForm1").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 3, 4 ],
				active: 2
			});
		}
		
	});	
	
	$("#tab2submit").button();
	$("#tab2submit").click(function(){
		
		if( $("#testForm2").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 4 ],
				active: 3
			});
		}
		
	});	
	
	$("#tab3submit").button();
	$("#tab3submit").click(function(){
		
		if( $("#testForm3").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 3 ],
				active: 4
			});
		}
		
	});	
	$("#tab4submit").button();
	$("#tab4submit").click(function(){
		
		if( $("#testForm0").valid() ){
			
			// bring up a jqueryui confirm dialog
			$("#confirm").dialog( "open");
		}
		
	});	
});