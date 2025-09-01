//your code here!
const list = document.getElementById("infi-list");

let count = 1;

// Function to create a list item
function createItem() {
  const li = document.createElement("li");
  li.textContent = "Item " + count++;
  return li;
}

// Add initial 10 items
for (let i = 0; i < 10; i++) {
  list.appendChild(createItem());
}

// Load more items (2 each time)
function loadMore() {
  for (let i = 0; i < 2; i++) {
    list.appendChild(createItem());
  }
}

// Detect scroll inside the list
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    loadMore();
  }
});


