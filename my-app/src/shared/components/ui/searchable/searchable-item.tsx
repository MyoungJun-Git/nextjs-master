import { BooksData } from '@/types/books-type'

type SearchableItemProps = {
  booksData: BooksData[]
}

const SearchableItem = ({ booksData }: SearchableItemProps) => {
  return (
    <div>
      <ul>
        {booksData.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchableItem
