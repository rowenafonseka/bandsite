const defaultComments = [
        {
            name: "Connor Walton",
            date: "02/17/21",
            text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

        },
        {
            name: "Emilie Beach",
            date: "01/09/2021",
            text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."  

        },
        {
            name: "Miles Acosta",
            date: "12/20/2020",
            text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
            
        }
];


// target comment div and set to variable
let wrap = document.getElementById('comments');

// function to display comments and add new comments
function displayComment(object){


  for (let i = 0; i < object.length; i++){
    
    let nextComment = document.createElement('div');
    nextComment.classList.add('comments__box');
    wrap.appendChild(nextComment);

    let avatar = document.createElement('div');
    avatar.classList.add('comments__box--avatar');
    nextComment.appendChild(avatar);

    let paragraph = document.createElement('div');
    paragraph.classList.add('comments__box--paragraph');
    nextComment.appendChild(paragraph);

    let commentName = document.createElement('span');
    commentName.classList.add('comments__box--name');
    commentName.innerText = object[i]['name'];
    paragraph.appendChild(commentName);

    let quote = document.createElement('p');
    quote.classList.add('comments__box--text');
    quote.innerText = object[i]['text'];
    paragraph.appendChild(quote);

    let time = document.createElement('div');
    nextComment.appendChild(time);

    let commentDate = document.createElement('span');
    commentDate.classList.add('comments__box--date');
    commentDate.innerText = object[i]['date'];
    time.appendChild(commentDate);
    };

  }

displayComment(defaultComments);

// Add event listener to conversation form 
let formEl = document.querySelector('#form');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();

// Define new comment parameter for user 
  let yourComment = {};
  yourComment.name = event.target.nameField.value;
  yourComment.text = event.target.commentField.value;
// Set current date when comment is loaded
  let currentDate = new Date();
  yourComment.date = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();

// displays new comment at top of list
  defaultComments.unshift(yourComment);
  displayComment(defaultComments);

// resets form
  formEl.reset();

});






