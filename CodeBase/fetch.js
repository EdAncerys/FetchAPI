'use strict';

const getText = () => {
  fetch('../Data/sampleText.txt')
    .then((res) => {
      return res.text();
    })
    .then((data) => console.log(data));
};

document.getElementById('getText').addEventListener('click', getText);
