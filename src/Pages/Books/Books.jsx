import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // const bookPromise = fetch('./booksData.json').then(res => res.json())

    return (
        <div className='p-4'>
            <h1 className='text-center text-[40px] playfair mt-20 mb-6'>Books</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                <Suspense fallback={<span>loading........</span>}>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;