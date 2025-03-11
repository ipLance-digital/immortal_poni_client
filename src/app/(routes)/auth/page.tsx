'use client';

import { useStore } from '@/shared/store/useStore';
import { useState } from 'react';

const AuthPage = () => {
  const { user } = useStore();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    user.login({ username, password });
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form>
        <input
          type='text'
          placeholder='Логин'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='button' onClick={handleLogin}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
