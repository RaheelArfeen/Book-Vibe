import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === parseInt(id));

  // const handleMarkAsRead = id => {
  //   addToStoreDB(id)
  // }

  return (
    <div>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:container mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
            {/* Book Image Section */}
            <div className="md:flex-shrink-0 bg-gray-100 p-32 flex items-center justify-center">
              <img
                src={singleBook.image}
                alt="The Catcher in the Rye"
                className="w-72 h-auto object-cover"
              />
            </div>

            {/* Book Details Section */}
            <div className="p-8 md:p-12 w-full">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {singleBook.bookName}
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">By: {singleBook.author}</h2>

              <div className="mb-6 border-y py-4 border-[#13131315]">
                <h3 className="text-lg font-semibold text-gray-900">
                  {singleBook.category}
                </h3>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Review:
                </h3>
                <p className="text-gray-600">
                  {singleBook.review}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tags
                </h3>
                <div className="flex gap-2 mt-4">
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

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="text-sm text-gray-500">Number of Pages:</h3>
                  <p className="text-lg font-semibold">{singleBook.totalPages}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Publisher:</h3>
                  <p className="text-lg font-semibold">{singleBook.publisher}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Year of Publishing:</h3>
                  <p className="text-lg font-semibold">{singleBook.yearOfPublishing}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm text-gray-500 mb-1">Rating:</h3>
                <p className="text-2xl font-bold text-gray-900">{singleBook.rating}</p>
              </div>

              <div className="flex gap-4">
                <button onClick={() => addToStoreDB(id)} className="px-6 py-2 bg-white border-2 border-gray-900 text-gray-900 cursor-pointer rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Mark as Read
                </button>
                <button className="px-6 py-2 bg-sky-400 text-white rounded-md font-semibold hover:bg-sky-500 transition-colors cursor-pointer">
                  Add to Wishlist
                </button>
                <a href="/" className="px-6 py-2 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 cursor-pointer transition-colors">
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
