# Architect-Website
This is a recreation of an architecture website for the Nucamp Portfolio Project. I recreated this website alongside my sister, Stephanie Alarcia. We chose to recreate this website because we loved the minimalistic look. This recreation was built using HTML, CSS (+Bootstrap), and Javascript. Please note that only the Home and Contact pages are functional!

# Problems/frustrations and my solutions
Recreating the multi-item carousel from the orignal website was a paricularly frustrating project (but VERY gratifying once successfully completed)! I initially tried "tweaking" Bootstrap's Carousel component code, but found my efforts unsuccessful. I resorted to building my own carousel. Each "slide" on the carousel is composed of 3 divs, each with its own image and caption. Each slide is a child of the "carousel_track" class. There are a total of three slides on the track, and the slide that is visible to the user is designated with the "current-slide" class. When the previous or next buttons are clicked, the "current-slide" class is removed from the current slide and added to the target slide. The target slide is then translated along the x-axis to take the current-slide position in the track. This Kevin Powell video on youtube was very useful: https://www.youtube.com/watch?v=VYsVOamdB0g

# Link to the original website:
https://www.hydearchitects.com/
