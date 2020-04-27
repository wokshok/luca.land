$(window).on('load', function() {
    $("#cover").fadeOut(300);
});

var prevScrollpos = window.pageYOffset;
$(window).onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("tabbar").style.bottom = "0";
    } else {
      document.getElementById("tabbar").style.bottom = "-62px";
    }
    prevScrollpos = currentScrollPos;
  }

var $container =
$('#container').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
    },
    hiddenStyle: {
        opacity: 0
    },
    visibleStyle: {
        opacity: 1
    },
    transitionDuration: 0,
});

$('#content-container').isotope({
    layoutMode: 'packery',
    percentPosition: true,
    packery: {
      gutter: '.content-gutter-sizer'
    }
});

// filter with selects and checkboxes
var $checkboxes = $('#filters input');

$checkboxes.change( function() {
    // map input values to an array
    var inclusives = [];
    // inclusive filters from checkboxes
    $checkboxes.each( function( i, elem ) {
        // if checkbox, use value if checked
        if ( elem.checked ) {
        inclusives.push( elem.value );
        }
});

// combine inclusive filters
var filterValue = inclusives.length ? inclusives.join(', ') : '*';
    $container.isotope({ filter: filterValue })
});
