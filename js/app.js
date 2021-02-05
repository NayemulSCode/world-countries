fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displayData(data);
    })


const displayData = countries =>{
    const countriesDiv = document.getElementById('countriesdiv');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        
        const countryDiv = document.createElement('div');
        countryDiv.className = "country"
        const countryInfo =`
            <h2 class="title">${country.name}</h2>
            <p>${country.capital}</p>
        `
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv);        

    }
}