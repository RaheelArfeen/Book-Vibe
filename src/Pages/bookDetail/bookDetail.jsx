import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import { addToWishDB } from "../../utility/addToWish";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === parseInt(id));

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "Successfully added to read list",
      icon: "success",
    });
    addToStoreDB(id);
  };

  const handleMarkAsWish = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "Successfully added to wish list",
      icon: "success",
    });
    addToWishDB(id);
  };

  return (
    <div>
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:container mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Book Image Section */}
            <div className="w-full bg-gray-100 p-6 sm:p-10 flex items-center justify-center">
              <img
                src={singleBook.image}
                alt={singleBook.bookName}
                className="w-40 sm:w-56 md:w-72 h-auto object-cover"
              />
            </div>

            {/* Book Details Section */}
            <div className="w-full p-6 sm:p-8 md:p-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {singleBook.bookName}
              </h1>
              <h2 className="text-lg sm:text-xl text-gray-600 mb-6">
                By: {singleBook.author}
              </h2>

              <div className="mb-6 border-y py-4 border-[#13131315]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {singleBook.category}
                </h3>
              </div>

              <div className="mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Review:
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {singleBook.review}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {singleBook.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-8">
                <div>
                  <h3 className="text-sm text-gray-500">Number of Pages:</h3>
                  <p className="text-lg font-semibold">
                    {singleBook.totalPages}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Publisher:</h3>
                  <p className="text-lg font-semibold">
                    {singleBook.publisher}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Year of Publishing:</h3>
                  <p className="text-lg font-semibold">
                    {singleBook.yearOfPublishing}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm text-gray-500 mb-1">Rating:</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {singleBook.rating}
                </p>
              </div>

              <div className="flex md:flex-row flex-col gap-4">
                <button
                  onClick={() => handleMarkAsRead(id)}
                  className="px-6 py-2 bg-white border-2 border-gray-900 text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Mark as Read
                </button>
                <button
                  onClick={() => handleMarkAsWish(id)}
                  className="px-6 py-2 bg-sky-400 text-white rounded-md font-semibold hover:bg-sky-500 transition-colors"
                >
                  Add to Wishlist
                </button>
                <a
                  href="/"
                  className="px-6 py-2 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition-colors text-center"
                >
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
