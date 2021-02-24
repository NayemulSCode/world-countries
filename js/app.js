fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displayData(data);
        console.log(data)
    })


const displayData = countries =>{
    const countriesDiv = document.getElementById('countriesdiv');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = "country"
        const countryInfo =`
            <h2 class="title">${country.name}</h2>
            <p>${country.capital}</p>
            <button onClick="countriesDetails('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv);      
    });
}
const countriesDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('countryInfos');
    countryDiv.innerHTML =`
        <h4>${country.name}</h4>
        <P>Population: ${country.population}</p>
        <P>Currency: ${country.currencies[0].name}</p>
        <P>Border: ${country.borders}</p>
        <P>Calling Code: ${country.callingCodes}</p>
        <P>Languages: ${country.languages[0].name}</p>
        <P>Region: ${country.region}</p>
        <img src="${country.flag}">
    `
    console.log(country);

}