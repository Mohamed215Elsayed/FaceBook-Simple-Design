import React from 'react';
import Online from "../../online/Online";
import { Users } from "../../../dummyData";
import './HomeRightbar.css';
function HomeRightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Mohammad</b> and <b>6 other friends</b> have a birhday today.
          </span>
        </div>

        <img className="rightbarAd" src="assets/ad.png" alt="" />

        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
        {/*  ***********/}
      </div>
    </div>
  );
}

export default HomeRightbar;
