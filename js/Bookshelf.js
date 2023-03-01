class Book{
 constructor(title, author, subject, language){
   this.title = title;
   this.author = author;
   this.subject = subject;
   this.language = language;
   this.comment = [];
}
render(){
    const bookDetail = document.createElement("div");
    bookDetail.classList.add("book");
    
    const titleDetail = document.createElement("div");
    titleDetail.classList.add("book-title");
    titleDetail.textContent = this.title;
    bookDetail.appendChild(titleDetail);  

    const authorDetail = document.createElement("div");
    authorDetail.classList.add("book-author");
    authorDetail.textContent = "Author:" +this.author;
    bookDetail.appendChild(authorDetail); 

    const subjectDetail = document.createElement("div");
    subjectDetail.classList.add("book-subject");
    subjectDetail.textContent = "Subject:" +this.subject;
    bookDetail.appendChild(subjectDetail);

    const languageDetail = document.createElement("div");
    languageDetail.classList.add("book-language");
    languageDetail.textContent = "Language:" +this.language;
    bookDetail.appendChild(languageDetail);


    return bookDetail;
}
}


class Bookshelf{
    constructor (){
      this.books = [];
      this.details = document.createElement("div");
      this.details.id = "highlight";


    }
   addBook(book){
    this.books.push(book);
    this.render();

   }
   render() {
    this.details.innerHTML = "";
    for (const book of this.books) {
      this.details.appendChild(book.render());
    }
  }
  showBooks() {
    const bookList = document.createElement("ul");
    for (const book of this.books) {
      const bookListItem = document.createElement("li");
      bookListItem.innerHTML = `<br><b>${book.title},</b> by ${book.author},<br>
      Subject: ${book.subject},<br>
      Language: ${book.language},
      Comment: <input type="text" id="comment" name="comment" required>
      <button type="submit" id="adjustbutton">submit</button> `;
      bookList.appendChild(bookListItem);
    }

    const bookListContainer = document.getElementById("bookData");
    bookListContainer.innerHTML = "";
    bookListContainer.appendChild(bookList);

    const heading = document.createElement("h1");
    heading.textContent = "Book List";
    bookListContainer.insertBefore(heading, bookList);
  }}

const bookshelf = new Bookshelf();
const addBook = document.getElementById("bookdetails");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const subjectInput = document.getElementById("subject");
const languageInput = document.getElementById("language");


addBook.addEventListener("submit", event=>{
  event.preventDefault();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const subject = subjectInput.value.trim();
    const language = languageInput.value.trim();
    


if(title.length > 0 && author.length > 0 && subject.length > 0 && language.length > 0){
    const book = new Book(title, author, subject, language);
    bookshelf.addBook(book);
    addBook.reset();
}});

const book1 = new Book('Things Fall Apart', 'Chinua Achebe', 'Tragedy', 'English');
const book2 = new Book('LightSeekers', 'Femi Kayode', 'Thriller', 'English');
const book3 = new Book('The Sweetest Remedy', 'Jane Igharo', 'Romance', 'English');
const book4 = new Book('Hope and Glory', 'Jendella Benson', 'Drama', 'English' );
bookshelf.addBook(book1);
bookshelf.addBook(book2);
bookshelf.addBook(book3);
bookshelf.addBook(book4);

document.getElementById("showbook").addEventListener("click", () => {
  bookshelf.showBooks();
  });
