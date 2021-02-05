fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displayData(data);
    })


const displayData = countries =>{
    const countriesDiv = document.getElementById('countrydiv');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        
        const countryDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = country.name;
        const p = document.createElement('p');
        p.innerText = country.capital;
        countriesDiv.appendChild(h2);
        countriesDiv.appendChild(p);
        countriesDiv.appendChild(countryDiv);        
        console.log(country);

    }
}