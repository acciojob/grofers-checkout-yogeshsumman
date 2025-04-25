const getSum = () => {
    // Get all price elements
    const prices = document.querySelectorAll('.price');
    
    // Calculate total price
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    // Remove any existing total row
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
    
    // Create new row for total
    const table = document.querySelector('table');
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    
    // Create cell spanning both columns
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: Rs ${total}`;
    
    // Append cell to row and row to table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);