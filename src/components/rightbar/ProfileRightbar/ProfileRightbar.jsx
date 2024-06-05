import React from 'react';
import './ProfileRightbar.css';
function ProfileRightbar() {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Tanta</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Kafr el-zayat</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>

      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/person/2.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Mohammad Adel</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/3.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Nasser AlQattami</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/4.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName"> Roody</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/5.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Solya</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/10.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Roony</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/6.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">Waffa</span>
        </div>
      </div>
    </>
  );
}

export default ProfileRightbar;
