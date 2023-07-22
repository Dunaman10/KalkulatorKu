let displayValue = "";

function toDisplay(value) {
  displayValue += value;
  document.querySelector("#display").value = displayValue;
}

function deleteDisplay() {
  displayValue = "";
  document.querySelector("#display").value = displayValue;
}

function result() {
  try {
    // eval digunakan untuk mengevaluasi ekspresi yang menghasilkan string atau numerik, contoh yg saya gunakan menggunakan string
    displayValue = eval(displayValue).toString();
    document.querySelector("#display").value = displayValue;
  } catch (error) {
    document.querySelector("#display").value = "Error pak";
  }
}
