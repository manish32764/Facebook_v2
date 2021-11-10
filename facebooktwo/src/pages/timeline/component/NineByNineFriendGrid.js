import React from 'react';

const NineByNineFriendGrid = () => {
    return (
        <div class="friend-photos">
            <div class="row">
                <span class="photos-text">Friends</span>
                <span class="see-all-photos-text">See All Friends</span>
            </div>
            <div class="nineByNineGrid">
                <div class="thumbnailImage"><img src="https://picsum.photos/200" class="img-fluid" />Manish</div>
                <div class="thumbnailImage"><img src="https://picsum.photos/210" class="img-fluid" />Ajay</div>
                <div class="thumbnailImage"><img src="https://picsum.photos/220" class="img-fluid" />Amit</div>
                <div class="thumbnailImage"><img src="https://picsum.photos/221" class="img-fluid" />Balveer</div>
                <div class="thumbnailImage"><img src="https://picsum.photos/222" class="img-fluid" />Ranveer</div>
                <div class="thumbnailImage"><img src="https://picsum.photos/223" class="img-fluid" />Neeraj</div>
                <div class="thumbnailImage"><img src="https://picsum.photos/224" class="img-fluid" />Jitesh</div>
                <div class="thumbnailImage"><img src="https://picsum.photos/225" class="img-fluid" />Bunty</div>
                <div class="thumbnailImage"><img src="https://picsum.photos/226" class="img-fluid" />Burdak</div>
            </div>
        </div>
    );
};

export default NineByNineFriendGrid;