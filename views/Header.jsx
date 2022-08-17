const React = require('react');
const Layout = require('./Layout');

module.exports = function Header() {
    return (
        <Layout>
            <nav className="navbar fixed-top navbar-light bg-light padding20px">
                <a class="navbar-brand" href="#">Fixed top</a>
                <a class="nav-link" href="#">Войти</a>
                <a class="nav-link" href="#">Зарегестрироваться</a>
            </nav>
        </Layout>

    )
}