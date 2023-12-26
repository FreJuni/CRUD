import { useLoaderData,json } from "react-router-dom"
import SinglePost from '../coponents/SingleItem';

const Post = () => {
    const data = useLoaderData();

  return (
    <div className="postItem-container ">
        {
            data.map((item) => {
                return <SinglePost key={item.id} item={item} />
            })
        }
    </div>
  )
}

export default Post

export const loader = async () => {
    const response = await fetch(`http://localhost:8080/posts`);
    if(!response.ok) {
        throw json({message : "Error occur in fetching data"}, {status : 500})
    }
    const data = await response.json();
    return data.posts;
}