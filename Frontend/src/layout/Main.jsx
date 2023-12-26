import Nav from "../coponents/Nav"
import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div className="main-con">
        <Nav />
        <Outlet />
    </div>
  )
}

export default Main