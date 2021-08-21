import React from 'react';

const TopBlueBar = () => {
  return (
    <header className="top-fixedBlueContainer">
        <div class="top-left">
            <div src="icons/email-svgrepo-com.svg" className="top-center-svg-icon">Facebook</div>
            <input type="text" placeholder="Search Here" class="search"/>
        </div>

      <div className="top-middle">
        <div src="icons/white_house-outline-svgrepo-com.svg" className="top-center-svg-icon">Home  </div>
        <div src="icons/video-svgrepo-com.svg" className="top-center-svg-icon"> Video    </div>
        <div src="icons/shopping-svgrepo-com.svg" className="top-center-svg-icon"> MarketPlace    </div>
        <div src="icons/group-svgrepo-com.svg" className="top-center-svg-icon"> Group    </div>
        <div src="icons/xbox-gamepad-svgrepo-com.svg" className="top-center-svg-icon"> Games    </div>
      </div>

      <div className="top-right">
        <div className="myself">MySelf</div>
        <div src="icons/email-svgrepo-com.svg" className="top-center-svg-icon">  Message    </div>
        <div src="icons/bell-outline-interface-symbol-svgrepo-com.svg" className="top-center-svg-icon">    Notification    </div>
        <div src="icons/logout-svgrepo-com.svg" className="top-center-svg-icon">    Logout    </div>
      </div>

    </header>
  );
};

export default TopBlueBar;