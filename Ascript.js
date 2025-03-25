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
        sqmeter: {
            sqmeter: 1,
            sqfeet: 0.09290304,
            sqyards: 0.83612736,
            acres: 4046.8726098743,
            hec: 10000
        },
        sqfeet: {
            sqmeter: 0.09290304,
            sqfeet: 1,
            sqyards: 0.111111111,
            acres: 43560,
            hec: 107639.10417
        },
        sqyards: {
            sqmeter: 0.83612736,
            sqfeet: 9,
            sqyards: 1,
            acres: 0.0002066116,
            hec: 0.0000836127
        },
        acres: {
            sqmeter:4046.8564,
            sqfeet: 43560,
            sqyards: 4840,
            acres: 1,
            hec: 0.404686
        },
        hec: {
            sqmeter:10000,
            sqfeet: 107639.10417,
            sqyards: 11959.900463,
            acres: 2.471050,
            hec: 1
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