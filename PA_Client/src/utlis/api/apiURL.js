
const apiURL =  'http://localhost:3001'|| 'https://kelvin-personal-assistant.herokuapp.com';

const jwtHeaders = {
    "Content-Type": "application/json" ,
    "x-access-token": sessionStorage.getItem("token")
}

module.exports = {apiURL, jwtHeaders};
