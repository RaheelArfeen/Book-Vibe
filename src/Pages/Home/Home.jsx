import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()

    return (
        <div className='md:container mx-auto mb-12'>
            <Helmet>
                <title>Home - Book Vibe</title>
            </Helmet>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;