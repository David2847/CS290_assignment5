
// event handler -- on button click
document.addEventListener('DOMContentLoaded', function(event){
    console.log(event.type);
    document.getElementById('submitButton').addEventListener('click', clickHandler);
});

// add a row to the table based on user input
function clickHandler(event) {
    event.preventDefault(); // prevent submission of the form
    const company = document.getElementById('Company').value;
    const quantity = document.getElementById('Quantity').value;
    const orderHistory = document.getElementById('orderTable');
    const tableBody = orderHistory.querySelector('tbody');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = company;
    tr.appendChild(td1);
    const td2 = document.createElement('td');
    td2.textContent = quantity;
    tr.appendChild(td2);
    tableBody.appendChild(tr);
}
