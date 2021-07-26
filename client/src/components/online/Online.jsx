import './online.scss';

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="online d-flex">
      <div className="online__profile-image-container">
        <img
          src={PF + user.profilePicture}
          alt="profilePicture"
          className="online__profile-image"
        />
        <span className="online__dot"></span>
      </div>
      <span className="online__user-name">{user.username}</span>
    </li>
  );
}
