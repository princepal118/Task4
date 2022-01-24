const axios = require('axios');

// const image = document.querySelector('img');

// Make a request for a user with a given ID
axios.get('https://api.tvmaze.com/search/shows?q=boys')
  .then(function (response) {
    
    const u=response.data;
    // console.log(u)
    const data = u[2].show.image.original;
    console.log(data);
    // image.src = data;
    // document.getElementsByName('image').appendChild(image);

  })
  .catch(function (error) {
  
    console.log(error);
  })
  .then(function () {
   
  });









// .then((response)=>{
//     const lastData = response.data;
//         return lastData;
//     });