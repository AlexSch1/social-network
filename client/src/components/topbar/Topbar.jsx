import './topbar.scss';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar  position-sticky">
            <div className="container d-flex align-items-center">

            <div className="topbar__left d-flex align-items-center">
                <img src="https://img.icons8.com/plasticine/50/000000/dinosaur.png" className="topbar__logo-img"/>
                <span className="topbar__logo text-white">
                    Dinosaur
                </span>
            </div>
            <div className="topbar__center">
                <div className="topbar__searchbar w-100 d-flex align-items-center">
                    <Search className="topbar__searchbar-icon" />
                    <input className="topbar__searchbar-input border-0" type="text" placeholder="Search for..."/>
                </div>
            </div>
            <div className="topbar__right d-flex justify-content-around align-items-center text-white">
                <div className="topbar__links">
                    <span className="topbar__link mx-2">
                    Homepage
                </span>
                    <span className="topbar__link mx-2">
                    Timeline
                </span>
                </div>

                <div className="topbar__icons d-flex align-items-center">
                    <span className="topbar__icon mx-2 position-relative">
                        <Person/>
                        <span className="topbar__icon-badge">
                            1
                        </span>
                    </span>

                    <span className="topbar__icon mx-2 position-relative">
                        <Chat/>
                        <span className="topbar__icon-badge">
                            1
                        </span>
                    </span>

                    <span className="topbar__icon mx-2 position-relative">
                        <Notifications/>
                        <span className="topbar__icon-badge">
                            1
                        </span>
                    </span>
                </div>
                <img src="/assets/person/1.jpeg" alt="image" className="topbar__image"/>
            </div>
            </div>

        </div>
    );
};
