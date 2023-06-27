const buttonElement = document.getElementById("calculate");
const billInputElement = document.getElementById("bill");
const tipInputElement = document.getElementById("tip");
const totalSpanElement = document.getElementById("total");

function calculateTotal() {
  const billValue = billInputElement.value;
  const tipValue = tipInputElement.value;
  const totalvalue = billValue * (1 + tipValue / 100);

  totalSpanElement.innerText = totalvalue.toFixed(2);
}

buttonElement.addEventListener("click", calculateTotal);
