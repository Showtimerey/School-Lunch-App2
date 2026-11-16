// ARRAY OF RESTAURANTS:
// Stores School Lunch and all outside restaurants from your presentation.
const restaurants = [
  {
    name: "School Lunch",
    type: "School Lunch",
    items: [
      { name: "Turkey & Cheese Sub", waitMinutes: 0 },
      { name: "Garden Caesar Salad", waitMinutes: 0 },
      { name: "Hot Baked Chicken & Rice", waitMinutes: 5 }
    ]
  },
  {
    name: "Suns Pizza",
    type: "Outside Food",
    items: [
      { name: "Cheese Pizza Slice", waitMinutes: 0 },
      { name: "Pepperoni Pizza Slice", waitMinutes: 0 },
      { name: "Chicken Parm Sub", waitMinutes: 12 }
    ]
  },
  {
    name: "Burger King",
    type: "Outside Food",
    items: [
      { name: "Whopper Meal", waitMinutes: 10 },
      { name: "Chicken Jr. Sandwich", waitMinutes: 8 },
      { name: "French Fries (Medium)", waitMinutes: 5 }
    ]
  },
  {
    name: "Dunkin Donuts",
    type: "Outside Food",
    items: [
      { name: "Iced Coffee & Bagel", waitMinutes: 0 },
      { name: "Bacon Egg & Cheese Croissant", waitMinutes: 6 },
      { name: "Assorted Donuts (2 Pack)", waitMinutes: 0 }
    ]
  },
  {
    name: "Yaz's House of Pizza",
    type: "Outside Food",
    items: [
      { name: "Greek Salad with Grilled Chicken", waitMinutes: 10 },
      { name: "Steak & Cheese Sub", waitMinutes: 12 },
      { name: "Buffalo Chicken Calzone", waitMinutes: 15 }
    ]
  },
  {
    name: "Spanish Corner Store",
    type: "Outside Food",
    items: [
      { name: "Beef Empanada", waitMinutes: 0 },
      { name: "Arroz con Pollo (Chicken & Rice)", waitMinutes: 5 },
      { name: "Cuban Sandwich", waitMinutes: 10 }
    ]
  },
  {
    name: "Love Health Cafe",
    type: "Outside Food",
    items: [
      { name: "Berry Protein Smoothie", waitMinutes: 5 },
      { name: "Avocado Turkey Wrap", waitMinutes: 0 },
      { name: "Acai Energy Bowl", waitMinutes: 7 }
    ]
  },
  {
    name: "Boston Fried Chicken",
    type: "Outside Food",
    items: [
      { name: "2-Piece Fried Chicken & Biscuit", waitMinutes: 8 },
      { name: "Chicken Tenders Combo", waitMinutes: 10 },
      { name: "Mashed Potatoes & Gravy", waitMinutes: 0 }
    ]
  }
];

// VARIABLES:
// Tracks which restaurant is displayed and which items are in the order.
let currentIndex = 0;
let selectedItems = [];

// FUNCTION:
// Updates the screen with the current restaurant's name, type, and menu items.
function displayRestaurant() {
  const current = restaurants[currentIndex];

  // Update header text
  document.getElementById("restaurantName").textContent = current.name;
  document.getElementById("restaurantType").textContent = current.type;

  // Clear old menu cards
  const menuList = document.getElementById("menuItemsList");
  menuList.innerHTML = "";

  // Loop through each food item and create a card with an Add button
  current.items.forEach(function(item) {
    const card = document.createElement("div");
    card.className = "menu-card";

    const statusText = item.waitMinutes === 0 
      ? "Available for Immediate Pickup" 
      : "Wait Time: " + item.waitMinutes + " mins";

    const statusClass = item.waitMinutes === 0 ? "ready-now" : "wait-time";

    card.innerHTML = `
      <h4>${item.name}</h4>
      <span class="wait-tag ${statusClass}">${statusText}</span>
    `;

    // BUTTON:
    // Creates an "Add to Order" button for this food item.
    const addButton = document.createElement("button");
    addButton.className = "add-btn";
    addButton.textContent = "Add to Order";

    // EVENT:
    // Adds this item when clicked.
    addButton.addEventListener("click", function() {
      addToOrder(current.name, item);
    });

    card.appendChild(addButton);
    menuList.appendChild(card);
  });
}

// FUNCTION:
// Adds a chosen item to the selectedItems array and updates the order list.
function addToOrder(restaurantName, item) {
  selectedItems.push({
    restaurant: restaurantName,
    name: item.name,
    waitMinutes: item.waitMinutes
  });
  updateOrderDisplay();
}

