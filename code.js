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

const bookOne = document.querySelector(".book-one");

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(myLibrary[0]);
myLibrary.forEach((book) => {
    bookTitle(book);
    bookAuthor(book);
    bookPages(book);
    bookRead(book);
    console.log(book.title);
    console.log(book.author);
    console.log(book.pages);
    console.log(book.read);
});

// bookOne.textContent = theHobbit.title;

function bookTitle(book) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    bookOne.appendChild(newDiv);
    newDiv.textContent = book.title;
}

function bookAuthor(book) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    bookOne.appendChild(newDiv);
    newDiv.textContent = book.author;
}

function bookPages(book) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    bookOne.appendChild(newDiv);
    newDiv.textContent = book.pages;
}

function bookRead(book) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    bookOne.appendChild(newDiv);
    newDiv.textContent = book.read;
}