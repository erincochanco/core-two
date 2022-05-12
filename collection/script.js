let filterValue = 'all';
const filter = document.querySelector('#allergens');

fetch('https://api.airtable.com/v0/appiO928XGEGes4rb/foods', {
    headers: {
        Authorization: 'Bearer keyyCrGsXRgd04XgN',
    },
})
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let filterValue = 'all';
    
        const foodAirtable = document.querySelector('.food');
        function generateContent() {
            foodAirtable.innerHTML = '';

            data.records
                // .filter(food => {
                //     return filterValue === 'gluten' ? food : food.fields.allergens === filterValue;                    // return foods.filter === filterValue;
                // });
                .filter(food => {
                    return filterValue === food.fields.allergensalt;
                    // return foods.filter === filterValue;
                })
                .forEach(foods => {
                    console.log(foods);
                    foodAirtable.innerHTML += `
          <div class="foods">
            <div class="foods">${(foods.fields.food)}</div>
             <img src="${foods.fields.illustration[0].thumbnails.large.url}" class="illus"/>
            <h3>allergens: ${foods.fields.allergens}</h3>  
          </div>
      `;
                });
        }
        generateContent();


        filter.addEventListener('change', () => {
            filterValue = event.target.value;
            generateContent();
            console.log('changed');
            console.log(event.target.value);
        });
    });