import './post.scss';
import { MoreVert } from '@material-ui/icons';
import {useContext, useEffect, useState} from 'react';
import axios from "axios";
import { format } from 'timeago.js';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

export default function Post({ post }) {
  const [user, setUser] = useState(null);
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const { user: currentUser } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLike(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);


  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);

  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
    // const res = await axios.get(`users?userId=${post.userId}`);
    // setUser(res.data);
  }, [post.userId]);

  return (
    <div className="post">
      <div className="p-3">
        <div className="post__top d-flex align-items-center justify-content-between">
          <div className="post__top-left d-flex align-items-center">
            <Link to={`profile/${user?.username}`}>
              <img
                  src={
                    user?.profilePicture
                        ? PF + user?.profilePicture
                        : PF + "person/noAvatar.png"
                  }
                  alt="noAvatar"
                  className="post__image-user"
              />
              <span className="post__username">
              {user?.username}
            </span>
            </Link>

            <span className="post__date">{format(post.createdAt)}</span>
          </div>
          <div className="post__top-right">
            <MoreVert className="post__action" />
          </div>
        </div>
        <div className="post__center my-3">
          <span className="post__text">{post?.desc}</span>
          <img src={PF + post?.img} className="post__image" alt="post" />
        </div>
        <div className="post__bottom d-flex align-items-center justify-content-between">
          <div className="post__bottom-left d-flex align-items-center">
            <img
              src={PF + 'like.png'}
              alt="like"
              className="post__action-btn"
            />
            <img
              src={PF + 'heart.png'}
              alt="heart"
              className="post__action-btn"
              onClick={likeHandler}
            />
            <span className="post__like-counter text-black-50">
              {like} people like it
            </span>
          </div>
          <div className="post__bottom-right text-black-50">
            <div className="post__comment-text">{post?.comment || 0} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
