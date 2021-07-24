$(function() {
    $( '.header .menu-list ul.main-menu li a.main-link' ).on( 'click', function() {
        $( this ).parent().find( '.main-link.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    });
});