const React = require('react');
const Layout = require('./Layout');

module.exports = function Header({user}) {
    return (
            <nav className="navbar fixed-top navbar-light bg-light padding20px">
                <a class="nav-link" id="loginLink" href="#">{ user }</a>
                <a class="navbar-brand" href="#">Fixed top</a>
                <a class="nav-link" id="loginLink" href="#">Войти</a>
                <a class="nav-link" id="regLink" href="#">Зарегестрироваться</a>
            </nav>
    )
}