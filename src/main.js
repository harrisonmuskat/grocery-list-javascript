//this is the sample list. to use app without sample list, comment out 2-11
let groceryList = [['eggs'],['bacon', 8], ['cheese', 2]];

groceryList = groceryList.map(function (item) {
  return new GroceryItem(...item);
});

let listHTML = '';
groceryList.forEach((item) => {
  listHTML += item.toListElement();
});

//if removing sample list, uncomment the line below
//let listHTML = '';

let itemList = document.createElement('ul');
itemList.innerHTML = listHTML;
let groceryDiv = document.getElementById('main');
groceryDiv.appendChild(itemList);

let groceryListForm = document.getElementById('grocery-list-form');
groceryListForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let newItemName = document.getElementById('name').value;
  if (document.getElementById('quantity').value !== '') {
    let newItemQuantity = document.getElementById('quantity').value;
    listHTML += new GroceryItem(newItemName, newItemQuantity).toListElement();
  }
  else {
    listHTML += new GroceryItem(newItemName).toListElement();
  }
  itemList.innerHTML = listHTML;
  groceryDiv.appendChild(itemList);
  groceryListForm.reset();
});
