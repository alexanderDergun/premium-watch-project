const React = require('react');
const Layout = require('./Layout');

module.exports = function Lk ({user}) {
    return (
        <Layout user={user}>
        <form id='lk' action="/lk" name='lk' method='get'>
            <label>
                Имя:{user.username}
            </label>
            <br/>
            <label>
                Email:{user.email}
            </label>
            <br/>
            
            {user.isAdmin 
            ? 
            <>
            <a className="btn btn-dark" href="/lk/editor">Изменить данные</a>
              <a className="btn btn-dark" href="/lk/newFile">Добавить карточку товара</a>
             
            </>
            :
            <>
            <a className="btn btn-dark" href="/lk/editor">Изменить данные</a>
            <a className="btn btn-dark" href="/lk/newFile">Добавить эскиз</a>
            <div>
                <label>Мои заказы</label>
                <ul>
           
                </ul>
            </div>
            </>
            }

        </form>
        </Layout>
    )
}