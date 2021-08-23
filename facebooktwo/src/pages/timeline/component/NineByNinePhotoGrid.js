import React from 'react';

const NineByNinePhotoGrid = () => {
    return (
        <div class="photos">
            <div class="row">
                <span class="photos-text">Photos</span>
                <span class="see-all-photos-text">See All Photos</span>
            </div>
            <div class="nineByNineGrid">
                <div class="thumbnailImage"><img src="https://picsum.photos/200" class="img-fluid" /></div>
                <div class="thumbnailImage"><img src="https://picsum.photos/210" class="img-fluid" /></div>
                <div class="thumbnailImage"><img src="https://picsum.photos/220" class="img-fluid" /></div>
                <div class="thumbnailImage"><img src="https://picsum.photos/221" class="img-fluid" /></div>
                <div class="thumbnailImage"><img src="https://picsum.photos/222" class="img-fluid" /></div>
                <div class="thumbnailImage"><img src="https://picsum.photos/223" class="img-fluid" /></div>
                <div class="thumbnailImage"><img src="https://picsum.photos/224" class="img-fluid" /></div>
                <div class="thumbnailImage"><img src="https://picsum.photos/225" class="img-fluid" /></div>
                <div class="thumbnailImage"><img src="https://picsum.photos/226" class="img-fluid" /></div>
            </div>
        </div>
    );
};

export default NineByNinePhotoGrid;