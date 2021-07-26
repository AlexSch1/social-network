import './closeFriend.scss';

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="close-friend d-flex">
      <div className="online__profile-image-container">
        <img
          src={PF + user.profilePicture}
          alt="profilePicture"
          className="close-friend__image"
        />
        <span className="close-friend__name">{user.username}</span>
      </div>
    </li>
  );
}
