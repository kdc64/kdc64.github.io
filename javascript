function calculateBudget() {
  var dailyBudget = document.getElementById("daily_budget").value;
  var monthlyBudget = dailyBudget * 30;
  document.getElementById("results").innerHTML = "Your monthly budget is $" + monthlyBudget;
}
