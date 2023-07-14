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
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
