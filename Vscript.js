document.getElementById('convertButton').addEventListener('click', function() {
    // Step 1: Retrieve the input value and ensure it's a valid number
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    
    // If input is not a number, alert the user and stop the function
    if (isNaN(inputValue) || inputValue === "") {
        alert("Please enter a valid number.");
        return;
    }
    
    // Step 2: Identify the selected units for conversion
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    // Step 3: Define the conversion rates between units
    const conversions = {
        milileter: {
            milileter: 1,
            liter: 0.001,
            galoon: 0.0002641721,
            pint: 0.0021133764,
            ounce: 0.0338140227
        },
        liter: {
            milileter: 1000,
            liter: 1,
            galoon: 0.2641720524,
            pint: 2.1133764189,
            ounce: 33.814022702
        },
        galoon: {
            milileter: 3785.411784,
            liter: 3.785411784,
            galoon:1,
            pint: 8,
            ounce: 128
        },
        pint: {
            milileter:473.176473,
            liter: 0.473176473,
            galoon:0.125,
            pint: 1,
            ounce: 16
        },
        ounce: {
            milileter:29.573529562,
            liter: 0.0295735296,
            galoon:0.0065052671,
            pint: 0.0520421365,
            ounce: 1
        }
    };

    // Step 4: Perform the conversion using the selected units and conversion rates
    let convertedValue = (inputValue * conversions[inputUnit][outputUnit]).toFixed(2);
    
    // Step 5: Display the converted value in the output field
    document.getElementById('outputValue').value = convertedValue;
});

document.getElementById('swapButton').addEventListener('click', function() {
    // Swap the selected input and output units
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    document.getElementById('inputUnit').value = outputUnit;
    document.getElementById('outputUnit').value = inputUnit;
}); 