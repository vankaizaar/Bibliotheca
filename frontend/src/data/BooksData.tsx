import {gql, useQuery} from '@apollo/client';

interface Book {
  id: number;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface BooksResponse {
  books: Book[];
}

const GET_ALL_BOOKS = gql`
    query Books {
        books {
            author
            coverPhotoURL
            readingLevel
            title
        }
    }`;

export default function BooksData(): Book[] | null {
  const {loading, error, data} = useQuery<BooksResponse>(GET_ALL_BOOKS);

  if (loading) return null;
  if (error) return null;

  if (data) {
    let idCounter = 1;
    return data.books.map(book => ({
      ...book,
      id: idCounter++,
    }));
  }

  return null;
}