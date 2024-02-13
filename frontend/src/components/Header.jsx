import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';


function Header() {
  const {user, setUser} = useGlobalContext();
  const [isLogin, setIsLogin] = useState(false);
  const [isWriter, setIsWriter] = useState(false);
  
  useEffect(()=>{
    setIsLogin(user ? true : false);
    setIsWriter(user ? user.role==="writer" ? true : false : false);
  }, [user, setUser])

  const handleLogout = async () => {
    setUser(null);
    window.localStorage.removeItem("data");
  }


  return (
    <div className='header'>
      <h2><Link to="/">Blog</Link></h2>
      <nav>
        {
          isLogin
          ?
          <>
              <p>{user && user.username}</p>
              {isWriter && <Link to="/createPost">New Post</Link>}
              <button className='logoutBtn' onClick={handleLogout}>Logout</button>
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