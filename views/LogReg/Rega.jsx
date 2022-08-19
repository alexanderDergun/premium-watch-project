const React = require('react');
const Layout = require('../Layout');

module.exports = function Rega() {
  return (
    <Layout>
      <form id="regForm" action="/rega" method="POST">
        <label>
          {' '}
          Имя:
          <input name="name" type="text" />
        </label>
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Телефон:
          <input name="phone" type="tel" />
        </label>
        <label>
          Пароль:
          <input name="password" type="password" />
        </label>
        <label>
          Повторите пароль
          <input name="reppassword" type="password" />
        </label>
        <button type="submit" className="btn btn-success">Зарегистрироваться</button>
      </form>
    </Layout>
  );
};
