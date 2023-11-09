document.addEventListener('DOMContentLoaded', function () {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateButton = document.getElementById('calculate');
    const resetButton = document.getElementById('reset');
    const modal = document.getElementById('myModal');
    const closeModalButton = document.getElementsByClassName('close')[0];
    const modalContent = document.getElementsByClassName('modal-content')[0];
    const bmiResultElement = document.getElementById('bmiResult');
    const classificationElement = document.getElementById('classification');
    const descriptionElement = document.getElementById('description');
    const suggestionElement = document.getElementById('suggestion');

    calculateButton.addEventListener('click', calculateBMI);
    resetButton.addEventListener('click', resetInputs);
    closeModalButton.addEventListener('click', closeModal);
    window.addEventListener('click', outsideModalClick);

    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight.');
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        const roundedBMI = bmi.toFixed(2);

        displayResult(roundedBMI);
    }

    function resetInputs() {
        heightInput.value = '';
        weightInput.value = '';
        closeModal();
    }

    function displayResult(bmi) {
        modal.style.display = 'block';
        bmiResultElement.textContent = `BMI: ${bmi}`;
        
        let classification, description, suggestion;

        if (bmi < 18.5) {
            classification = 'Underweight';
            description = 'You are underweight.';
            suggestion = 'Consider consulting with a nutritionist to improve your diet and gain healthy weight.';
        } else if (bmi >= 18.5 && bmi < 25) {
            classification = 'Normal weight';
            description = 'You have a normal weight.';
            suggestion = 'Maintain a balanced diet and regular exercise to stay healthy.';
        } else if (bmi >= 25 && bmi < 30) {
            classification = 'Overweight';
            description = 'You are overweight.';
            suggestion = 'Focus on a balanced diet and engage in regular physical activity to maintain a healthy weight.';
        } else {
            classification = 'Obese';
            description = 'You are obese.';
            suggestion = 'Consult with a healthcare professional to develop a comprehensive weight management plan.';
        }

        classificationElement.textContent = `Classification: ${classification}`;
        descriptionElement.textContent = `Description: ${description}`;
        suggestionElement.textContent = `Suggestion: ${suggestion}`;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function outsideModalClick(e) {
        if (e.target === modal) {
            closeModal();
        }
    }
});
