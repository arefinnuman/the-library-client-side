import { IBooks } from "../types/globalTypes";

interface IProps {
  book: IBooks;
}

export default function HomeBookCard({ book }: IProps) {
  const { author, genre, title, image, publicationDate } = book;
  return (
    <div>
      <article className="flex flex-col ">
        <img alt="" className="object-cover w-full h-52 d" src={image} />

        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracki uppercase hover:underline "
          >
            {author}
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leadi">{title}</h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-800">
            <span>{publicationDate}</span>
            <span>{genre}</span>
          </div>
        </div>
      </article>
    </div>
  );
}
