// ////////////////////////////////////////Slideshow////////////////////////////
// const images = [
//     '1.jpg',
//     '2.jpg',
//     '3.jpg',
//     '4.jpg',
//     '5.jpg',
//     '6.jpg'
// ];

// let currentIndex = 0;
// let slideshowIntervalId = null;
// const slideshowDelay = 2000; // 2 seconds

// const imageElement = document.getElementById('image');
// function displayImage() {
//     imageElement.src = images[currentIndex];
// }

// function next() {
//     currentIndex = (currentIndex + 1) % images.length;
//     displayImage();
//     if (currentIndex == 0) {

//         stopSlideshow();
//     }
// }
// function previous() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     displayImage();
// }
// function startSlideshow() {
//     if (slideshowIntervalId === null) {
//         slideshowIntervalId = setInterval(next, slideshowDelay);
//     }
// }
// function stopSlideshow() {
//     clearInterval(slideshowIntervalId);
//     slideshowIntervalId = null;
// }
// displayImage();
