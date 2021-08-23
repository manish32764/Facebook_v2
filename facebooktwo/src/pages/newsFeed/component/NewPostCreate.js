import React from 'react';

const NewPostCreate = () => {
    return (
        <div className="new-post">
            <div className="new-post-top-row">
                <img src="https://picsum.photos/301" className="small-circle-image" />
                <input type="text" className="new-post-text-enter" placeholder="What's on your mind" />
            </div>

            <div className="fading_line"></div>

            <div className="like-comment-share-row">
                <div className="like-comment-share-row-item">Photo</div>
                <div className="like-comment-share-row-item">Tag Friend</div>
                <div className="like-comment-share-row-item">Feeling/Activity</div>
            </div>
        </div>
    );
};

export default NewPostCreate;