/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../redux/books/booksApi";

const Books = () => {
  const { data } = useGetBooksQuery(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(data?.data);

  return (
    <div className="min-h-screen flex items-center h-full">
      <h1>Books</h1>
    </div>
  );
};

export default Books;
