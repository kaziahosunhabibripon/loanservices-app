import React, {  useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import LoanServices from '../LoanServices/LoanServices';
import './Home.css';
const Home = () => { 
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Header> </Header>
            <LoanServices handleDateChange={handleDateChange} date={selectedDate}></LoanServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;