// JavaScript (quiz.js)

document.getElementById('submitQuiz').addEventListener('click', calculateResult);

function calculateResult() {
    const temperaturePreference = document.querySelector('input[name="temperature"]:checked').value;
    const locationPreference = document.querySelector('input[name="preference"]:checked').value;
    let result = '';

    // Hide all images first
    document.getElementById('tampaImage').style.display = 'none';
    document.getElementById('gatlinburgImage').style.display = 'none';
    document.getElementById('capecodImage').style.display = 'none';
    document.getElementById('denverImage').style.display = 'none';

    if (temperaturePreference === 'warmer' && locationPreference === 'beach') {
        result = 'Tampa, FL';
        document.getElementById('tampaImage').style.display = 'block';
    } else if (temperaturePreference === 'warmer' && locationPreference === 'mountains') {
        result = 'Gatlinburg, TN';
        document.getElementById('gatlinburgImage').style.display = 'block';
    } else if (temperaturePreference === 'cooler' && locationPreference === 'beach') {
        result = 'Cape Cod, MA';
        document.getElementById('capecodImage').style.display = 'block';
    } else if (temperaturePreference === 'cooler' && locationPreference === 'mountains') {
        result = 'Denver, CO';
        document.getElementById('denverImage').style.display = 'block';
    }

    document.getElementById('result').textContent = `Based on your preferences, you might like to live in ${result}.`;
}
