function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);
    const years = parseFloat(document.getElementById('loan-term').value);
    
    if (!amount || !rate || !years) {
        alert('Please fill in all fields');
        return;
    }
    
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const monthlyPayment = amount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - amount;
    
    const resultDiv = document.getElementById('loan-result');
    resultDiv.innerHTML = `
        <strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}<br>
        <strong>Total Payment:</strong> $${totalPayment.toFixed(2)}<br>
        <strong>Total Interest:</strong> $${totalInterest.toFixed(2)}
    `;
    resultDiv.classList.add('show');
}

function calculateMortgage() {
    const price = parseFloat(document.getElementById('home-price').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const rate = parseFloat(document.getElementById('mortgage-rate').value);
    const years = parseFloat(document.getElementById('mortgage-term').value);
    
    if (!price || !downPayment || !rate || !years) {
        alert('Please fill in all fields');
        return;
    }
    
    const loanAmount = price - downPayment;
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - loanAmount;
    
    const resultDiv = document.getElementById('mortgage-result');
    resultDiv.innerHTML = `
        <strong>Loan Amount:</strong> $${loanAmount.toFixed(2)}<br>
        <strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}<br>
        <strong>Total Payment:</strong> $${totalPayment.toFixed(2)}<br>
        <strong>Total Interest:</strong> $${totalInterest.toFixed(2)}
    `;
    resultDiv.classList.add('show');
}

function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('annual-rate').value);
    const years = parseFloat(document.getElementById('years').value);
    const compound = parseInt(document.getElementById('compound').value);
    
    if (!principal || !rate || !years) {
        alert('Please fill in all fields');
        return;
    }
    
    const amount = principal * Math.pow(1 + rate / 100 / compound, compound * years);
    const interest = amount - principal;
    
    const resultDiv = document.getElementById('interest-result');
    resultDiv.innerHTML = `
        <strong>Final Amount:</strong> $${amount.toFixed(2)}<br>
        <strong>Interest Earned:</strong> $${interest.toFixed(2)}
    `;
    resultDiv.classList.add('show');
}

function calculateSavings() {
    const goal = parseFloat(document.getElementById('goal-amount').value);
    const current = parseFloat(document.getElementById('current-savings').value);
    const monthly = parseFloat(document.getElementById('monthly-contribution').value);
    const rate = parseFloat(document.getElementById('savings-rate').value);
    
    if (!goal || !current || !monthly || !rate) {
        alert('Please fill in all fields');
        return;
    }
    
    const monthlyRate = rate / 100 / 12;
    let months = 0;
    let balance = current;
    
    while (balance < goal && months < 600) {
        balance = balance * (1 + monthlyRate) + monthly;
        months++;
    }
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    const resultDiv = document.getElementById('savings-result');
    resultDiv.innerHTML = `
        <strong>Time to Reach Goal:</strong> ${years} years and ${remainingMonths} months<br>
        <strong>Final Balance:</strong> $${balance.toFixed(2)}
    `;
    resultDiv.classList.add('show');
}
