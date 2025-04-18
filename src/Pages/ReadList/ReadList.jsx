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

    const data = useLoaderData();

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
        <div className="md:container mx-auto p-4">
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div>
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
