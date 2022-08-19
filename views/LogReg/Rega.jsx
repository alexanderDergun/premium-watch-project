const React = require('react');
const Layout = require('../Layout');

module.exports = function Rega() {
  return (
    <Layout>
      <div className='regFormContainer'>
      <form id="regForm" action="/rega" method="POST">
        <label>
          {' '}
          Имя:
          <input required name="name" type="text" />
        </label>
        <label>
          Email
          <input required name="email" type="email" />
        </label>
        <label>
          Телефон:
          <input required name="phone" type="tel" />
        </label>
        <label>
          Пароль:
          <input required name="password" type="password" />
        </label>
        <label>
          Повторите пароль
          <input required name="reppassword" type="password" />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
      </div>
    </Layout>
  );
};
