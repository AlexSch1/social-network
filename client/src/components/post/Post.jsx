import "./post.scss";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="post">
      <div className="p-3">
        <div className="post__top d-flex align-items-center justify-content-between">
          <div className="post__top-left d-flex align-items-center">
            <img
              src={
                "/assets/" +
                Users.filter((u) => u.id === post.userId)[0]?.profilePicture
              }
              alt="image"
              className="post__image-user"
            />
            <span className="post__username">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="post__date">{post.date}</span>
          </div>
          <div className="post__top-right">
            <MoreVert className="post__action" />
          </div>
        </div>
        <div className="post__center my-3">
          <span className="post__text">{post?.desc}</span>
          <img
            src={"/assets/" + post?.photo}
            alt="image"
            className="post__image"
          />
        </div>
        <div className="post__bottom d-flex align-items-center justify-content-between">
          <div className="post__bottom-left d-flex align-items-center">
            <img
              src="/assets/like.png"
              alt="image"
              className="post__action-btn"
              onClick={likeHandler}
            />
            <img
              src="/assets/heart.png"
              alt="image"
              className="post__action-btn"
            />
            <span className="post__like-counter text-black-50">
              {like} people like it
            </span>
          </div>
          <div className="post__bottom-right text-black-50">
            <div className="post__comment-text">{post?.comment} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
