import './rightbar.scss';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Remove, Add} from "@material-ui/icons";

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
      currentUser.followings.includes(user?._id)
  );
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        console.log(user)
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      getFriends();
    }
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };


  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday">
          <img src={PF + 'gift.png'} alt="gift" className="birthday__image" />
          <span className="birthday__text">
            <span className="rightbar__user-name">Dinosaur Rex</span> and 3
            other friends has a birthday today.
          </span>
        </div>
        <img src={`${PF}/ad.png`} alt="adimage" className="rightbar__ad" />
        <h4 className="rightbar__title">Online Frainds</h4>
        <ul className="rightbar__friend-list p-0 m-0">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
            <button className="btn btn-primary mb-3 btn-sm" onClick={handleClick}>
              {followed ? "Unfollow" : "Follow"}
              {followed ? <Remove /> : <Add />}
            </button>
        )}
        <h4 className="rightbar__title">User info</h4>
        <div className="rightbar__info">
          <div className="rightbar__info-item">
            <span className="rightbar__info-key text-black-50">City: </span>
            <span className="rightbar__info-value">{user.city}</span>
          </div>
          <div className="rightbar__info-item">
            <span className="rightbar__info-key text-black-50">From: </span>
            <span className="rightbar__info-value">{user.from}</span>
          </div>
          <div className="rightbar__info-item">
            <span className="rightbar__info-key text-black-50">
              Relationship:
            </span>
            <span className="rightbar__info-value">{user.relationship === 1 ? 'Single' : 'Married'}</span>
          </div>
        </div>

        <h4 className="rightbar__title">User friends</h4>
        <div className="rightbar__followings d-flex flex-wrap row">

          {friends.map((friend) => (
              <Link
                  to={"/profile/" + friend.username}
                  style={{ textDecoration: "none" }}
                  key={friend._id}
              >
                <div className="rightbar__following d-flex flex-column col-4 mb-3">
                  <img
                      src={
                        friend?.profilePicture
                            ? PF + friend?.profilePicture
                            : PF + "person/noAvatar.png"
                      }
                      alt="person"
                      className="rightbar__following-image"
                  />
                  <span className="rightbar__following-name">{friend?.username}</span>
                </div>
              </Link>
          ))}

        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar__wrap d-flex align-items-center">
        <div className="">
          {user ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    </div>
  );
}
