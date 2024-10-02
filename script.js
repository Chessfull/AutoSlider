//Datas for card
let cardDatas = [
  {
    name: "10 - Salt Lake Stadium",
    capacity: 85000,
    teams: "India National Football Team, Mohun Bagan, ATK, Mohammedan SC",
    image: "images/salt-lake.jpg",
  },
  {
    name: "9 - Borg El Arab Stadium",
    capacity: 86000,
    teams:
      "Egypt National Football Team, Al-Ittihad Alexandria, Smouha SC, Al Ahly SC",
    image: "images/borg-el-arab.jpg",
  },
  {
    name: "8 - Estadio Azteca",
    capacity: 87000,
    teams: "Mexico National Football Team, Club América",
    image: "images/estadio-azteca.jpg",
  },
  {
    name: "7 - Bukit Jalil National Stadium",
    capacity: 87400,
    teams: "Malaysian National Football Team",
    image: "images/bukit-jalil.jpg",
  },
  {
    name: "6 - Wembley Stadium",
    capacity: 90000,
    teams: "England National Football Team, Tottenham Hotspur",
    image: "images/wembley.jpg",
  },
  {
    name: "5 - Rose Bowl",
    capacity: 92500,
    teams: "United States National Football Team",
    image: "images/rose-bowl.jpg",
  },
  {
    name: "4 - FNB Stadium",
    capacity: 95000,
    teams: "South Africa National Football Team, Kaiser Chiefs",
    image: "images/fnb.jpg",
  },
  {
    name: "3 - Camp Nou",
    capacity: 99000,
    teams: "FC Barcelona, Catalonia National Football Team",
    image: "images/camp-nou.jpg",
  },
  {
    name: "2 - Melbourne Cricket Ground",
    capacity: 100000,
    teams: "Australia National Football Team",
    image: "images/mcg.jpg",
  },
  {
    name: "1 - Rungrado 1st of May Stadium",
    capacity: 114000,
    teams: "North Korea National Football Team, April 25 Sports Club",
    image: "images/rungrado.jpg",
  },
];

//#region Global scope
let index = 0; // => For iteration on card
let count = cardDatas.length; // => For controlling index limit
let stopButtonLogic = false; // => For controlling stop-play button logic
let intervalCheck; // => For auto slider(setInterval)
//#endregion

toggleInterval(); // => Called for starting page

//#region ▼ This is a function iteration on data and displaying on card ▼
function setCard(localIndex) {
  
  index = localIndex;

  if (localIndex < 0) {  // => Controlling index for keeping range bottom limit
    index = count - 1;
  }

  if (localIndex > count - 1) { // => Controlling index for keeping range top limit
    index = 0;
  }

  // ▼ This part set view of card with index on 'cardDatas' 
  document.querySelector(".container").setAttribute("id", `${index}`);
  document.querySelector(".card-title").textContent = cardDatas[index].name;
  document.querySelector(".capacity p").textContent = cardDatas[index].capacity;
  document.querySelector(".teams p").textContent = cardDatas[index].teams;
  document.querySelector(".card-img-top").setAttribute("src", cardDatas[index].image);
}
//#endregion

//#region ▼ This part for next and previous arrow, with click changes index  ▼
document
  .querySelector(".fa-solid.fa-arrow-right")
  .addEventListener("click", function () {
    index++; 
    setCard(index); // => calling data with next index
  });
  
document
  .querySelector(".fa-solid.fa-arrow-left")
  .addEventListener("click", function () {
    index--; 
    setCard(index); // => calling data with previous index
  });
  //#endregion

//#region ▼ This part for stop-play button, sets stop-play icon and closing-starting setInterval with toggleInterval function ▼
document.querySelector(".fa-solid.fa-stop")
  .addEventListener("click", function () {
    
    stopButtonLogic = !stopButtonLogic; // With click change logic and set in if blocks
    toggleInterval();
    let icon = document.querySelector(".card-footer i:nth-of-type(2)");
    let id = document.querySelector(".container").getAttribute("id");

    if (stopButtonLogic) {
      icon.className = "fa-solid fa-play fa-3x";
      clearInterval(intervalCheck);
    } else {
      icon.className = "fa-solid fa-stop fa-3x";
    }
  });
  //#endregion

//#region ▼ This part for toggle auto-stop slide interval ▼
function toggleInterval() {
  if (stopButtonLogic) {
    clearInterval(intervalCheck);
  } else {
    setCard(index);
    intervalCheck = setInterval(function () {
      index++;
      setCard(index);
    }, 2000);
  }
}
//#endregion