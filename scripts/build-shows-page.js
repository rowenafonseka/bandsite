const apiKey = "aa154020-f3c7-48af-8ae5-869ffc281d18";

// Use API to render data
const displayShows = () => {
    return axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
      .then(response => {
      loop(response.data);
      console.log(response.data)

// call function to highlight clicked rows
      highlight();
    }) 

      .catch((error) => {
      console.log(error);
    })

  
};
console.log(displayShows());



const newTitle = document.createElement("h2");
const shows = document.getElementById("wrapper");
newTitle.classList.add("shows__title");
shows.appendChild(newTitle);
newTitle.innerText = "Shows";

const labelContainer = document.createElement("div");
labelContainer.classList.add("shows__labels");
shows.appendChild(labelContainer);

const showDate = document.createElement("p");
const showVenue = document.createElement("p");
const showLocation = document.createElement("p");

showDate.innerText = "date";
showVenue.innerText = "venue";
showLocation.innerText = "location";

showDate.classList.add("shows__info--label");
showVenue.classList.add("shows__info--label");
showLocation.classList.add("shows__info--label");

labelContainer.appendChild(showDate);
labelContainer.appendChild(showVenue);
labelContainer.appendChild(showLocation);

// function to loop through shows data to be rendered above 
 function loop(showsList){
console.log(showsList[0]);
for (let i = 0; i < showsList.length; i++) {

  let nextShow = document.createElement("div");
  nextShow.classList.add("shows__container");
  shows.appendChild(nextShow);

  let subContainer = document.createElement("div");
  subContainer.classList.add("shows__info");
  nextShow.appendChild(subContainer);

  let dateLabel = document.createElement("p");
  dateLabel.classList.add("shows__info--label-hide");
  dateLabel.innerText = showsList[i].labelDate;
  subContainer.appendChild(dateLabel);

  let dates = document.createElement("p");
  dates.classList.add("shows__info--date");
  dates.innerText = new Date(showsList[i].date).toLocaleDateString();
  subContainer.appendChild(dates);

  let subContainerOne = document.createElement("div");
  subContainerOne.classList.add("shows__info");
  nextShow.appendChild(subContainerOne);

  let venueLabel = document.createElement("p");
  venueLabel.classList.add("shows__info--label-hide");
  venueLabel.innerText = showsList[i].labelVenue;
  subContainerOne.appendChild(venueLabel);

  let place = document.createElement("p");
  place.innerText = showsList[i].place;
  subContainerOne.appendChild(place);

  let subContainerTwo = document.createElement("div");
  subContainerTwo.classList.add("shows__info");
  nextShow.appendChild(subContainerTwo);

  let addressLabel = document.createElement("p");
  addressLabel.classList.add("shows__info--label-hide");
  addressLabel.innerText = showsList[i].labelLocation;
  subContainerTwo.appendChild(addressLabel);

  let address = document.createElement("p");
  address.innerText = showsList[i].location;
  subContainerTwo.appendChild(address);

  let button = document.createElement("a");
  button.classList.add("shows__button");
  button.innerText = "buy tickets";
  nextShow.appendChild(button);
  }

 }

//  function to select rows to and add click event listener
  function highlight(){
    const clickRow = document.querySelectorAll(".shows__container");
   
    for (let i = 0; i < clickRow.length; i++) {

      clickRow.addEventListener = (click, event) => {
      let clickedShow = event.currentTarget;
      clickedShow.classList.add("shows__container--active");

        if (clickedShow !== clickRow) {
          clickRow.classList.remove("shows__container--active");
        }   else {
          clickRow.classList.add("shows__container--active");
        }
      }
    }

  }

