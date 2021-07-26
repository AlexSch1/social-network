import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel
} from '@material-ui/icons';
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import './share.scss';
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const submitHandler = async (e) => {
    console.log('+++')
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share w-100">
      <div className="p-3">
        <div className="d-flex align-items-center">
          <img
              src={
                user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
              }
            alt="person"
            className="share__image"
          />
          <input
            type="text"
            ref={desc}
            className="form-control"
            placeholder="What's in your mind "
          />
        </div>
        <hr />
        {file && (
            <div className="share__img-container">
              <img className="share__img" src={URL.createObjectURL(file)} alt="" />
              <Cancel className="share__cancel-img" onClick={() => setFile(null)} />
            </div>
        )}
        <form className="d-flex justify-content-between" onSubmit={submitHandler}>
          <div className="share__options d-flex">
            <label htmlFor="file" className="share__option d-flex align-items-center">
                <PermMedia htmlColor="tomato" className="share__icon" />
                <span className="share__option-text">Photo or Video</span>

                <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setFile(e.target.files[0])}
                />

            </label>
            <div className="share__option d-flex align-items-center">
              <span>
                <Label htmlColor="tomato" className="share__icon" />
                <span className="share__option-text">Label</span>
              </span>
            </div>
            <div className="share__option d-flex align-items-center">
              <span>
                <Room htmlColor="tomato" className="share__icon" />
                <span className="share__option-text">Room</span>
              </span>
            </div>
            <div className="share__option d-flex align-items-center">
              <span>
                <EmojiEmotions htmlColor="tomato" className="share__icon" />
                <span className="share__option-text">EmojiEmotions</span>
              </span>
            </div>
          </div>
          <button className="btn btn-light" type="submit">
            Share
          </button>
        </form>

        {/*{(!username || username === user.username) && <Share />}*/}
        {/*{posts.map((p) => (*/}
        {/*    <Post key={p._id} post={p} />*/}
        {/*))}*/}
      </div>
    </div>
  );
}
