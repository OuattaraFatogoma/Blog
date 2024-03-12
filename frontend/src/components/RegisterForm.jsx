import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';
import axios from 'axios';

function RegisterForm() {
  const {setUser} = useGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("reader");
  const navigate = useNavigate();
  const url = "https://api-petitblogger.onrender.com/api/v1/users/register";

  const handleRegistration = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {username, password, email, role});
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
      <form className='userForm' onSubmit={handleRegistration}>
        <h2>REGISTER</h2>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <select name='role' value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="reader">Reader</option>
          <option value="writer">Writer</option>
        </select>
        <button type="submit" className='registerBtn'>Register</button>
      </form>
    </section>
  )
}

export default RegisterForm