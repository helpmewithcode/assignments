// Wait for the DocumentObjectModel (DOM) to load
// The anonymous function () => {} is a "callback"
document.addEventListener('DOMContentLoaded', () => {
  // All of my code to target/use elements from the page
  // should be in here.

  // Find the elements in the document
  // Returns an array of all elements matching this selector
  const menuItemElements = document.querySelectorAll("[data-js='menuItem']");
  // Returns one element
  const selectedCountElement = document.querySelector("[data-js='selectedCount']");
  // Loop over each of the menuItemElements
  menuItemElements.forEach((menuItemElement) => {
    // Listen for click/tap whatever
    menuItemElement.addEventListener('click', (e) => {
      menuItemElement.classList.toggle('menuItem--clicked');
      const menuItemsThatHaveBeenClicked = document.querySelectorAll('.menuItem--clicked');
      // Increase the count stuff...
      selectedCountElement.innerHTML = menuItemsThatHaveBeenClicked.length;
    });
  });
});
