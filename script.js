const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all price elements
    const prices = document.querySelectorAll('.price');
    
    // Calculate total price
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    // Create or update element to display total
    let ansElement = document.getElementById('ans');
    if (!ansElement) {
        ansElement = document.createElement('div');
        ansElement.id = 'ans';
        document.body.appendChild(ansElement);
    }
    ansElement.textContent = total;
};

getSumBtn.addEventListener("click", getSum);