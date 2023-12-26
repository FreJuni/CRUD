import uuid from "react-uuid";
import PostForm from "../coponents/PostForm"
import { useActionData,json,redirect } from "react-router-dom";

const CreatePost = () => {
  const data = useActionData();
   
  let errArray = [];

  if(data && data.errors && (
      Object.values(data.errors).map((err) => {
          return errArray.push(err);
      })
  ));
  return (
    <>
      <PostForm button={"Post"} errArray={errArray} method={"post"} title={"Create your post."} />
    </>
  )
}

export default CreatePost;



export const action = async ({request,params}) => {
  const data = await request.formData();

  const postData = {
      id : uuid(),
      title : data.get("title"),
      image : data.get("image"),
      description : data.get("description"),
      date : data.get("date"),
  }
  const response = await fetch(`http://localhost:8080/posts`,{
      method : "POST",
      headers : {
          "Content-Type" : "application/json"
      },
      body : JSON.stringify(postData),
  });

  if(response.status === 422) {
      return response;
  }

  if(!response.ok) {
      throw json({message : "Error occur in create form."})
  }

  return redirect("/")

}