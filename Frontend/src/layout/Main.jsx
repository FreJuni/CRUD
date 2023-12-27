import { useEffect } from "react"
import Nav from "../coponents/Nav"
import { Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom"
import { expTime } from "../util/getToken";

const Main = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    if(!token) {
      return;
    }

    if(token === "EXP_TOKEN") {
      return submit(null,{action : "/logout",method : "POST"})
    }

    const duration = expTime();

    setTimeout(() => {
      return submit(null,{action : "/logout",method : "POST"})
    },[duration])


  }, [token,submit])

  return (
    <div className="main-con">
        <Nav />
        {
          isLoading ? (
            <div className="loading-con">
              <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          ) : (<Outlet />)
        }
    </div>
  )
}

export default Main