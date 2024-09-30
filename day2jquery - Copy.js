$(document).ready(function() {
    let currentImgIndex = 0;
    const images = $('.img img');

    function showLightbox(index) {
        currentImgIndex = index;
        const imgSrc = $(images[index]).attr('src');
        $('#lightbox-img').attr('src', imgSrc);
        $('#lightbox').show();
    }

    function navigateLightbox(step) {
        currentImgIndex += step;
        if (currentImgIndex < 0) {
            currentImgIndex = images.length - 1;
        } else if (currentImgIndex >= images.length) {
            currentImgIndex = 0;
        }
        const imgSrc = $(images[currentImgIndex]).attr('src');
        $('#lightbox-img').attr('src', imgSrc);
    }

    images.on('click', function() {
        const index = images.index(this);
        showLightbox(index);
    });

    $('#lightbox').on('click', function(e) {
        if (e.target.id === 'lightbox' || e.target.id === 'lightbox-img') {
            $(this).hide();
        }
    });

    $('#prev').on('click', function(e) {
        e.stopPropagation();
        navigateLightbox(-1);
    });

    $('#next').on('click', function(e) {
        e.stopPropagation();
        navigateLightbox(1);
    });
});
