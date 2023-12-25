function fetchAndDisplayData() {
    fetch('https://api.escuelajs.co/api/v1/products/')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error(error))
}


function displayData(data) {
    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = '';
    data.forEach(product => {
        const row = 
        `<tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.category.name}</td>
            <td>${product.creationAt}</td>
        </tr>`;
        tableBody.innerHTML += row;
    })
}


function sortAndDisplayData() {
    fetch('https://api.escuelajs.co/api/v1/products/')
        .then(response => response.json())
        .then(data => {
            const sortedData = data.sort((a, b) => isSorted ? a.price - b.price : b.price - a.price)
            isSorted = !isSorted;
            displayData(sortedData)
        }).catch(error => console.error(error))
}

let isSorted = true
fetchAndDisplayData()


const priceHeader = document.getElementById('price')
priceHeader.addEventListener('click', sortAndDisplayData)

const titleHeader = document.getElementById('title')
titleHeader.addEventListener('click', () => {
    sortAndDisplayData('title', (a, b) => isSorted ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    isSorted = !isSorted;
})


const input = document.getElementById('inp')
function debounce (delay, cb){
    let timeout;
    return(...args) => {
        clearTimeout(timeout)
        timeout = setTimeout (() => cb(...args), delay)
    }
}




