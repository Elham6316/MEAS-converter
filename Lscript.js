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
        meters: {
            meters: 1,
            kilometers: 0.001,
            feet: 3.28084,
            inches: 39.3701,
            yards: 1.09361
        },
        kilometers: {
            meters: 1000,
            kilometers: 1,
            feet: 3280.84,
            inches: 39370.1,
            yards: 1093.61
        },
        feet: {
            meters: 0.3048,
            kilometers: 0.0003048,
            miles: 0.000189394,
            feet: 1,
            inches: 12,
            centimeters: 30.48,
            millimeters: 304.8,
            yards: 0.333333
        },
        inches: {
            meters: 0.0254,
            kilometers: 0.0000254,
            miles: 0.0000157828,
            feet: 0.0833333,
            inches: 1,
            centimeters: 2.54,
            millimeters: 25.4,
            yards: 0.0277778
        },
        yards: {
            meters: 0.9144,
            kilometers: 0.0009144,
            miles: 0.000568182,
            feet: 3,
            inches: 36,
            centimeters: 91.44,
            millimeters: 914.4,
            yards: 1
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