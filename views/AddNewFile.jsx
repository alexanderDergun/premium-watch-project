const React = require('react');
const Layout = require('./Layout');

module.exports = function AddNewFile ({user}) {
    return (
        <Layout user={user}>
        <form  id='lk' action="/lk/newFile" name='lk' method='post'>
            
            <input type="file" onchange="previewFile()" /><br/>
            <img src="" height="200" alt="Image preview..." />
            <br />
            <br />
            
            <button>
                Добавить
            </button>

        </form>
        </Layout>
    )
}