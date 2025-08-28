// 🚀 Part 1: Mastering JavaScript Basics
// ---------------------------------------

// Variable declarations
let age = 20;
let isStudent = true;

// Conditional Example
if (age >= 18 && isStudent) {
  console.log("You are an adult student.");
} else {
  console.log("Either you are under 18 or not a student.");
}

// Capture input and update page content
document.getElementById("btnGreet").addEventListener("click", function () {
  let name = document.getElementById("username").value;
  
  if (name) {
    document.getElementById("greeting").textContent = "Hello, " + name + "! 👋";
  } else {
    document.getElementById("greeting").textContent = "Please enter your name!";
  }
});

// ❤️ Part 2: Functions — Reusability
// ---------------------------------------

// Function 1: Calculate total price
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

// Function 2: Format currency
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// Trigger total calculation
document.getElementById("btnTotal").addEventListener("click", function () {
  let cart = [10.99, 5.49, 2.99, 20.00]; // Example prices
  let total = calculateTotal(cart);
  document.getElementById("total").textContent =
    "Your total is " + formatCurrency(total);
});

// 🔁 Part 3: Loops — Repetition
// ---------------------------------------

// Loop Example 1: Countdown using for loop
document.getElementById("btnCountdown").addEventListener("click", function () {
  let countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = ""; // Clear old list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    countdownList.appendChild(li);
  }

  let li = document.createElement("li");
  li.textContent = "🚀 Lift Off!";
  countdownList.appendChild(li);
});

// Loop Example 2: Iterate over array with forEach
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
fruits.forEach(fruit => console.log("I like " + fruit));

// 🌐 Part 4: DOM Manipulation
// ---------------------------------------
// Already demonstrated in buttons & events above (3 interactions):
// 1. Updating greeting text
// 2. Displaying total dynamically
// 3. Creating countdown list
