const AuthPage = () => {
  return (
    <div>
      <h1>Авторизация</h1>
      <form>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button>Войти</button>
      </form>
    </div>
  );
};

export default AuthPage;
