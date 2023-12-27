import {Link, NavLink, useRouteLoaderData} from 'react-router-dom'

const Nav = () => {

  const token = useRouteLoaderData("root");
 
  return (
    <nav className='nav-con'>
        <Link to="/">
          <h1>BLOGS.</h1>
        </Link>
        <div>
            <NavLink to="/">Post</NavLink>
            {token && (<NavLink to="/create-post/">Create Post</NavLink>)}
            {!token && (<NavLink to="/auth?mode=login">Login</NavLink>)}
            {token && ( <NavLink to="/logout">Logout</NavLink>)}
        </div>
    </nav>
  )
}

export default Nav