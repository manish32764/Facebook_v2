import React from 'react';
import NineByNinePhotosOrFriend from './../component/NineByNinePhotosOrFriend';
import Post from './../component/Post';
import MiddleBar from './../component/MiddleBar';

const TimelinePage = () => {
    return (
        <div class="main-container-timeline">
            <div class="main-center-timeline">
                <MiddleBar/>
                <div class="main-center-lower main-center-lower-active">
                    <div class="main-left-right-wrapper">
                        <div class="main-center-left-side">
                            <NineByNinePhotosOrFriend />
                            <NineByNinePhotosOrFriend />
                        </div>
                        <div class="main-center-right-side">
                            <Post classNameSuffix ='-timeline'/>
                            <Post classNameSuffix ='-timeline'/>
                            <Post classNameSuffix ='-timeline'/>
                            <Post classNameSuffix ='-timeline'/>
                            <Post classNameSuffix ='-timeline'/>
                            <Post classNameSuffix ='-timeline'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;