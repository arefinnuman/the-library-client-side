/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
  useSingleBookQuery,
} from "../redux/books/booksApi";

export default function BookDetails() {
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);
  const bookData = book?.data;

  const { data: reviews } = useGetReviewsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const getBackHandler = () => {
    window.history.back();
  };

  const [inputValue, setInputValue] = useState<string>("");

  const [postReview] = usePostReviewMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reviewData = {
      review: inputValue,
      user: "64b03876fef328b67a530d28",
      book: id,
    };
    postReview(reviewData);
    setInputValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="m-5 min-h-screen flex">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bookData?.image} className="w-2/3" />
          <div className="w-3/4">
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
              {reviews?.data?.length > 0 ? (
                reviews?.data?.map((review: any) => (
                  <div key={review?._id}>
                    <div className="alert alert-bg-200 mt-5">
                      <span>{review?.review}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="mt-5">
                  <span className="text-xl font bold ">
                    No reviews posted yet.
                  </span>
                </div>
              )}
              <div className="mt-6">
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Add Review</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered"
                      onChange={handleChange}
                      value={inputValue}
                    />
                  </div>
                  <button className="btn btn-secondary btn-sm mt-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
