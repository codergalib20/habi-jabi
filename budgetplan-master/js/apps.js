const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");
// Save Input
const saveValue = document.getElementById("save-value");
// Show text=======
const totalExpenses = document.getElementById("total-expenses");
const totalBalance = document.getElementById("total-balance");
const errorShow = document.getElementById("errorShow");
let myIncome;
let balance;
document.getElementById("btn-calc").addEventListener("click", () => {
  incomeField = parseFloat(income.value);
  foodField = food.value;
  rentField = rent.value;
  clothesField = clothes.value;
  const totalBuy =
    parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);
  if (!incomeField || !foodField || !rentField || !clothesField) {
    errorShow.innerHTML = `<i class="fa-solid fa-xmark"></i> All field Must be Up`
  } else {
    if (incomeField < 0 || foodField < 0 || rentField < 0 || clothesField < 0) {
        errorShow.innerHTML = (`<i class="fa-solid fa-xmark"></i> Please giv a positive number`);
      clearValue();
    } else {
      if (incomeField < totalBuy) {
        errorShow.innerHTML = `<i class="fa-solid fa-xmark"></i> Apnar taka nai`;
        clearValue();
      } else {
        myIncome = incomeField;
        totalExpenses.innerText = totalBuy;
        balance = incomeField - totalBuy
        totalBalance.innerText = balance;
        errorShow.innerText = ""
        clearValue();
      }
    }
  }
});
document.getElementById("saving-btn").addEventListener("click", () => {
  const saveValueField = saveValue.value;
  console.log(myIncome);
  const saveBalance = (myIncome * parseFloat(saveValueField) ) / 100;
  const remaining = balance - saveBalance
  document.getElementById("saving-amount").innerText = saveBalance;
  document.getElementById("remaining-balance").innerText = remaining
});
function clearValue() {
  income.value = "";
  food.value = "";
  rent.value = "";
  clothes.value = "";
}
