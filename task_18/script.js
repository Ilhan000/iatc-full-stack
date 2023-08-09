var skip = 0,
  limit = 12;
function getProducts() {
  fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then((res) => res.json())
    .then((data) => {
        data.products.forEach(element => {
            productsContainer.innerHTML += `
            <div data-id="${element.id}"
              class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cards"
            >
              <div
                class="flex items-end justify-end h-56 w-full bg-cover"
                style="background-image: url('${element.images[0]}');"
              >
                <button
                  class="add-to-card p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                >
                  <svg
                    class="h-5 w-5 pointer-events-none"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="px-5 py-3 ">
                <h3 class="text-gray-700 uppercase" id="the-list">${element.title}</h3>
                <span class="text-gray-500 mt-2">$ ${element.price},00</span>
              </div>
            </div>
            `
        });
    });
}
getProducts();

function loadMoreCards() {
  const cardContainer = document.getElementById("productsContainer");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const numCardsToShow = 3; // Change this value as per your preference

  const hiddenCards = [...productsContainer.querySelectorAll(".card:not(.show)")];
  for (let i = 0; i < numCardsToShow; i++) {
    const cardToShow = hiddenCards.shift();
    if (cardToShow) {
      cardToShow.classList.add("show");
    } else {
      loadMoreBtn.style.display = "none"; // Hide the button if there are no more cards to show
      break;
    }
  }
}



