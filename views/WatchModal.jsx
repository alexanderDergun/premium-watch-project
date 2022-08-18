const React = require('react');

function WatchModal({ card }) {
  return (
    <div className="modal d-block" tabindex="-1">
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
            <h6>{card.price}</h6>
            <p>{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = WatchModal;
