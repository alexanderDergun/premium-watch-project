const React = require('react');

module.exports = function Card({ card }) {
    return (
        <div className="cardCointainer" data-id={card.id}>
            <div className='cardContainerImg' data-id={card.id}>
                <img className="cardImg" src={card.picture} data-id={card.id}></img>
            </div>
            <span className="cardCointeainerHeader" data-id={card.id}> {card.watchName} </span>
            <span className="cardPrice" data-id={card.id}> {card.price} </span>
            <button>В корзину</button>
        </div>
    )
}