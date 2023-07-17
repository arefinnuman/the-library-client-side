/* eslint-disable @typescript-eslint/no-floating-promises */
import { ChangeEvent, FormEvent, useState } from "react";
import { usePostBookMutation } from "../redux/books/booksApi";

export default function AddBooks() {
  const [bookTitle, setBookTitle] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<string>("");
  const [bookPublicationDate, setBookPublicationDate] = useState<string>("");
  const [bookGenre, setBookGenre] = useState<string>("");
  const [bookImage, setBookImage] = useState<string>("");

  const [addBook] = usePostBookMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bookData = {
      title: bookTitle,
      author: bookAuthor,
      publicationDate: bookPublicationDate,
      genre: bookGenre,
      image: bookImage,
      createdUser: "64b03876fef328b67a530d28",
    };

    addBook(bookData);
    setBookTitle("");
    setBookAuthor("");
    setBookPublicationDate("");
    setBookGenre("");
    setBookImage("");
  };

  const handleTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handleAuthorInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBookAuthor(e.target.value);
  };

  const handlePublicationDateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBookPublicationDate(e.target.value);
  };

  const handleGenreInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBookGenre(e.target.value);
  };

  const handleImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBookImage(e.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center  md:p-12 sm:p-0">
      <form action="" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold">Add your books</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            onChange={handleTitleInput}
            value={bookTitle}
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onChange={handleAuthorInput}
            value={bookAuthor}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Publication Date</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onChange={handlePublicationDateInput}
            value={bookPublicationDate}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onChange={handleGenreInput}
            value={bookGenre}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            onChange={handleImageInput}
            value={bookImage}
            className="input input-bordered"
          />
        </div>

        <button className="btn w-full mt-5 btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
