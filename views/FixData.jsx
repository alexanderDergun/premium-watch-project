const React = require('react');
const Layout = require('./Layout');

module.exports = function FixData ({user}) {
    return (
        <Layout user={user}>
        <form id='fixData' action="/lk/editor" name='fixData' method='post'>
            
            Изменить имя:<input name="name" type="text" value={user.username} required/>
            <br />
            Изменить Email:<input name="email" type="email" value={user.email} required/>
            <br />
            Изменить телефон:<input name="phone" type="tel" value={user.phone} required/>
            <br />
            Изменить пароль:<input name="password" type="password"/>
            <br />
            Повторите пароль:<input name="repeatPassword" type="password" />

            <br />
            <br />
            
            <button type="submit">
                Изменить
            </button>

        </form>
        </Layout>
    )
}