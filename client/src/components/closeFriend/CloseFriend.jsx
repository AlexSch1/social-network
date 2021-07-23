import "./closeFriend.scss";

export default function CloseFriend({ user }) {
  return (
    <li className="close-friend d-flex">
      <div className="online__profile-image-container">
        <img
          src={"/assets/" + user.profilePicture}
          alt=""
          className="close-friend__image"
        />
        <span className="close-friend__name">{user.username}</span>
      </div>
    </li>
  );
}
