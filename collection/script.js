// fetch('https://api.airtable.com/v0/appiO928XGEGes4rb/foods', {
//     headers: {
//         Authorization: 'Bearer keyyCrGsXRgd04XgN',

//     },
// })

//     .then(response => response.json())
//     .then(data => {

//         const foods = document.querySelector('.food');
//         console.log(foods);

//         let dropdownValue = 'food';

//         function handleDropdown() {
//             console.log('hi')
//             console.log(event.target.value);
//             dropdownValue = event.target.value;
//             generateContent();
//         }

// const content = document.querySelector('.foods');
//     function generateContent() {
//     content.innerHTML = '';
//     console.log('changed');

//     data.filter(item => {
//         return item.type === dropdownValue;
//     })
//                 .forEach(item => {
//                     // console.log(item);
//                     content.innerHTML += `
//              <div class="foods">
//             <h2>${item.fields.food} </h2>
//             <img src="${food.fields.illustration[0].thumbnails.large.url}" class="illus"/>
//             <h3>${item.fields.allergens}</h3>
//             <h3>${item.fields.frequency}</h3>
//             <h3>${item.fields.reaction}</h3>
//             </div>
//     `
//                 });
//         }
//         generateContent()
//     });

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
          <div class="food">
            <div class="foods">${(foods.fields.food)}</div>
             <img src="${foods.fields.illustration[0].thumbnails.large.url}" class="illus"/>
            <h3>${foods.fields.allergens}</h3>  
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