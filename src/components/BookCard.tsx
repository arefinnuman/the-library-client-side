import { Link } from "react-router-dom";
import { IBooks } from "../types/globalTypes";

interface IProps {
  book: IBooks;
}

const BookCard = ({ book }: IProps) => {
  const { author, genre, title, image, publicationDate } = book;

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
            <button>
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
