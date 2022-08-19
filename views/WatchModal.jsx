const React = require('react');

function WatchModal({ card, user }) {
  return (
    <>
      {!user.isAdmin
        ?
        <form action="/">
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{card.watchName}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img src={card.picture} alt={card.id} className="cardImg" />
                  <h6>{card.price}</h6>
                  <p>{card.description}</p>
                  <br />
                  <button type='submit'>Купить</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        :
        <form action="/" method="post" id="addDelete" name='addDelete'>
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{card.watchName}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img src={card.picture} alt={card.id} className="cardImg" />
                  <h6>{card.price}</h6>
                  <p>{card.description}</p>
                  <br />
                  <button id="changeButton" >Изменить</button>
                  <button className="deleteButton" type='button' href='#'>Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      }
    </>
  );
}

module.exports = WatchModal;

