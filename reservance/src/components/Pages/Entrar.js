import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import Input from '../form/Input';

function Cadastro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [erro, setErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setErro(false);
    setErrorMessage('');

    
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErro(true);
      setErrorMessage('Por favor, preencha todos os campos');
      return;
    }

    
    if (password !== confirmPassword) {
      setErro(true);
      setErrorMessage('As senhas não coincidem');
      return;
    }}

  return (
    <div className={styles.caixa}>
      <div2>
        <h2>Reservance</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="text"
            text="Nome"
            name="nome"
            id="username"
            placeholder="Insira o seu Nome de usuario ou email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: erro && username.trim() === '' ? 'red' : 'initial' }}
          />
          
          <Input
            type="password"
            text="Senha"
            name="senha"
            id="password"
            placeholder="Digite sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: erro && password.trim() === '' ? 'red' : 'initial' }}
          />
          
          {erro && <p className={styles.errorMessage}>{errorMessage}</p>}
          <p>Não possui uma conta? <a href="/Cadastro">Cadastrar-se</a></p>
          <button type="submit">Entrar</button>
        </form>
      </div2>
    </div>
  );
}

export default Cadastro;
