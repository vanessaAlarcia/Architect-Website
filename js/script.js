const track = document.querySelector(".carousel_track");

//define slides:
const slides = Array.from(track.children);

//define left and right buttons:
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");


//define width of the carousel track (define the width of the carouel itself):
//we need to get the size of atleast one of the slides, so we call one of them using the index:
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another:
// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth + 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";
// or, we can be quicker and make a loop instead:
//slides.forEach((slide, index) => {
//    slide.style.left = slideWidth * index + "px";
//})
//even better though, give it a name so people reading it know what you're doing:
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

// slide moving mechanism
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ")";
    //remove the current-slide class and add it onto the next slide:
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}



const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
    } else if (targetIndex === (slides.length - 1)) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
    } else {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
    }
}

//when I click left, move slides to the left:
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
 
    const prevIndex = slides.findIndex (slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});



//when I click right, move slides to the right:
nextButton.addEventListener("click", e => {
    
    
    //need to know the current slide:
    const currentSlide = track.querySelector(".current-slide");
    //need to know what the next slide is:
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex (slide => slide === nextSlide);
    //need to know how much we're gonna be moving to:
    //const amountToMove = nextSlide.style.left;// so we are asking for the left property of the next slide, so this is going to return a number.
    // move to the next slide:
    moveToSlide(track, currentSlide, nextSlide);
    
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});
