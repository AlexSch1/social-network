import './rightbar.scss';
import { Users } from '../../dummyData';
import Online from "../online/Online";

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthday">
                    <img src="/assets/gift.png" alt="image" className="birthday__image"/>
                    <span className="birthday__text">
                            <span className="rightbar__user-name">Dinosaur Rex</span> and 3 other friends has a birthday today.
                        </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbar__ad"/>
                <h4 className="rightbar__title">
                    Online Frainds
                </h4>
                <ul className="rightbar__friend-list p-0 m-0">
                    { Users.map(user => <Online key={user.id} user={user} />) }
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbar__title">User info</h4>
                <div className="rightbar__info">
                    <div className="rightbar__info-item">
                        <span className="rightbar__info-key text-black-50">City: </span>
                        <span className="rightbar__info-value">NY</span>
                    </div>
                    <div className="rightbar__info-item">
                        <span className="rightbar__info-key text-black-50">From: </span>
                        <span className="rightbar__info-value">Madrid</span>
                    </div>
                    <div className="rightbar__info-item">
                        <span className="rightbar__info-key text-black-50">Relationship: </span>
                        <span className="rightbar__info-value">Single</span>
                    </div>
                </div>

                <h4 className="rightbar__title">User friends</h4>
                <div className="rightbar__followings d-flex flex-wrap row">
                    <div className="rightbar__following d-flex flex-column col-4 mb-3">
                        <img src="/assets/person/4.jpeg" alt="image" className="rightbar__following-image"/>
                        <span className="rightbar__following-name">Tyrannosaurus Jim</span>
                    </div>
                    <div className="rightbar__following d-flex flex-column col-4 mb-3">
                        <img src="/assets/person/4.jpeg" alt="image" className="rightbar__following-image"/>
                        <span className="rightbar__following-name">Tyrannosaurus Jim</span>
                    </div>
                    <div className="rightbar__following d-flex flex-column col-4 mb-3">
                        <img src="/assets/person/4.jpeg" alt="image" className="rightbar__following-image"/>
                        <span className="rightbar__following-name">Tyrannosaurus Jim</span>
                    </div>
                    <div className="rightbar__following d-flex flex-column col-4 mb-3">
                        <img src="/assets/person/4.jpeg" alt="image" className="rightbar__following-image"/>
                        <span className="rightbar__following-name">Tyrannosaurus Jim</span>
                    </div>
                    <div className="rightbar__following d-flex flex-column col-4 mb-3">
                        <img src="/assets/person/4.jpeg" alt="image" className="rightbar__following-image"/>
                        <span className="rightbar__following-name">Tyrannosaurus Jim</span>
                    </div>


                </div>

            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbar__wrap d-flex align-items-center">
                <div className="">
                    { profile ? <ProfileRightbar/>  : <HomeRightbar/> }
                </div>
            </div>
        </div>
    );
};
