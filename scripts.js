'use strict'

// const name = document.querySelector('')
const quoteContent = document.querySelector('#quoteContent')
const authorNameApi = document.querySelector('#authorNameApi')
const btn = document.querySelector('.btn')

// const url = 

function displayData() {
  btn.innerHTML = 'Loading Quote';

    fetch('https://api.quotable.io/random')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
              
        console.log(data);
        // // const {text} 
        // const genQuote = data[Math.floor(Math.random() * data.length)];
        quoteContent.innerHTML = data.content;
        authorNameApi.innerHTML = data.author
        btn.innerHTML = 'New Quote';
      });
}

btn.addEventListener('click', displayData)
