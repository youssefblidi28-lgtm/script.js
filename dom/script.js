// Select all products
const cards = document.querySelectorAll(".card");
const totalDisplay = document.querySelector(".total");

// Update total price function
function updateTotal() {
  let total = 0;

  cards.forEach(card => {
    const priceText = card.querySelector(".unit-price").textContent;
    const price = Number(priceText.replace("$", "").trim());

    const quantity = Number(card.querySelector(".quantity").textContent);

    total += price * quantity;
  });

  totalDisplay.textContent = total + " $";
}

// LOOP EACH PRODUCT
cards.forEach(card => {
  const plusBtn = card.querySelector(".fa-plus-circle");
  const minusBtn = card.querySelector(".fa-minus-circle");
  const deleteBtn = card.querySelector(".fa-trash-alt");
  const likeBtn = card.querySelector(".fa-heart");
  const quantitySpan = card.querySelector(".quantity");

  // ➕ INCREASE
  plusBtn.addEventListener("click", () => {
    quantitySpan.textContent = Number(quantitySpan.textContent) + 1;
    updateTotal();
  });

  // ➖ DECREASE
  minusBtn.addEventListener("click", () => {
    let qty = Number(quantitySpan.textContent);
    if (qty > 0) {
      quantitySpan.textContent = qty - 1;
      updateTotal();
    }
  });

  // 🗑 DELETE ITEM
  deleteBtn.addEventListener("click", () => {
    card.parentElement.remove();
    updateTotal();
  });

  // ❤️ LIKE TOGGLE
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
  });
});

// initial total
updateTotal();