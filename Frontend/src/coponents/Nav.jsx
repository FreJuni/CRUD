import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav-con'>
        <Link to="/">
          <h1>BLOGS.</h1>
        </Link>
        <div>
            <NavLink to="/">Post</NavLink>
            <NavLink to="/create-post/">Create Post</NavLink>
        </div>
    </nav>
  )
}

export default Nav