/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetLastTenBooksQuery } from "../redux/books/booksApi";
import { IBooks } from "../types/globalTypes";
import HomeBookCard from "./HomeBookCard";

export default function LastTenBook() {
  const { data: lastTenBook } = useGetLastTenBooksQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  return (
    <div>
      {" "}
      <section className="py-6 sm:py-12 ">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
            <p className="font-serif text-sm">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {lastTenBook?.data?.map((book: IBooks) => (
              <HomeBookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
