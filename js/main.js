var imageNumber = 0;

// Every 5 seconds

setInterval(function () {
    // Hide all img in #slideShow
$('#slideShow img').hide();

if (imageNumber===2) {
    $('#slideShow img').addClass('slide1');
    console.log(imageNumber=0);
} else (imageNumber += 1)
    $('#slideShow img').eq(imageNumber).fadeIn();
    // If imageNumber is equal to 2 (===)
        // Set imageNumber to 0
        // imageNumber = 0;
    // Else
        // Add one to imageNumber
        // imageNumber += 1

    // Fade in the image at the current number
    // $('#slideShow img').eq(imageNumber).fadeIn();

}, 3000);


$('.hamburger').on('click', function (evt) {
   evt.preventDefault();
$('main-nav').slideToggle(300);

});

var stickySidebar = $('.sticky');

// if (stickySidebar.length > 0) { 
//   var stickyHeight = stickySidebar.height(),
//       sidebarTop = stickySidebar.offset().top;
// }

// on scroll move the sidebar
// $(window).scroll(function () {
//   if (stickySidebar.length > 0) {   
//     var scrollTop = $(window).scrollTop();
            
//     if (sidebarTop < scrollTop) {
//       stickySidebar.css('top', scrollTop - sidebarTop);

//       // stop the sticky sidebar at the footer to avoid overlapping
//       var sidebarBottom = stickySidebar.offset().top + stickyHeight,
//           stickyStop = $('.content-area').offset().top + $('.content-area').height();
//       if (stickyStop < sidebarBottom) {
//         var stopPosition = $('.content-area').height() - stickyHeight;
//         stickySidebar.css('top', stopPosition);
//       }
//     }
//     else {
//       stickySidebar.css('top', '0');
//     } 
//   }
// });

// $(window).resize(function () {
//   if (stickySidebar.length > 0) {   
//     stickyHeight = stickySidebar.height();
//   }
// });
