// name stuff
var $container = $('ul');
var $snapshot = $('ul li');
// initialize masonry
$($container).packery({
  gutter: 10,
  itemSelector: 'ul li'
});

// get item elements, jQuery-ify them
var $itemElems = $( $container.packery('getItemElements') );
// make item elements draggable
$itemElems.draggable();
// bind Draggable events to Packery
$container.packery( 'bindUIDraggableEvents', $itemElems );

// toggle the class for clicked items
$snapshot.click( function () {
    $(this).toggleClass("active");
});

//remove the directions
$(".directions").click (function () {
  $(this).slideToggle();
});

//show the credits
$( ".credits" ).click(function() {
  $( ".shown" ).toggle();
});