import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // perform login logic here (e.g. fetch API call)
    // if successful, set isLoggedIn to true
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    // perform logout logic here
    // set isLoggedIn to false
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ?
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div> :
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      }
    </div>
  );
}

export default LoginForm;
