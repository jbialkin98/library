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

Book.prototype.readStatus = (book, readButton) => {
    if (book.read === 'read') {
        book.read = 'Not Read';
        readButton.classList.remove('read');
        readButton.classList.add('notRead');
    } else {
        book.read = 'Read';
        readButton.classList.remove('notRead');
        readButton.classList.add('read');
    }
    readButton.textContent = book.read;
}

function addBookToLibrary(entry) {
    myLibrary.push(entry);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not Read");
const gobletOfFire = new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", 734, "Read");
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1225, "Not Read");
const nameOfTheWind = new Book("The Name of the Wind", "Patrick Rothfuss", 662, "Not Read");

myLibrary.forEach((book) => {
    displayBookInfo(book);
});

function displayBookInfo(book) {
    let index = myLibrary.indexOf(book);

    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    container.appendChild(bookCard);

    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.innerHTML = '<img src="delete.svg" />';
    bookCard.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
        removeDiv(bookCard);
        removeFromLibrary(index);
    });

    const cardContent = document.createElement('div');
    cardContent.classList.add('cardContent');
    bookCard.appendChild(cardContent);

    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                bookTitle(book, cardContent);
            case 1:
                bookAuthor(book, cardContent);
            case 2: 
                bookPages(book, cardContent);
            case 3: 
                bookRead(book, bookCard);
            default:
                return;    
        }
    }
}

function bookTitle(book, cardContent) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv', 'bookTitle');
    cardContent.appendChild(newDiv);
    newDiv.textContent = book.title;
}

function bookAuthor(book, cardContent) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    cardContent.appendChild(newDiv);
    newDiv.textContent = book.author;
}

function bookPages(book, cardContent) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    cardContent.appendChild(newDiv);
    newDiv.textContent = book.pages;
}

function bookRead(book, bookCard) {
    const cardBottom = document.createElement('div');
    cardBottom.classList.add('cardButton');
    bookCard.appendChild(cardBottom);

    const readButton = document.createElement('button');
    readButton.classList.add('readButton');
    readButton.type = 'checkbox';
    readButton.textContent = book.read;
    if (book.read === 'Read') {
        readButton.classList.add('read');
    } else if (book.read === 'Not Read') {
        readButton.classList.add('notRead');
    } else {
        return;
    }
    cardBottom.appendChild(readButton);
    readButton.addEventListener('click', () => {
        book.readStatus(book, readButton);
    });
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

function removeDiv(bookCard) {
    bookCard.remove();
}

function removeFromLibrary(index) {
    myLibrary.splice(index, 1);
}