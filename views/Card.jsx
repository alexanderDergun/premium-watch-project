const React = require('react');

module.exports = function Card() {
    return (
        <div className="cardCointainer">
            <div className='cardContainerImg'>
                <img className="cardImg" src='/img/img1.png'></img>
            </div>
            <span className="cardCointeainerHeader">Zoro Mindsweep G</span>
            <span className="cardPrice">$169</span>
            <button>В корзину</button>
        </div>
    )
}