import React from 'react';
import './Dashboard.css'
import LeftSideBar from './LeftSideBar';
import ManageReviews from './ManageReviews';



const Dashboard = () => {
    return (
        <div className='dashboard'>
            <LeftSideBar></LeftSideBar>
            <ManageReviews></ManageReviews>
        </div >
    );
};

export default Dashboard;