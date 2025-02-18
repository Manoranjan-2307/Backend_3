import {React,useState} from 'react'
import UserDetails from '../components/UserDetails'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'

export default function LoginPage() {

    const {user, login, logout }=UserDetails();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const verifyLogin=(e)=>{
        e.preventDefault();
        login({username});
        navigate('/home');
    }
    return (
      <div className="login-page">
          <h1>Login Page</h1>
          <form onSubmit={verifyLogin}>
              <label>Username:</label>
              <input type="email" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <br/>
              <label>Password: </label>
              <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <br/>
              <button type="submit">Login</button>
          </form>
      </div>
    )
  }
  