/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IoCheckmark } from "react-icons/io5";
import {
  useGetMarkedAsReadQuery,
  useGetReadingListQuery,
  useMarkedAsReadMutation,
} from "../redux/cart/cartApi";
const ReadingList = () => {
  const id = "64b03876fef328b67a530d28";

  const { data: readingList } = useGetReadingListQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [markedAsRead] = useMarkedAsReadMutation();

  const markedAsReadHandler = (bookId: string) => {
    console.log("Marked as read", bookId);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    markedAsRead(bookId);
  };

  const { data: markedAsReadReadingList } = useGetMarkedAsReadQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  return (
    <div>
      <div>
        {readingList?.data?.map((book: any) => (
          <div className="flex items-center justify-between" key={book._id}>
            <ul className="mt-2 list-disc">
              <li className="font-semibold">{book.book.title}</li>
            </ul>
            <button
              onClick={() => markedAsReadHandler(book.book._id)}
              className="btn btn-sm btn-primary m-2"
            >
              {" "}
              <IoCheckmark />
            </button>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-xl font-sans font-semibold my-4">
          These are all read by you
        </h1>
        {markedAsReadReadingList?.data?.map((book: any) => (
          <div className="flex items-center justify-between" key={book._id}>
            <ul className="mt-2 list-disc">
              <li className="font-semibold">{book.book.title}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingList;
