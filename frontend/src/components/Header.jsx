import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const [isWriter, setIsWriter] = useState(true);

  return (
    <div className='header'>
      <h2><Link to="/">Blog</Link></h2>
      <nav>
        {
          isLogin
          ?
          <>
              <p>User name</p>
              {isWriter && <Link to="/createPost">New Post</Link>}
              <button className='logoutBtn'>Logout</button>
          </>
          :
          <>
            <Link to="/login"><button className='loginBtn'>Login</button></Link>
            <Link to="/register"><button className='registerBtn'>Register</button></Link>
          </>
        }
      </nav>
    </div>
  )
}

export default Header