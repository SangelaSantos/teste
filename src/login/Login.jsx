import React, { useState } from 'react';
import './Login.css';
import loginImg from '../assets/img/login-img.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('caminho-arquivo-json');
      const data = await response.json();
      
      const user = data.find(user => user.email === email && user.password === password);
      
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
    <div className='geral'>
      <div className="topo">
        <div className="logo">
          <p>Match Institucional</p>
        </div>
        <div className="topo-right">
          <p>Sobre</p>
          <button>CADASTRE-SE</button>
        </div>
      </div> 

      <div className='container'>
        <div className="container-interno">
          <h2>FAÇA LOGIN AGORA MESMO!</h2>
          <div className="inputs-field">
            <p>E-mail</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <p>Senha</p>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin}>ENTRAR</button>
          {error && <div>{error}</div>}
        </div>
        <img src={loginImg} alt="Login" />
      </div>
    </div>
  );
};

export default Login;