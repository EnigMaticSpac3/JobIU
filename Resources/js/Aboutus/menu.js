//Create function to select elements
const selectElement = (element) => document.querySelector(element);

//open and close menu on clicks
selectElement('.menu-btn').addEventListener('click', () => {
    selectElement('.nav-menu-shown').classList.toggle('active');
})
selectElement('.menu-close').addEventListener('click', () => {
    selectElement('.nav-menu-shown').classList.remove('active');
})