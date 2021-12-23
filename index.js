// Declare Variables
   const url = `https://api.openweathermap.org/data/2.5/find?q=${cityQuery}&units=imperial&apikey=624df7df709506255ac28e8d15e07ee9`;
   const city = document.querySelector('#searchFormInput').value;
   const cityQuery = document.querySelector(city);
   const searchForm = document.querySelector('#searchForm');
//------



function searchFormFunc(e) {
   e.preventDefault();
   fetch(url)
   .then(resp => resp.json())
   .then(respInJson => {
      console.log(respInJson);
   })
}

// Event Listeners
   searchForm.addEventListener('submt', searchFormFunc);
   
//------



