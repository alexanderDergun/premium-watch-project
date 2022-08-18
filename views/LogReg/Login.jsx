const React = require('react');
const Layout = require('../Layout');

module.exports = function Login() {
  return (
    <Layout>
      <form id="logForm" action="/login" method="POST">
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Пароль:
          <input name="password" type="password" />
        </label>
        <a href="/login"><button id='btnLogin' type="submit">Зарегистрироваться</button></a>
      </form>
    </Layout>
  );
};
