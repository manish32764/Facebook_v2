import React from 'react';
import NewPostCreate from './NewPostCreate';
import Post from './../../../component/Post';

const NewsFeed = () => {

    return (
        <div className="main-container-newsFeed">
            <div className="main-center-newsFeed">
                <NewPostCreate />
                <Post classNameSuffix =''/>
                <Post classNameSuffix =''/>
            </div>
            <div className="main-right">mainRight</div>
        </div>
    );
};

export default NewsFeed;