import './profile.scss';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.scss';
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(null);
  const username = useParams().username;


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      console.log(res.data)
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="container profile">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="profile__cover">
                  <img
                    src={user?.coverPicture || PF + "person/noCover.png" }
                    alt="noCover"
                    className="profile__image"
                  />
                  <img
                      src={user?.profilePicture || PF + "person/noAvatar.png" }
                    alt="noAvatar"
                    className="profile__image-user"
                  />
                </div>
                <div className="profile__info d-flex align-items-center flex-column">
                  <h4 className="profile__info-name">{user?.username}</h4>
                  <span className="profile__info-desc">
                    { user?.desc }
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <Feed username={username} />
              </div>
              <div className="col">
                <Rightbar user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
