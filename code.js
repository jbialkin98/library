const container = document.querySelector('.container');
const addNewBookButton = document.querySelector('.newBook');
const overlay = document.getElementById('overlay');
const popUp = document.querySelector('.popUpDisplay');
const closePopUpButton = document.querySelector('.closePopUp');

const form = document.querySelector('.form');
form.addEventListener('submit', callbackFunction);

addNewBookButton.addEventListener('click', () => {
    openPopUp();
});

closePopUpButton.addEventListener('click', () => {
    closePopUp();
});


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    addBookToLibrary(this);
}

function addBookToLibrary(entry) {
    myLibrary.push(entry);
}



const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const gobletOfFire = new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", 734, "read");
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1225, "not read yet");
const nameOfTheWind = new Book("The Name of the Wind", "Patrick Rothfuss", 662, "not read yet");

myLibrary.forEach((book) => {
    displayBookInfo(book);
});

function displayBookInfo(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    container.appendChild(bookCard);
    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                bookTitle(book, bookCard);
            case 1:
                bookAuthor(book, bookCard);
            case 2: 
                bookPages(book, bookCard);
            case 3: 
                bookRead(book, bookCard);
            default:
                return;
        }
    }
}

function bookTitle(book, bookCard) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    bookCard.appendChild(newDiv);
    newDiv.textContent = book.title;
}

function bookAuthor(book, bookCard) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    bookCard.appendChild(newDiv);
    newDiv.textContent = book.author;
}

function bookPages(book, bookCard) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    bookCard.appendChild(newDiv);
    newDiv.textContent = book.pages;
}

function bookRead(book, bookCard) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    bookCard.appendChild(newDiv);
    newDiv.textContent = book.read;
}

function openPopUp() {
    popUp.classList.add('active');
    overlay.classList.add('active');
}

function closePopUp() {
    popUp.classList.remove('active');
    overlay.classList.remove('active');
}

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));

    const newEntry = new Book(formDataObj.title, formDataObj.author, formDataObj.pages, formDataObj.read);
    displayBookInfo(newEntry);
}