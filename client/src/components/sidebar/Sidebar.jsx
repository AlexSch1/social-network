import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons';

import './sidebar.scss';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="p-3">
        <ul className="p-0 sidebar__list">
          <li className="sidebar__list-item">
            <RssFeed className="sidebar__icon" />
            <span className="sidebar__list-text">Feed</span>
          </li>
          <li className="sidebar__list-item">
            <Chat className="sidebar__icon" />
            <span className="sidebar__list-text">Chats</span>
          </li>
          <li className="sidebar__list-item">
            <PlayCircleFilledOutlined className="sidebar__icon" />
            <span className="sidebar__list-text">Videos</span>
          </li>
          <li className="sidebar__list-item">
            <Group className="sidebar__icon" />
            <span className="sidebar__list-text">Groups</span>
          </li>
          <li className="sidebar__list-item">
            <Bookmark className="sidebar__icon" />
            <span className="sidebar__list-text">Bookmarks</span>
          </li>
          <li className="sidebar__list-item">
            <HelpOutline className="sidebar__icon" />
            <span className="sidebar__list-text">Questions</span>
          </li>
          <li className="sidebar__list-item">
            <WorkOutline className="sidebar__icon" />
            <span className="sidebar__list-text">Jobs</span>
          </li>
          <li className="sidebar__list-item">
            <Event className="sidebar__icon" />
            <span className="sidebar__list-text">Events</span>
          </li>
          <li className="sidebar__list-item">
            <School className="sidebar__icon" />
            <span className="sidebar__list-text">Courses</span>
          </li>
        </ul>
        <button className="btn btn-light">Show More</button>
        <hr />
        <ul className="p-0">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
