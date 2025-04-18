import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import { useLoaderData } from "react-router";
import ReadBook from "../ReadBook/ReadBook";
import { getWishBook } from "../../utility/addToWish";
import WishBook from "../WishBook/WishBook";

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [readsort, setReadSort] = useState('')
    const [wishsort, setWishSort] = useState('')

    const data = useLoaderData();

    function handleReadSort(type){
        setReadSort(type)
        if (type === 'pages'){
            const sortedByPage = [...readList].sort((a,b) => a.totalPages - b.totalPages)
            setReadList(sortedByPage)
        }
        
        if (type === 'rating'){
            const sortedByRating = [...readList].sort((a,b) => b.rating - a.rating)
            setReadList(sortedByRating)
        }

        if (type === 'year'){
            const sortedByYear = [...readList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
            setReadList(sortedByYear)
        }
    }

    function handleWishSort(type){
        setWishSort(type)
        if (type === 'pages'){
            const sortedByPage = [...wishList].sort((a,b) => a.totalPages - b.totalPages)
            setWishList(sortedByPage)
        }
        
        if (type === 'rating'){
            const sortedByRating = [...wishList].sort((a,b) => b.rating - a.rating)
            setWishList(sortedByRating)
        }

        if (type === 'year'){
            const sortedByYear = [...wishList].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
            setWishList(sortedByYear)
        }
    }

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedBookData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedBookData.includes(book.bookId));
        setReadList(myReadList);
    }, [data]);

    useEffect(() => {
        const wishBookData = getWishBook();
        const convertedBookData = wishBookData.map(id => parseInt(id));
        const myWishList = data.filter(book => convertedBookData.includes(book.bookId));
        setWishList(myWishList);
    }, [data]);

    return (
        <div className="md:container mx-auto md:p-0 p-4">
            <div className="text-center bg-[#f3f3f3] rounded-2xl text-5xl font-bold py-14 mb-6">
                <h1>Books</h1>
            </div>
            <div className=" flex items-center justify-center mb-6">
                <details className="dropdown mx-auto">
                    <summary className="btn m-1 text-white bg-[#23be0a] rounded-lg px-8 outline-none border-none fontsi">Sort By <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
                    <ul className="menu dropdown-content rounded-box z-1 w-52 p-2 shadow-sm text-center bg-[#f3f3f3]">
                        <li className="text-center mx-auto font-medium text-3xl"><a className="btn border-none bg-[#f3f3f3] hover:bg-[#e0e0e0] ghost" onClick={() => {handleReadSort('rating'), handleWishSort('rating')}}>Rating</a></li>
                        <li className="text-center mx-auto font-medium text-3xl"><a className="btn border-none bg-[#f3f3f3] hover:bg-[#e0e0e0] ghost" onClick={() => {handleReadSort('pages'), handleWishSort('pages')}}>Number of pages</a></li>
                        <li className="text-center mx-auto font-medium text-3xl"><a className="btn border-none bg-[#f3f3f3] hover:bg-[#e0e0e0] ghost" onClick={() => {handleReadSort('year'), handleWishSort('year')}}>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className="readList">
                        {readList.length > 0 ? (
                            readList.map(b => <ReadBook key={b.bookId} book={b} />)
                        ) : (
                            <div className="text-center py-16 text-gray-600">
                              <h2 className="text-2xl font-semibold mb-2">No Readlist Found</h2>
                              <p className="text-base text-gray-500">
                                You haven't saved any readlists yet. Start adding your favorite reads to see them here!
                              </p>
                            </div>
                        )}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        {wishList.length > 0 ? (
                            wishList.map(b => <WishBook key={b.bookId} book={b} />)
                        ) : (
                            <div className="text-center py-16 text-gray-600">
                              <h2 className="text-2xl font-semibold mb-2">No WishList Found</h2>
                              <p className="text-base text-gray-500">
                                You haven't saved any wishlist yet. Start adding your favorite reads to see them here!
                              </p>
                            </div>
                        )}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;
