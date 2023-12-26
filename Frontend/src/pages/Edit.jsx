import uuid from "react-uuid";
import PostForm from "../coponents/PostForm"
import { json, redirect, useActionData, useLoaderData } from "react-router-dom";


const Edit = () => {
  const post = useLoaderData();
  const data = useActionData();
   
  let errArray = [];

  if(data && data.errors && (
      Object.values(data.errors).map((err) => {
          return errArray.push(err);
      })
  ));

  return (
    <>
      <PostForm method={"patch"} errArray={errArray} post={post} title={"Edit Post"} button={"Edit"} />
    </>
  )
}

export default Edit;

export const loader = async ({request,params}) => {
  const id = params.id;

  const response = await fetch(`http://localhost:8080/posts/${id}`);

  if(!response.ok) {
    throw json({message : "Error occur in fetching data."})
  }

  const data = await response.json();

  return data.post;
}

export const action = async ({request,params}) => {
  const id = params.id;
  const data = await request.formData();

  const editData = {
    id : uuid(),
    title : data.get("title"),
    image : data.get("image"),
    description : data.get("description"),
    date : data.get("date"),
  }

  const response = await fetch(`http://localhost:8080/posts/${id}`, {
    method : request.method,
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(editData),
  });

  if(!response.ok) {
    return response;
  }

  if(!response.ok) {
    throw json({message : "Error occur in edit features."})
  }

  return redirect("/")

}
