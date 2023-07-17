/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useGetAllWishListQuery } from "../redux/cart/cartApi";

export default function FutureReading() {
  const id = "64b03876fef328b67a530d28";

  const { data: wishList } = useGetAllWishListQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  return (
    <div>
      {wishList?.data?.map((book: any) => (
        <div className="flex items-center justify-between" key={book._id}>
          <ul className="mt-2 list-disc">
            <li className="font-semibold">{book.book.title}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
