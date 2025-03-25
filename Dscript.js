function convertDate() {
    const hijriInput = document.getElementById('hijri').value;
    const gregorianOutput = document.getElementById('gregorian');
    const errorMessage = document.getElementById('error-message');

    errorMessage.style.display = 'none';

    try {
        // Add this validation first
        if (!hijriInput) {
            throw new Error('Please enter a Hijri date');
        }

        // Use the correct function name: moment().hijri()
        const m = moment(hijriInput, 'iYYYY-iMM-iDD');
        
        if (!m.isValid()) {
            throw new Error('Invalid Hijri date');
        }

        gregorianOutput.value = m.format('YYYY-MM-DD');
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
        gregorianOutput.value = '';
    }
}