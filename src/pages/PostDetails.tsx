import { useParams } from "react-router-dom";
import { posts } from "../data/post";


const PostDetails =()=>{

 const {id}=useParams();

 const post=posts.find(
   p=>p.id===Number(id)
 );


 if(!post)
  return <h1>Post Not Found</h1>


 return(
  <div>

    <img
      src={post.image}
      className="rounded-xl max-w-xl"
    />

    <h1 className="text-3xl font-bold mt-4">
      {post.caption}
    </h1>

    <p>
      Posted by {post.user}
    </p>

    <p>
      ❤️ {post.likes} Likes
    </p>

    <p>
      💬 {post.comments} Comments
    </p>

  </div>
 );

}

export default PostDetails;