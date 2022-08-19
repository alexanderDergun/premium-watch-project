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
        <script defer src="/js/clientLogReg/client.reg.js" />
        <script defer src="/js/clientLogReg/client.login.js" />

      </head>
      <body>
        <header>
          {user

            ? (
              <nav className="navbar  navbar-light bg-light padding20px" id="navHeader">
                <a className="nav-link" id="loginLink" href="/">
                  Привет,
                  {' '}
                  {user.username}
                </a>
                <a className="navbar-brand" href="/">PREMIUM WATCH
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5003 3.41669C11.1045 3.41669 3.41699 11.1042 3.41699 20.5C3.41699 29.8959 11.1045 37.5834 20.5003 37.5834C29.8962 37.5834 37.5837 29.8959 37.5837 20.5C37.5837 11.1042 29.8962 3.41669 20.5003 3.41669ZM20.5003 34.1667C12.9666 34.1667 6.83366 28.0338 6.83366 20.5C6.83366 12.9663 12.9666 6.83335 20.5003 6.83335C28.0341 6.83335 34.167 12.9663 34.167 20.5C34.167 28.0338 28.0341 34.1667 20.5003 34.1667ZM21.3545 11.9584H18.792V22.2084L27.6753 27.675L29.042 25.4542L21.3545 20.8417V11.9584Z" fill="#6CC002" />
                  </svg>
                </a>
                <a className="nav-link" id="logoutLink" href="/logout">Выйти</a>

              </nav>
            )
            : (
              <nav className="navbar  navbar-light bg-light padding20px" id="navHeader">
                <a className="navbar-brand" href="/">PREMIUM WATCH
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5003 3.41669C11.1045 3.41669 3.41699 11.1042 3.41699 20.5C3.41699 29.8959 11.1045 37.5834 20.5003 37.5834C29.8962 37.5834 37.5837 29.8959 37.5837 20.5C37.5837 11.1042 29.8962 3.41669 20.5003 3.41669ZM20.5003 34.1667C12.9666 34.1667 6.83366 28.0338 6.83366 20.5C6.83366 12.9663 12.9666 6.83335 20.5003 6.83335C28.0341 6.83335 34.167 12.9663 34.167 20.5C34.167 28.0338 28.0341 34.1667 20.5003 34.1667ZM21.3545 11.9584H18.792V22.2084L27.6753 27.675L29.042 25.4542L21.3545 20.8417V11.9584Z" fill="#6CC002" />
                  </svg>
                </a>
                <a className="nav-link" id="loginLink" href="/login">Войти</a>
                <a className="nav-link" id="regLink" href="/rega">Зарегестрироваться</a>
              </nav>
            )}
        </header>
        {children}
      </body>
    </html>
  );
};
