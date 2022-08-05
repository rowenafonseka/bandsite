const defaultComments = [
        {
            name: "Connor Walton",
            date: "02/17/21",
            text: "This is art. This is inexplicable magic expressed in the purest
            way, everything that makes up this majestic work deserves
            reverence. Let us appreciate this for what it is and what it
            contains." , 
        },

        {
            name: "Emilie Beach",
            date: "01/09/2021",
            text: "I feel blessed to have seen them in person. What a show! They were 
            just perfection. If there was one day of my life I could relive,
            this would be it. What an incredible day." , 

        },

        {
            name: "Miles Acosta",
            date: "12/20/2020",
            text: " I can't stop listening. Every time I hear one of their songs - the
            vocals - it gives me goosebumps. Shivers straight down my spine.
            What a beautiful expression of creativity. Can't get enough." , 
        }

];


// 1. Make container for default comment section (DOM)

// Create new elements. 
// Create elements with classes. 
// Add content without using innerHTML. Use methods for individual elements.


let newElement = document.createElement('input');
document.body.appendChild(newElement);


// 2. Make click event for submit. What do you need to do for that
 /* a. user clicks in text field
    b. user enters name field
    c. user clicks in comment field
    d. user clicks submit addEventListner (click)
    e. comment gets published to top of comments (.push())
    f. comment disappers on reload */


// 3. Create each card in the div 

// 4. connect the two

{/* <div class="comments comments__box">
<div class="comments comments__box--avatar"></div>
<div class="comments comments__box--paragraph">
  <span class="comments comments__box--name">Connor Walton</span>
  <p class="comments comments__box--text">
    This is art. This is inexplicable magic expressed in the purest
    way, everything that makes up this majestic work deserves
    reverence. Let us appreciate this for what it is and what it
    contains.
  </p>
</div>
<div>
  <span class="comments comments__box--date">02/17/21</span>
</div>
</div>
<div class="comments comments__box">
<div class="comments comments__box--avatar"></div>
<div class="comments comments__box--paragraph">
  <span class="comments comments__box--name">Emilie Beach</span>
  <p class="comments comments__box--text">
    I feel blessed to have seen them in person. What a show! They were
    just perfection. If there was one day of my life I could relive,
    this would be it. What an incredible day.
  </p>
</div>
<div>
  <span class="comments comments__box--date">01/09/2021</span>
</div>
</div>
<div class="comments comments__box">
<div class="comments comments__box--avatar"></div>
<div class="comments comments__box--paragraph">
  <span class="comments comments__box--name">Miles Acosta</span>
  <p class="comments comments__box--text">
    I can't stop listening. Every time I hear one of their songs - the
    vocals - it gives me goosebumps. Shivers straight down my spine.
    What a beautiful expression of creativity. Can't get enough.
  </p>
</div>
<div>
  <span class="comments comments__box--date">12/20/2020</span>
</div>
</div> */