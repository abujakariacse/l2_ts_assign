function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper == undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

type Book = { title: string; rating: number };

function filterByRating(items: Book[]): Book[] {
  const filteredBooks: Book[] = items.filter((item: Book) => item.rating >= 4);
  return filteredBooks;
}
