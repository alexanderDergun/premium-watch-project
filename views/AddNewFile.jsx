const React = require("react");
const Layout = require("./Layout");


module.exports = function AddNewFile ({user}) {
    return (
        <Layout user={user}>
        <form  id='addFile' action="/lk/newFile" name='addFile' method='post'>
            
            Название:<input name="watchName" type="text" required/>
            <br />
            Описание<input name="description" type="text" required/>
            <br />
            Цена<input name="price" type="number" required/>
            <br />
            Добавить фото:<input name="picture" type="text"/>

            <br />
            <br />
            
            <button id="addButton" type="submit">
                Добавить
            </button>

        </form>
        </Layout>
    )
}

