import './profile.scss';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import { Users } from '../../dummyData';
import './profile.scss';

export default function Profile() {
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
                    src="/assets/post/3.jpeg"
                    alt="image"
                    className="profile__image"
                  />
                  <img
                    src="/assets/person/12.jpeg"
                    alt="image"
                    className="profile__image-user"
                  />
                </div>
                <div className="profile__info d-flex align-items-center flex-column">
                  <h4 className="profile__info-name">T-Rex</h4>
                  <span className="profile__info-desc">
                    Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <Feed />
              </div>
              <div className="col">
                <Rightbar profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
