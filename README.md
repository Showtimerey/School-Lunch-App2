# School-Lunch-App2
## Development Session — November 13, 2026

### Today's Goal
Build and test the core MVP features and initial design sections for the **Speedy Lunch Getters** web application for Holland Tech teachers.

### What I Worked On
* Built the app header, hero banner, interactive restaurant menu slider, order summary list, and wait time / immediate pickup calculator.
* Added School Lunch and 7 local outside restaurants (Suns Pizza, Burger King, Dunkin Donuts, Yaz's House of Pizza, Spanish Corner Store, Love Health Cafe, and Boston Fried Chicken).
* Built and tested the **Who We Are** section (`#about`) matching the red-and-charcoal design.

### Features Completed
* **Completed & Verified:**
  * App Header & Navigation (`FEATURE 1`)
  * Hero Banner & Welcome Message (`FEATURE 2`)
  * Restaurant Slider / Menu Display with Arrows (`FEATURE 3`)
  * Item Selection & Order Display (`FEATURE 4`)
  * Wait Time & Immediate Pickup Calculator (`FEATURE 5`)
  * Who We Are Section (`FEATURE 6`)
* **Incomplete / Next Up:**
  * What They Say (Teacher Reviews) section (`FEATURE 7`)
  * Customizing exact menu items and wait times in `script.js`
  * Deploying the app with GitHub Pages

### Code Connection
* **Concept:** HTML `id` attributes and anchor links (`#about`), JavaScript Arrays (`restaurants`, `selectedItems`), and Conditionals (`if / else`).
* **What it does:** Anchor links jump smoothly to matching `id` sections on the page; arrays store lists of restaurants and chosen food items; conditionals check if `waitMinutes === 0` to show immediate pickup or calculate wait time.
* **My understanding:** [Add 1–2 sentences in your own words explaining how the arrows or wait time calculation work in your app.]

### Testing
* **What I tested:** Tested the header, hero banner, left/right menu slider arrows, adding items to the order, wait time calculation, and the Who We Are section in Live Preview.
* **Result:** Confirmed working in Live Preview.

### Debugging
* **Problem:** Initial HTML boilerplate setup issue during Feature 1.
* **What I tried:** Fixed the HTML document structure so `<header>` rendered inside `<body>`.
* **Current status:** Resolved.

### AI Assistance
* Gemini helped break the application into individual features, provided commented HTML, CSS, and JavaScript code with placement instructions, and guided testing and debugging.

### Next Session
1. Add and test the **What They Say** section (and Contact section if needed).
2. Customize specific food items and wait times in `script.js` to match the presentation, then deploy with GitHub Pages.