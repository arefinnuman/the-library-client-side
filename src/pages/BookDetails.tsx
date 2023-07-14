/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useParams } from "react-router-dom";
import {
  useGetReviewsQuery,
  useSingleBookQuery,
} from "../redux/books/booksApi";

export default function BookDetails() {
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);
  const bookData = book?.data;

  const { data: reviews } = useGetReviewsQuery(id);
  //   console.log(reviews?.data);

  const getBackHandler = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bookData?.image} className="w-1/2" />
          <div>
            <h1 className="text-5xl font-bold">{bookData?.title}</h1>
            <p className="py-2">
              <span className="font-bold">Author: </span>
              {bookData?.author}
            </p>
            <p className="py-2">
              <span className="font-bold">Genre: </span>
              {bookData?.genre}
            </p>
            <p>
              {" "}
              <span>{bookData?.publicationDate}</span>{" "}
            </p>
            <button
              onClick={getBackHandler}
              className="btn btn-primary btn-sm mt-5"
            >
              Get Back
            </button>

            <div>
              <h2 className="text-2xl font-bold mt-5">Reviews</h2>
              {reviews?.data?.map((review: any) => (
                <div key={review?._id}>
                  <div className="alert alert-bg-200 mt-5">
                    <span>{review?.review}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
