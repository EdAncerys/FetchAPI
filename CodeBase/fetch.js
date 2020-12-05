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

  const title = document.getElementById('postTitle').value;
  const body = document.getElementById('postBody').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));

  console.log(title, body);
};

document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document
  .getElementById('addPosts')
  .addEventListener('submit', (e) => addPosts(e));

// Async await Fetch request
async function fetchData() {
  let returnedData;

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => (returnedData = data))
    .catch((error) => console.log(error));

  console.log(returnedData);
  return returnedData;
}

document.getElementById('testFetch').addEventListener('click', fetchData);
