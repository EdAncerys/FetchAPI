'use strict';

const getText = () => {
  fetch('../Data/sampleText.txt')
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById('dataOutput').innerHTML = data;
    });
};

document.getElementById('getText').addEventListener('click', getText);
