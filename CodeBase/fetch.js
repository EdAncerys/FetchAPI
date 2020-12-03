'use strict';

const getText = () => {
  fetch('../Data/sampleText.txt')
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById('dataOutput').innerHTML = data;
    })
    .catch((error) => console.log(error));
};

const getUsers = () => {
  fetch('../Data/users.json')
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      let userData = '<h3>Users</h3>';
      users.forEach((user) => {
        userData += `<ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Username: ${user.username}</li>
            <li>Email: ${user.email}</li>
          </ul>`;
      });
      document.getElementById('userData').innerHTML = userData;
    })
    .catch((error) => console.log(error));
};

document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
