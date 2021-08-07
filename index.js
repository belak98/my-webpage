import axios from 'axios'

function getUserInfo(username) {
    axios.get(`https://api.github.com/users/${username}`)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log('Error has occured');
    });
};

getUserInfo('belak98')

// now that the api client works I can get started on using this in the live webpage.. 
// make sure you take in everything that you need from git hub make the classes and the UI look good :)