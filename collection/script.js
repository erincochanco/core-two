fetch('https://api.airtable.com/v0/appiO928XGEGes4rb/foods', {
        headers: {
            Authorization: 'Bearer keyyCrGsXRgd04XgN',

        },
    })

// function handleDropdown (){
//     console.log(event.target.value);
//     dropdownValue = event.target.value
//     generateContent();
// }

// let filterValue = 'all';
// function handleDropdown (){
// console.log(event.target.value);



    .then(response => response.json())
    .then(data => {

        const foods = document.querySelector('.food');

        console.log(foods);
        // function generateContent() {
        //       content.innerHTML = ''; // important! we want to delete all content on the screen each time we re-run to capture new filter and sorting parameters
        //       data
        //         .filter(item => {
        //           return allergen === 'all' ? item : item.type === allergen; // if our dropdown is set to all, return evey item, otherwise only return items that match selected instrument type
        //         });
        data.records.forEach(food => {
            console.log(food);
            foods.innerHTML += `
            <div class="foods">
            <h2>${food.fields.food} </h2>
            <img src="${food.fields.illustration[0].thumbnails.large.url}" class="illus"/>
            <h3>${food.fields.allergens}</h3>
            <h3>${food.fields.frequency}</h3>
            <h3>${food.fields.reaction}</h3>
            </div>
            `;
        });

    };

    generateContent();

// let allergen = 'all'; // first we create an initial state for our dropdown - we want all items to show first

// // update dropdown
// function handleDropdown() {
//   // this function runs every time a new element is selected
//   allergen = event.target.value; // update our instrumentType variable from line 1 with the new value from the dropdown chang event
//   generateContent(); // after updating the new filter condition, then re-run our content generation
// }

// // content
// const foods = document.querySelector('.food'); // empty placeholder div in our HTML for our data-driven content
// function generateContent() {
//   content.innerHTML = ''; // important! we want to delete all content on the screen each time we re-run to capture new filter and sorting parameters
//   data
//     .filter(item => {
//       return allergen === 'all' ? item : item.type === allergen; // if our dropdown is set to all, return evey item, otherwise only return items that match selected instrument type
//     })
//     data.records.forEach(item => {
//       // eveything in this forEach is the same as your project 3 Airtable examples
//       content.innerHTML += `
//       <div class="foods">
//         <h4>${food.fields.allergens}</h4>
//       </div>
//     `;
//     });
// }
// generateContent(); // run the function when the page loads for the first time