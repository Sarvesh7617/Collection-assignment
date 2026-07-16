import { useEffect, useMemo, useState } from "react";
import PostCard from "../components/PostCard";
import { posts } from "../data/post";
import { AlertCircle, LoaderCircle } from "lucide-react";


const Community = () => {

  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories=[
    "All",
    ...new Set(posts.map(p=>p.category))
  ];


  const filteredPosts = useMemo(()=>{

    let data=[...posts];


    data=data.filter(post=>
      post.caption
      .toLowerCase()
      .includes(search.toLowerCase())
    );


    if(category!=="All")
      data=data.filter(post=>post.category===category);


    return data;

  },[search,category]);

  useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    } 
    catch {
      setError("Posts load nahi ho paaye");
      setLoading(false);
    }
  }, []);


  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <LoaderCircle
          className="h-10 w-10 animate-spin text-blue-600"
        />
      </div>
    );


  if (error)
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-red-300 bg-red-50 p-6 text-red-600">
        <AlertCircle size={40} />

        <h2 className="font-bold text-lg">
          Error
        </h2>

        <p>{error}</p>
      </div>
    );


  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Community Feed
      </h1>


      <div className="flex gap-4 mb-6">

        <input
          className="border rounded p-2 flex-1"
          placeholder="Search posts..."
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
        />


        <select
          className="border rounded p-2"
          value={category}
          onChange={(e)=>
            setCategory(e.target.value)
          }
        >

          {categories.map(cat=>(
            <option key={cat}>
              {cat}
            </option>
          ))}

        </select>

      </div>



      {
        filteredPosts.length===0 ?

        <div className="border p-10 text-center rounded">
          No posts found
        </div>

        :

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            filteredPosts.map(post=>
              <PostCard
                key={post.id}
                post={post}
              />
            )
          }

        </div>
      }


    </div>

  );
};


export default Community;