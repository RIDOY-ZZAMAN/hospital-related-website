import React from 'react';
import "./LeftSideBar.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";



const LeftSideBar = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className='leftSideBar'>
            <Link to={`${url}`}>Manage Review</Link>


        </div>
    );
};

export default LeftSideBar;