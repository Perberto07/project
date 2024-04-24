import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 const navigate = useNavigate();
  

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Submitting login request with username:", username);
  
    axios.post('http://localhost:8081/login', { username, password })
      .then(res => {
        console.log("Login successful:", res.data);
        navigate('/')
      })
      .catch(err => {
        console.error("Login failed:", err);
        setError('Failed to login. Please try again.'); // Display error to the user
      });
  }

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label htmlFor="username">Enter Username: </label>
          <input
            type="text"
            id="username"
            placeholder='Enter Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className='mb-2'>
          <label htmlFor="password">Enter Password: </label>
          <input
            type="password" // Changed type to password
            id="password"
            placeholder='Enter Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Login;
