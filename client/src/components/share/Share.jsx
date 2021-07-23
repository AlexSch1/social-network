import { PermMedia,
    Label,
    Room,
    EmojiEmotions,
    Cancel, } from '@material-ui/icons';
import "./share.scss";

export default function Share() {

    return (
        <div className="share w-100">
            <div className="p-3">
                <div className="d-flex align-items-center">
                    <img src="/assets/person/1.jpeg" alt="image" className="share__image"/>
                    <input type="text" className="form-control" placeholder="What's in your mind "/>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                    <div className="share__options d-flex">
                        <div className="share__option d-flex align-items-center">
                            <span>
                                <PermMedia htmlColor="tomato" className="share__icon" />
                                <span className="share__option-text">Photo or Video</span>
                            </span>
                        </div>
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
                </div>


                {/*{(!username || username === user.username) && <Share />}*/}
                {/*{posts.map((p) => (*/}
                {/*    <Post key={p._id} post={p} />*/}
                {/*))}*/}
            </div>
        </div>
    );
}
