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
console.log(myLibrary[0]);
myLibrary.forEach((book) => {
    console.log(book.title);
    console.log(book.author);
    console.log(book.pages);
    console.log(book.read);
});
const bookOne = document.querySelector(".book-one");
bookOne.textContent = theHobbit.title;