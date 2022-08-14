const apiKey = "aa154020-f3c7-48af-8ae5-869ffc281d18";


// function to call API to render data
const bioComment = () => {
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
        .then(response => {
          displayComment(response.data);
          console.log(response.data)
        })

        .catch((error) =>{
          console.log(error)
        })

}
// call function
bioComment();

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
    quote.innerText = object[i]['comment'];
    paragraph.appendChild(quote);

    let time = document.createElement('div');
    nextComment.appendChild(time);

    let commentDate = document.createElement('span');
    commentDate.classList.add('comments__box--date');
    commentDate.innerText = new Date(object[i].timestamp).toLocaleDateString();
    time.appendChild(commentDate);
    };

}


// Add event listener to conversation form 
let formEl = document.querySelector('#form');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  // target input fields
  const newComment = () => {
    const yourComment = {}
    yourComment.name = event.target.nameField.value;
    yourComment.comment = event.target.commentField.value;
  
  // post comment to API 
    axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`, yourComment, {
      headers: {"Content-Type": "application/json"}
    
    })

    // empty container before posting and call get function to re-render data
    .then(response => {
      wrap.innerHTML = "";
      bioComment();
    })

    .catch((error) =>{
      console.log(error)
    })
  // resets form
    formEl.reset();
  } 
  newComment()
});





