import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Generator from '../components/Generator';
import Password from '../components/Password';
import styles from '../styles/Home.module.css';
import Notifications from './../components/Notifications';

const Home: NextPage = () => {
    return (
        <div className="h-screen bg-black">
            <Head>
                <title>Password Generator</title>
            </Head>

            <main className=" h-full flex flex-col space-y-5 justify-center items-center text-gray-200 max-w-sm mx-auto relative">
                <h1 className="text-gray-400">Password Generator</h1>
                <Password />
                <Generator />
            </main>
            <Notifications />
        </div>
    );
};

export default Home;
