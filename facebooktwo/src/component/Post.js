import React from 'react';

const Post = ({classNameSuffix}) => {
    return (
        <div className={`post${classNameSuffix}`}>
            <div className={`post-row${classNameSuffix}`}>
                <img src="https://picsum.photos/302" className="small-circle-image" />
                <div className="text-beside-circle-image">Harvard Business Review</div>
            </div>

            <div className="text-of-post"><span>Catastrophizing is a common reaction to uncertain situations where we tend to overestimate the likelihood or consequences of our worst fears.</span></div>

            <img src="https://picsum.photos/606" className="image-in-post" />
            <div className="fading_line"></div>
            <div className="like-comment-share-row">
                <div className="like-comment-share-row-item">Like</div>
                <div className="like-comment-share-row-item">Comment</div>
                <div className="like-comment-share-row-item">Share</div>
            </div>
        </div>
    );
};

export default Post;