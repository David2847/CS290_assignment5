import data from './data.js';



/**
 * Create and return an HTML table element using the value of variable 'data.'
 * The value of data is an array in which each element in turn is an array.
 * The top level array can have any number of elements greater than 1.
 * Each nested array will have the same number of elements.
 * This number will always be greater tha 0.
 * The HTML element created by this function will have as many columns
 * as the length of each nested array.
 * The elements in the first nested array (i.e., the array at index 0 in "data")
 * will be used to create <th> elements in the <thead> element of the table
 * The values of all other nested arrays will be used to create rows in the table,
 * one row for each of the other nested arrays, and using the value in a
 * nested array to create <td> elements in that row of the table.
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

// Don't change anything below this comment
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dynamicTable').appendChild(createTableElement())
})
