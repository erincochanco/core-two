console.log('test');

fetch('https://api.airtable.com/v0/appiO928XGEGes4rb/foods', {
        headers: {
            Authorization: 'Bearer keyyCrGsXRgd04XgN',

        },
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);

        const foods = document.querySelector('.food');

        console.log(foods);

        data.records.forEach(food => {
            console.log(food);
            foods.innerHTML += `
            <div class="foods">
            <h2>${food.fields.food} </h2>
            <img src="${food.fields.illustration[0].thumbnails.large.url}" class="illus"/>
            <h3>${food.fields.allergens}</h3>
            <h3>${food.fields.frequency}</h3>
            <h3>${food.fields.reaction}</h3>
            <h3>${food.fields.allergens}</h3>
            </div>
            `;
        });

    });