import data from './data.js';

/**
 * @return HTML table element
 */
function createTableElement(){
    const tableElement = document.createElement('table'); // create table
    const thead = document.createElement('thead'); // create table header
    const headerRow = document.createElement('tr'); // create header row
    // populate with first row with titles from 2d array
    for (let col=0; col<data[0].length; col++) {
        const columnTitle = document.createElement('th');
        columnTitle.textContent = data[0][col];
        headerRow.appendChild(columnTitle);
    }

    thead.appendChild(headerRow);
    tableElement.appendChild(thead);

    // create table body, then nested for loop to populate each cell in each row
    //      loop traverses in row-major order of course
    const tableBody = document.createElement('tbody');
    for (let row=1; row<data.length; row++) {
        const tableRow = document.createElement('tr');
        for (let col=0; col<data[0].length; col++) {
            const cell = document.createElement('td');
            cell.textContent = data[row][col];
            tableRow.appendChild(cell);
        }
        tableBody.appendChild(tableRow);
    }
    tableElement.appendChild(tableBody);

    return tableElement;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dynamicTable').appendChild(createTableElement())
})
