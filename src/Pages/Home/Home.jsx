import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()

    return (
        <div className='md:container mx-auto mb-12'>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;