import './online.scss';

export default function Online({ user }) {
  return (
    <li className="online d-flex">
      <div className="online__profile-image-container">
        <img
          src={'/assets/' + user.profilePicture}
          alt=""
          className="online__profile-image"
        />
        <span className="online__dot"></span>
      </div>
      <span className="online__user-name">{user.username}</span>
    </li>
  );
}
