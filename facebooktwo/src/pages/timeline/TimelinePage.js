import React from 'react';
import NineByNinePhotoGrid from './component/NineByNinePhotoGrid';
import NineByNineFriendGrid from './component/NineByNineFriendGrid';
import CoverPhotoAndNavigationMenu from './component/CoverPhotoAndNavigationMenu';
import Post from './../../component/Post';

const TimelinePage = () => {
    return (
        <div class="main-container-timeline">
            <div class="main-center-timeline">
                <CoverPhotoAndNavigationMenu/>
                <div class="main-center-lower main-center-lower-active">
                    <div class="main-left-right-wrapper">
                        <div class="main-center-left-side">
                            <NineByNinePhotoGrid/>
                            <NineByNineFriendGrid/>
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