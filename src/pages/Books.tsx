/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import BookCard from "../components/BookCard";
import Loading from "../components/ui/Loading";
import { useGetBooksQuery } from "../redux/books/booksApi";
import { IBooks } from "../types/globalTypes";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const booksData = data?.data;

  if (isLoading) {
    <Loading />;
  }

  return (
    <div className="min-h-screen flex items-center h-full">
      <section className="mx-auto md:min-h-screen grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5">
        {booksData?.map((book: IBooks) => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>
    </div>
  );
};

export default Books;
