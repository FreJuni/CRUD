import { json, redirect, useActionData } from 'react-router-dom'
import Authentication from '../coponents/Authentication'

const Auth = () => {
    const err = useActionData();
  return (
    <>
      <Authentication err={err} />
    </>
  )
}

export default Auth

export const action = async ({request,params}) => {
    const searhParam = new URL(request.url).searchParams;
    const mode = searhParam.get("mode")|| "login";

    if(mode !== "login" && mode !== "signup") {
        return request;
    }

    const data = await request.formData();

    const authData = {
        email : data.get("email"),
        password : data.get("password")
    }
    
    const response = await fetch(`http://localhost:8080/${mode}`, {
        method : request.method,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(authData)
    });

    if(response.status === 422 || response.status === 401) {
        return response;
    }

    if(!response.ok) {
        throw json({message : "Error occur in  authenticaion."})
    }

    const getData  = await response.json();
    
    const token = getData.token;
    localStorage.setItem("token", token); // do not need to convert stringify

    const expDate = new Date();
    expDate.setHours(expDate.getHours() + 1);
    localStorage.setItem("exp", expDate.toISOString());

    return redirect("/");

}