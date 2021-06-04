var animationSpeed = 1000; // How quickly the next slide animates.//

var pause = 3000; // The pause between each slide.//

var interval = setInterval(function() {
    // startSlider();
}, pause);

function startSlider() {
    $('.slides > li:first')
        .fadeOut(animationSpeed)
        .next()
        .fadeIn(animationSpeed)
        .end()
        .appendTo('.slides');
}
