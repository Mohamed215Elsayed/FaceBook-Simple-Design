import React from 'react';
import './rightbar.css';
import HomeRightbar from './HomeRightbar/HomeRightbar';
import ProfileRightbar from './ProfileRightbar/ProfileRightbar';
function Rightbar({ profile }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* <HomeRightbar />
        <ProfileRightbar /> */}
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
