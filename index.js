import axios from "axios";

const cardDiv = document.querySelector(".git-cards");

function getUserInfo(username) {
  // pulling userdata from the api
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      // creating a variable to store the userdata recieved inside of
      const gitUserData = cardCreator(res.data);
      // appending the userdata inside of the container
      cardDiv.appendChild(gitUserData);
      // logging the data recieved to make sure that it is correct
      console.log(res.data);
    })
    .catch((err) => {
      // this will catch any errors that occur during the instantiation of the code
      console.log("Container Doesnt Exist yet");
    });
}

getUserInfo("belak98");

function cardCreator(obj) {
  //create elements
  const userCard = document.createElement("div");
  const userImg = document.createElement("div");
  const cardInfo = document.createElement("div");
  const usersName = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const userProfile = document.createElement("p");
  const profileUrl = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const userBio = document.createElement("p");

  //append
  cardDiv.appendChild(userCard);
  userCard.appendChild(userImg);
  userCard.appendChild(cardInfo);
  userCard.appendChild(usersName);
  userCard.appendChild(userName);
  userCard.appendChild(location);
  userCard.appendChild(userProfile);
  userProfile.appendChild(profileUrl);
  userCard.appendChild(followers);
  userCard.appendChild(following);
  userCard.appendChild(userBio);

  //class
  userCard.classList.add("card");
  cardInfo.classList.add("card-info");
  usersName.classList.add("name");
  userName.classList.add("username");

  //content
  return userCard;
}
// now that the api client works I can get started on using this in the live webpage..
// make sure you take in everything that you need from git hub make the classes and the UI look good :)
