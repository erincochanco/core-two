console.log(data)

let dropdownValue = 'string';


function handleDropdown (){
    console.log(event.target.value);
    dropdownValue = event.target.value
    generateContent();
}

const content = document.querySelector('.content');
function generateContent(){
data.forEach(item=> {
    console.log(item);
    content.innerHTML +=`
        <div class="card">
        <p>popularity ranking: ${item.popularity}</p>
        <h3>$(item.name)</h3>
        <h3>$(item.type)</h3>
        <p>$$(item.price)</p>
        <p> In stock :${item.isInStock ? 'yes in stock':'no out of stock'}</p>
    </div>
    `;
})

}

data
.filter (item => {
    return item.type === 'brass';
})

