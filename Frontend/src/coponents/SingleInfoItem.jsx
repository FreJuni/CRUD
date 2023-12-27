import { Link, useLoaderData,useSubmit,redirect, json, useRouteLoaderData } from "react-router-dom"
import { getToken } from "../util/getToken";

const SingleInfoItem = () => {
    const data = useLoaderData();
    const submit = useSubmit();
    const isToken = useRouteLoaderData("root");

    const {id,date,title,image,description} = data;

    const deleteHandler = () => {
        
        const isTrue = window.confirm("Are you sure");

        if(isTrue) {
            submit(null, { method : "DELETE"});
        }

    }


  return (
    <div className="single-container">
        <h3>{title}</h3>
        <p>{date}</p>
        <img src={image} alt={title} />
        <p>.{description}</p>
        <div className="btn-con">
           {
            isToken && (
            <>
                <Link to={`/edit-post/${id}`}>
                <p className="btn edit">Edit</p>
                </Link>
                <p className="btn delete" onClick={deleteHandler} > Delete</p>
            </>)
           }
        </div>
    </div>
  )
}

export default SingleInfoItem

export const loader = async ({request,params}) => {
    const id = params.id;
    const response = await fetch(`http://localhost:8080/posts/${id}`);
    if(!response.ok) {
        // code error
    }
    const data = await response.json();
    return data.post;
}

export const action = async ({request,params}) => {
    const id = params.id;
    const token = getToken();
    const response = await fetch(`http://localhost:8080/posts/${id}`, {
        method : request.method,
        headers : {
            Authorization : "Bearer " + token,
        }
    })

    if(!response.ok) {
        throw json({message : "Error occur in your delete features."})
    }

    return redirect("/");
}



