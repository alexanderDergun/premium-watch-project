const React = require('react');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <title>{title}</title>
        <link href="/css/styles.css" rel="stylesheet" />
        <script defer src="/js/client.js" />

        <script defer src="/js/addCard.js" />
        {/* <script defer src="/js/delete.js" /> */}
        <script defer src="/js/modalClient.js" />

        <script defer src="/js/clientLogReg/client.reg.js" />
        <script defer src="/js/clientLogReg/client.login.js" />
        <script defer src="/js/modalClient.js" />


      </head>
      <body id='BODY'>
        <header>
          {user

            ?
            user.isAdmin
              ?
              <nav className="navbar  navbar-light bg-transparent padding20px" id="navHeader">
                <a className="navbar-brand" href="/">PREMIUM WATCH
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM15.625 8.75H13.75V16.25L20.25 20.25L21.25 18.625L15.625 15.25V8.75Z" fill="#6CC002" />
                  </svg>
                </a>
                <a className="nav-link" id="loginLink" href="/lk">Привет, Админ:{user.username}</a>
                <a className="nav-link" id="logoutLink" href="/logout">Выйти</a>
              </nav>
              :
              <nav className="navbar  navbar-light bg-transparent padding20px" id="navHeader">
                <a className="navbar-brand" href="/">PREMIUM WATCH
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM15.625 8.75H13.75V16.25L20.25 20.25L21.25 18.625L15.625 15.25V8.75Z" fill="#6CC002" />
                  </svg>
                </a>
                <a className="nav-link" id="loginLink" href="/lk">Привет, {user.username}</a>
                <a className="nav-link" id="logoutLink" href="/logout">Выйти</a>

              </nav>

            :
            <nav className="navbar  navbar-light bg-transparent padding20px" id="navHeader">
              <a className="navbar-brand" href="/">PREMIUM WATCH
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM15.625 8.75H13.75V16.25L20.25 20.25L21.25 18.625L15.625 15.25V8.75Z" fill="#6CC002" />
                </svg>
              </a>
              <a className="nav-link" id="loginLink" href="/login">Войти</a>
              <a className="nav-link" id="regLink" href="/rega">Зарегистрироваться</a>
            </nav>
          }
        </header>
        {children}
      </body>
    </html>
  );
};
