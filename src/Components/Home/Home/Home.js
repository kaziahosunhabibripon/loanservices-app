import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import LoanServices from '../LoanServices/LoanServices';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <LoanServices></LoanServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;