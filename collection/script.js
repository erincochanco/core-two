console.log('test');

fetch('https://api.airtable.com/v0/appiO928XGEGes4rb/bread', {
        headers: {
            Authorization: 'Bearer keyyCrGsXRgd04XgN',

        },
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);

        const bread = document.querySelector('.breads');

        console.log(bread);

        data.records.forEach(origin => {
            console.log(origin);
            bread.innerHTML += `<h2> ${origin.fields.origin} </h2> <h3>${origin.fields.origin}</h3>`;
        });

    });