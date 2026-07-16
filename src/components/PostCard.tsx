import { useState } from "react";
import { Link } from "react-router-dom";

interface postProps 
{
  id: number;
  user: string;
  category: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
}

const PostCard = ({ post }: { post: postProps }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">

      <img
        src={post.image}
        className="h-60 w-full object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold">
          {post.user}
        </h2>

        <p className="text-sm text-gray-500">
          {post.category}
        </p>

        <p className="my-3">
          {post.caption}
        </p>


        <div className="flex gap-4">

          <button
            onClick={() => setLiked(!liked)}
            className={
              liked
              ? "text-red-600"
              : "text-gray-600"
            }
          >
            ❤️ {post.likes + (liked ? 1 : 0)}
          </button>


          <span>
            💬 {post.comments}
          </span>


          <button
            onClick={() => setSaved(!saved)}
          >
            {saved ? "🔖 Saved" : "Save"}
          </button>

        </div>


        <Link
          to={`/community/${post.id}`}
          className="inline-block mt-4 text-blue-600"
        >
          View Post
        </Link>

      </div>

    </div>
  );
};

export default PostCard;