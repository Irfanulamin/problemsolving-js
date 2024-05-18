// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year.
// Write A Function That Takes The Array And Returns A New Array With Only The Book Titles.Print The Result.

function getTitlesOfBooks(arrOfBooks) {
  const titlesOfBooks = arrOfBooks.map((book) => book.title);
  return titlesOfBooks;
}
