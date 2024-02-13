import axios from 'axios';
import { useState } from 'react';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const {setUser} = useGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:5000/api/v1/users/login";

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {username, password});
      const user = response.data.user;
      const data = response.data;
      setUser(user);
      window.localStorage.setItem('data', JSON.stringify(data));
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
    
  }
  return (
    <section>
      <form className='userForm' onSubmit={handleLogin}>
        <h2>LOGIN</h2>
        <input type="text" placeholder='username' vale={username} onChange={(e)=>setUsername(e.target.value)} required/>
        <input type="text" placeholder='password' vale={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

export default LoginForm