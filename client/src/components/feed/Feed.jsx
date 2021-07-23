import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
