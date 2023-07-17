/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddToReadingListMutation } from "../redux/cart/cartApi";
import { IBooks } from "../types/globalTypes";

interface IProps {
  book: IBooks;
}

const BookCard = ({ book }: IProps) => {
  const { author, genre, title, image, publicationDate, _id } = book;

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [addToReadingList] = useAddToReadingListMutation();

  const handleAddToReadingList = (bookId: typeof _id) => {
    console.log("Add to reading list", bookId);
    const readingListData = {
      book: bookId,
      user: "64b03876fef328b67a530d28",
    };
    addToReadingList(readingListData);
    setIsButtonDisabled(true);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src={image} alt="books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Author: {author}</p>
          <p className="font-bold">{genre}</p>
          <p className="text-sm">Publication Date: {publicationDate}</p>
          <div className="flex  items-center gap-2">
            <button
              onClick={() => handleAddToReadingList(_id)}
              disabled={isButtonDisabled} // Set the disabled attribute based on the state
            >
              <div className="badge badge-secondary">Add to reading list</div>
            </button>
            <button>
              <div className="badge badge-outline">Add to wishlist</div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/book-details/${book._id}`}>
              <button className="btn btn-accent btn-sm">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