// FUNCTION:
// Displays the teacher's selected items AND calculates total wait time.
function updateOrderDisplay() {
  const orderList = document.getElementById("orderList");
  const waitSummary = document.getElementById("waitSummary");
  orderList.innerHTML = "";

  if (selectedItems.length === 0) {
    orderList.innerHTML = "<li>No items selected yet.</li>";
    waitSummary.className = "wait-summary-box";
    waitSummary.textContent = "Select items to see your estimated wait time.";
    return;
  }

  let maxWaitTime = 0;

  selectedItems.forEach(function(orderItem) {
    const li = document.createElement("li");
    const timeLabel = orderItem.waitMinutes === 0 
      ? "Immediate Pickup" 
      : orderItem.waitMinutes + " mins wait";

    li.textContent = orderItem.name + " (" + orderItem.restaurant + ") — " + timeLabel;
    orderList.appendChild(li);

    if (orderItem.waitMinutes > maxWaitTime) {
      maxWaitTime = orderItem.waitMinutes;
    }
  });

  if (maxWaitTime === 0) {
    waitSummary.className = "wait-summary-box wait-summary-ready";
    waitSummary.textContent = "Status: Ready for Immediate Pickup! (0 mins wait)";
  } else {
    waitSummary.className = "wait-summary-box wait-summary-delay";
    waitSummary.textContent = "Estimated Wait Time: " + maxWaitTime + " minutes";
  }
}

// EVENT LISTENERS:
// Runs when the user clicks the left/right arrows or Clear Order button.
document.getElementById("prevBtn").addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = restaurants.length - 1;
  }
  displayRestaurant();
});

document.getElementById("nextBtn").addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= restaurants.length) {
    currentIndex = 0;
  }
  displayRestaurant();
});

document.getElementById("clearOrderBtn").addEventListener("click", function() {
  selectedItems = [];
  updateOrderDisplay();
});

// Run once when the page loads so School Lunch and Add buttons appear immediately
displayRestaurant();
const restaurants = [
  {
    name: "School Lunch",
    type: "School Lunch",
    image: "images/school-lunch.jpg",
    items: [
      { name: "Turkey & Cheese Sub", waitMinutes: 0 },
      { name: "Garden Caesar Salad", waitMinutes: 0 },
      { name: "Hot Baked Chicken & Rice", waitMinutes: 5 }
    ]
  },
  {
    name: "Suns Pizza",
    type: "Outside Food",
    image: "images/suns-pizza.png",
    items: [
      { name: "Cheese Pizza Slice", waitMinutes: 0 },
      { name: "Pepperoni Pizza Slice", waitMinutes: 0 },
      { name: "Chicken Parm Sub", waitMinutes: 12 }
    ]
  },
  {
    name: "Burger King",
    type: "Outside Food",
    image: "images/burger-king.png",
    items: [
      { name: "Whopper Meal", waitMinutes: 10 },
      { name: "Chicken Jr. Sandwich", waitMinutes: 8 },
      { name: "French Fries (Medium)", waitMinutes: 5 }
    ]
  },
  {
    name: "Dunkin Donuts",
    type: "Outside Food",
    image: "images/dunkin.png",
    items: [
      { name: "Iced Coffee & Bagel", waitMinutes: 0 },
      { name: "Bacon Egg & Cheese Croissant", waitMinutes: 6 },
      { name: "Assorted Donuts (2 Pack)", waitMinutes: 0 }
    ]
  },
  {
    name: "Yaz's House of Pizza",
    type: "Outside Food",
    image: "images/yazs-pizza.png",
    items: [
      { name: "Greek Salad with Grilled Chicken", waitMinutes: 10 },
      { name: "Steak & Cheese Sub", waitMinutes: 12 },
      { name: "Buffalo Chicken Calzone", waitMinutes: 15 }
    ]
  },
  {
    name: "Spanish Corner Store",
    type: "Outside Food",
    image: "images/spanish-corner.png",
    items: [
      { name: "Beef Empanada", waitMinutes: 0 },
      { name: "Arroz con Pollo (Chicken & Rice)", waitMinutes: 5 },
      { name: "Cuban Sandwich", waitMinutes: 10 }
    ]
  },
  {
    name: "Love Health Cafe",
    type: "Outside Food",
    image: "images/love-health.png",
    items: [
      { name: "Berry Protein Smoothie", waitMinutes: 5 },
      { name: "Avocado Turkey Wrap", waitMinutes: 0 },
      { name: "Acai Energy Bowl", waitMinutes: 7 }
    ]
  },
  {
    name: "Boston Fried Chicken",
    type: "Outside Food",
    image: "images/boston-fried.png",
    items: [
      { name: "2-Piece Fried Chicken & Biscuit", waitMinutes: 8 },
      { name: "Chicken Tenders Combo", waitMinutes: 10 },
      { name: "Mashed Potatoes & Gravy", waitMinutes: 0 }
    ]
  }
];