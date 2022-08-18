const React = require('react');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <title>{title}</title>
        <link href="/css/styles.css" rel="stylesheet"></link>
      </head>
      <body>
        <header>
          <nav className="navbar  navbar-light bg-light padding20px" id="navHeader">
            <a className="nav-link" id="loginLink" href="#">{user}</a>
            <a className="navbar-brand" href="/">Fixed top</a>
            <a className="nav-link" id="loginLink" href="/login">Войти</a>
            <a className="nav-link" id="regLink" href="/rega">Зарегестрироваться</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
};
