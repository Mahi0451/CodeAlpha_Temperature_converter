
function convertTemperature() {

    var temperature = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");
    
    if (unit === "celsius") {
      result.innerHTML = "Converted temperature: " + (temperature * 9/5 + 32) + " °F";
    } 
    else if (unit === "fahrenheit") {
      result.innerHTML = "Converted temperature: " + ((temperature - 32) * 5/9) + " °C";
    } 
    else if (unit === "kelvin") {
      result.innerHTML = "Converted temperature: " + (parseFloat(temperature) + 273.15) + " K";
    }
  }
  