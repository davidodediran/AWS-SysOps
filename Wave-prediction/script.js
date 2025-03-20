// Simulated Wave Prediction Data
function getWavePrediction(beachName) {
  const waveHeight = (Math.random() * 3 + 0.5).toFixed(1); // Random wave height (0.5m to 3.5m)
  const conditions = ["Calm", "Moderate", "High", "Very High"];
  const waveCondition = conditions[Math.floor(Math.random() * conditions.length)];
  const timestamp = new Date().toLocaleString();

  return {
    beach: beachName,
    waveHeight: waveHeight,
    condition: waveCondition,
    timestamp: timestamp,
  };
}

// DOM Elements
const beachSelect = document.getElementById("beach-select");
const getPredictionButton = document.getElementById("get-prediction");
const predictionResult = document.getElementById("prediction-result");
const beachNameElement = document.getElementById("beach-name");
const waveHeightElement = document.getElementById("wave-height");
const waveConditionElement = document.getElementById("wave-condition");
const timestampElement = document.getElementById("timestamp");

// Event Listener for Button Click
getPredictionButton.addEventListener("click", () => {
  const selectedBeach = beachSelect.value;

  if (!selectedBeach) {
    alert("Please select a beach.");
    return;
  }

  // Simulate fetching wave prediction data
  const prediction = getWavePrediction(selectedBeach);

  // Display the prediction
  beachNameElement.textContent = prediction.beach;
  waveHeightElement.textContent = prediction.waveHeight;
  waveConditionElement.textContent = prediction.condition;
  timestampElement.textContent = prediction.timestamp;

  // Show the prediction result
  predictionResult.classList.remove("hidden");
});