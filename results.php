<?php
$dailyBudget = $_POST["daily_budget"];
$monthlyBudget = $dailyBudget * 30;
echo "Your monthly budget is $" . $monthlyBudget;
?>
