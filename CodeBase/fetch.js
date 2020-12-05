'use strict';

// Fetch data from a text file
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

// Fetch data from a JSON file
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
      document.getElementById('dataOutput').innerHTML = userData;
    })
    .catch((error) => console.log(error));
};

// Fetch data from a API
const getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return res.json();
    })
    .then((posts) => {
      let userPosts = '<h2>Posts</h2>';
      posts.forEach((post) => {
        userPosts += `<div>
            <h4>UserID: ${post.userId}</h4>
            <h4>Title: ${post.title}</h4>
            <p>Body: ${post.name}</p>
          </div>`;
      });
      document.getElementById('dataOutput').innerHTML = userPosts;
    })
    .catch((error) => console.log(error));
};

// Submit form to API

const addPosts = (e) => {
  e.preventDefault();
  console.log('Send');
};

document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document
  .getElementById('addPosts')
  .addEventListener('submit', (e) => addPosts(e));
