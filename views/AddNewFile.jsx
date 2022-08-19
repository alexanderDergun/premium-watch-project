const React = require("react");
const Layout = require("./Layout");

module.exports = function AddNewFile({ user }) {
  return (
    <Layout user={user}>
      <form id="lk" action="/lk/newFile" name="lk" method="post">
        Название
        <input type="text" name="watchName" />
        <br />
        Описание
        <input type="text" name="description" />
        <br />
        Примерная стоимость
        <input type="text" name="price" />
        <br />
        <input type="text" name="picture"/>
        <br />
        <img src="" height="200" alt="Image preview..."  />
        <br />
        <br />
        <button id="addButton" type="submit">
          Добавить
        </button>
      </form>
    </Layout>
  );
};
