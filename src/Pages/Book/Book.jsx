import { Link } from "react-router";

const Book = ({ singleBook }) => {
  return (
    <Link to={`/bookDetail/${singleBook.bookId}`}>
      <div className="flex-1">
            <div className="w-full h-full flex flex-col rounded-2xl border border-gray-200 p-4 shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-gray-50 p-6 rounded-xl flex justify-center">
                <img
                  src={singleBook.image}
                  alt="Book Cover"
                  className="h-48 object-contain"
                />
              </div>

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

              <h2 className="mt-4 text-lg font-semibold text-gray-900 flex items-center">
                <span className="flex-1">{singleBook.bookName}</span>
                {singleBook.new && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full ml-2">
                    New
                  </span>
                )}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                By : {singleBook.author}
              </p>

              <div className="border-t border-dashed border-gray-200 mt-4 pt-3 flex justify-between items-center text-sm text-gray-700">
                <span>{singleBook.category}</span>
                <span className="flex items-center gap-1">
                  {singleBook.rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.108 5.14a.562.562 0 00.475.345l5.518.442a.562.562 0 01.323.988l-4.184 3.664a.562.562 0 00-.181.533l1.285 5.432a.562.562 0 01-.84.61l-4.725-2.773a.562.562 0 00-.564 0l-4.725 2.773a.562.562 0 01-.84-.61l1.285-5.432a.562.562 0 00-.181-.533L2.055 10.414a.562.562 0 01.323-.988l5.518-.442a.562.562 0 00.475-.345l2.108-5.14z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
    </Link>
  );
};

export default Book;
