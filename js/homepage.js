$('document').ready(function( ){
    $('.ui.dropdown').dropdown( );

    $('.slick').slick({
	dots: true,
	arrows: true
    });
    
    if( $('cite').length > 0 ) {
	$.get( '/refs.html', function( data ) {
	    citations( data );
	});
    }
    
    // $(".menu .item")
    // 	.click(function() {
    // 	    $('html, body').animate({
    // 		scrollTop: $($(this).attr("href")).offset().top
    // 	    }, 1000);
    // 	});
});

function citations( data ) {
    var refCount = 1;
    $('cite').each(function( ) {
	var texts = $( this ).text( ).split( ',' );
	var newText = '[';
	for( var i = 0; i < texts.length; i++ ) {
	    var text = texts[ i ];
	    var refs = $('.ref[data-text="'+ text +'"]'); 
	    if(  refs.length > 0 ) {
		var count = $( refs[ 0 ] ).children( ).eq( 0 ).text( );
		newText += count.substring( 1, count.length - 1 ) + ',';
		continue;
	    }
	    
	    newText += refCount + ',';
	    var startIdx = data.indexOf( 'name="'+ text );
	    var ref;
	    if( startIdx == -1 )
		ref = 'Not Found';
	    else {
		var endIdx = data.indexOf( '</li>', startIdx );
		ref = data.substring( startIdx + 12 + text.length , endIdx);
	    }
	    $('.refs').append('<div class="ref row" data-text="' + text +
			      '"><div class="one wide column">[' + refCount +
			      ']</div><div class="fifteen wide column">'+ ref +'</div>' );
	    refCount++;   
	}
	$(this).html( newText.substring( 0, newText.length - 1) + ']'  );
    });
}
