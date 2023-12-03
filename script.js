

const url = "https://restcountries.com/v3.1/all";
const result = fetch(url);
result
  .then((data) => data.json())
  .then((ele) => {
    for (var i = 0; i < ele.length; i++) {
      console.log(ele[i].name.common);
      const divison = document.createElement("div");


      divison.innerHTML = `
      
      <div class="row col-lg-4 col-sm-12'>
      <div class="col">
      <div class="card h-100">
      <div class="card-header">${ele[i].name.common}</div>
        <img src="${ele[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Capital:${ele[i].capital}</h5>
          <h5 class="card-title">Region:${ele[i].region}</h5>
          <h5 class="card-title">Latlng:${ele[i].latlng}</h5>
          <h5 class="card-title">Country Code: ${ele[i].cca2}</h5>
          </div>
          <button class="btn btn-primary" onclick="handleWeatherButtonClick(${ele[i].latlng[0]}, ${ele[i].latlng[1]}, this.nextElementSibling)">Click for Weather</button>
          <div class="weather-container"></div>
      </div>
          
        </div>
      </div>
      </div>
      `;
      document.body.append(divison);
    }
  });
