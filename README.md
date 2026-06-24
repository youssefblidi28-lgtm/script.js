🛒 Shopping Cart DOM Project

A simple interactive shopping cart built using HTML, CSS, and JavaScript (DOM manipulation).
Users can increase/decrease item quantities, remove items, like products, and see the total price update automatically.

🚀 Features
➕ Increase item quantity
➖ Decrease item quantity
🗑 Remove items from the cart
❤️ Like / unlike products
💰 Automatic total price calculation
⚡ Real-time DOM updates
📸 Preview

(You can add a screenshot here)

shopping-cart.png
🛠️ Technologies Used
HTML5
CSS3 (Bootstrap included)
JavaScript (DOM Events)
Font Awesome icons
📂 Project Structure
project-folder/

├── index.html
├── style.css
├── script.js
├── baskets.png
├── socks.png
├── bag.png
└── README.md
⚙️ How It Works

Each product card contains:

A unit price
A quantity counter
Buttons for:
➕ increase quantity
➖ decrease quantity
🗑 delete product
❤️ like product
🧠 JavaScript Logic:
Listens for click events
Updates quantity values
Recalculates total price dynamically
Removes items from DOM when deleted
Toggles like state using CSS class
💡 Example Behavior
Click ➕ → quantity increases by 1
Click ➖ → quantity decreases (minimum 0)
Click 🗑 → item is removed from cart
Click ❤️ → heart turns red
Any change → total price updates instantly
📊 Total Price Formula
Total = Σ (unit price × quantity)
