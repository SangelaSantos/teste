import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('./login/bd.json');
      const data = await response.json();
      
      const user = data.find(user => user.username === username && user.password === password);
      
      if (user) {
        console.log('Login successful');
      } else {
        setError('Nome de usuário ou senha inválidos');
      }
    } catch (error) {
      setError('Erro ao fazer login');
      console.error(error);
    }
  };

  return (
    <div className='Container'>
      <h2>Login</h2>
      <input type="text" placeholder="Nome de Usuário" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;