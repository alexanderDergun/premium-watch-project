const React = require('react');

module.exports = function Card({card}) {
    return (
        <div className="cardCointainer" data-id={card.id}>
            <div className='cardContainerImg'>
                <img className="cardImg" src={card.picture}></img>
            </div>
            <span className="cardCointeainerHeader">{card.watchName}</span>
            <span className="cardPrice">{card.price}</span>
            <button>В корзину</button>
        </div>
    )
}