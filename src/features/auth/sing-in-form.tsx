'use client';

import { useState } from 'react';
import { useSignIn } from './actions/use-sign-in';

export const SignInForm = () => {
  const signInQuery = useSignIn();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInQuery.login({
      username,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name={'username'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        name={'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={signInQuery.isPending}>Sign In</button>
    </form>
  );
};
